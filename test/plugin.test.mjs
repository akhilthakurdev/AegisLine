import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const json = (path) => JSON.parse(read(path));

test("manifests describe the same release", () => {
  const codex = json("../.codex-plugin/plugin.json");
  const claude = json("../.claude-plugin/plugin.json");
  const market = json("../.claude-plugin/marketplace.json");
  assert.equal(codex.name, "aegisline");
  assert.equal(claude.name, codex.name);
  assert.equal(claude.version, codex.version);
  assert.equal(market.plugins[0].version, codex.version);
  assert.equal(market.plugins[0].source, ".");
});

test("activation hook contains the required security context", () => {
  const source = read("../scripts/activate.mjs");
  assert.match(source, /AegisLine standard mode/);
  assert.match(source, /authorization/);
  assert.match(source, /hookSpecificOutput/);
  assert.match(source, /additionalContext/);
});
