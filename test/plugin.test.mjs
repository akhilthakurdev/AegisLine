import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";
import { additionalContext, buildHookOutput } from "../scripts/activate.mjs";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const json = (path) => JSON.parse(read(path));

test("manifests and marketplaces describe release 0.2.0", () => {
  const pkg = json("../package.json");
  const codex = json("../.codex-plugin/plugin.json");
  const claude = json("../.claude-plugin/plugin.json");
  const sharedMarket = json("../.claude-plugin/marketplace.json");
  const codexMarket = json("../.agents/plugins/marketplace.json");

  assert.equal(pkg.version, "0.2.0");
  assert.equal(codex.version, pkg.version);
  assert.equal(claude.version, pkg.version);
  assert.equal(sharedMarket.plugins[0].version, pkg.version);
  assert.equal(sharedMarket.plugins[0].source, "./");
  assert.equal(codexMarket.interface.displayName, "AegisLine");
  assert.equal(codexMarket.plugins[0].source.source, "url");
  assert.equal(codexMarket.plugins[0].policy.installation, "AVAILABLE");
  assert.equal(codexMarket.plugins[0].policy.authentication, "ON_INSTALL");
});

test("activation is compact and runs only at session boundaries", () => {
  const hooks = json("../hooks/hooks.json");
  assert.deepEqual(Object.keys(hooks.hooks), ["SessionStart"]);
  assert.match(hooks.hooks.SessionStart[0].matcher, /compact/);

  const output = buildHookOutput(JSON.stringify({ hook_event_name: "SessionStart" }));
  assert.equal(output.hookSpecificOutput.hookEventName, "SessionStart");
  assert.equal(output.hookSpecificOutput.additionalContext, additionalContext);
  assert.match(additionalContext, /AegisLine baseline/);
  assert.match(additionalContext, /authorization/);
  assert.ok(additionalContext.length <= 450, `activation context is ${additionalContext.length} characters`);
});

test("focused skills and progressive references stay compact", () => {
  for (const name of ["aegisline", "aegisline-review", "aegisline-audit", "aegisline-help"]) {
    const skill = read(`../skills/${name}/SKILL.md`);
    const metadata = read(`../skills/${name}/agents/openai.yaml`);
    assert.match(skill, new RegExp(`name: ${name}`));
    assert.doesNotMatch(skill, /TODO|\[TODO/);
    assert.match(metadata, new RegExp(`\\$${name}`));
    assert.ok(Buffer.byteLength(skill) < 8000, `${name} should remain compact`);
  }

  const references = ["frontend", "backend", "mobile", "ai", "platform", "languages", "owasp", "verification"];
  const main = read("../skills/aegisline/SKILL.md");
  for (const name of references) {
    const path = `../skills/aegisline/references/${name}.md`;
    assert.ok(existsSync(new URL(path, import.meta.url)), `missing ${name} reference`);
    assert.match(main, new RegExp(`references/${name}\\.md`));
    assert.ok(Buffer.byteLength(read(path)) < 7000, `${name} reference should stay focused`);
  }

  assert.doesNotMatch(main, /references\/surfaces\.md/);
  assert.match(read("../skills/aegisline/references/owasp.md"), /ASVS 5\.0\.0/);
  assert.match(read("../skills/aegisline/references/owasp.md"), /Agentic Applications 2026/);
  assert.match(read("../skills/aegisline/references/ai.md"), /confused-deputy/);
  assert.match(read("../skills/aegisline/references/ai.md"), /MCP/);
});

test("host command syntax matches current plugin behavior", () => {
  const readme = read("../README.md");
  const help = read("../skills/aegisline-help/SKILL.md");
  const commandRow = "| Review current diff | `$aegisline-review` | `/aegisline:aegisline-review` | `/aegisline-review` | `/aegisline-review` |";
  const helpRow = "| Review diff | `$aegisline-review` | `/aegisline:aegisline-review` | `/aegisline-review` | `/aegisline-review` |";

  assert.ok(readme.includes(commandRow));
  assert.ok(help.includes(helpRow));
  assert.match(readme, /Claude Code namespaces installed plugin skills/);
  assert.match(read("../.github/prompts/aegisline-review.prompt.md"), /skills\/aegisline-review\/SKILL\.md/);
});

test("Cursor and OpenCode expose matching compact commands", () => {
  assert.match(read("../.cursor/rules/aegisline.mdc"), /alwaysApply: true/);

  for (const name of ["aegisline", "aegisline-review", "aegisline-audit", "aegisline-help"]) {
    const cursorPath = new URL(`../.cursor/commands/${name}.md`, import.meta.url);
    const openCodePath = new URL(`../.opencode/commands/${name}.md`, import.meta.url);
    assert.ok(existsSync(cursorPath), `missing Cursor command ${name}`);
    assert.ok(existsSync(openCodePath), `missing OpenCode command ${name}`);
    assert.ok(Buffer.byteLength(read(`../.cursor/commands/${name}.md`)) < 1400, `Cursor command ${name} is too large`);
    assert.ok(Buffer.byteLength(read(`../.opencode/commands/${name}.md`)) < 1400, `OpenCode command ${name} is too large`);
  }

  assert.match(read("../.opencode/commands/aegisline-review.md"), /\$ARGUMENTS/);
  assert.match(read("../.opencode/commands/aegisline-audit.md"), /\$ARGUMENTS/);
});

test("public release files are safe and complete", () => {
  const license = read("../LICENSE");
  const workflow = read("../.github/workflows/validate.yml");
  const readme = read("../README.md");

  assert.ok(Buffer.byteLength(license) > 10000, "Apache-2.0 license text is incomplete");
  assert.match(license, /TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION/);
  assert.match(license, /Copyright 2026 AegisLine Contributors/);
  assert.equal(read("../.gitignore").replace(/\r\n/g, "\n"), "node_modules/\ncoverage/\n.DS_Store\n*.log\n");
  assert.match(read("../.gitattributes"), /\* text=auto eol=lf/);
  assert.match(workflow, /permissions:\s+contents: read/);
  assert.match(workflow, /actions\/checkout@[0-9a-f]{40}/);
  assert.match(workflow, /actions\/setup-node@[0-9a-f]{40}/);
  assert.doesNotMatch(workflow, /pull_request_target/);
  assert.doesNotMatch(readme, /YOUR_GITHUB_USERNAME|C:[/\\]Users|G:[/\\]projects|AppData/i);
});
