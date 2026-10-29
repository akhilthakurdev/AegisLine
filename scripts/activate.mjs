#!/usr/bin/env node

import { pathToFileURL } from "node:url";

export const additionalContext = "AegisLine baseline: for changed trust boundaries, enforce trusted-process authorization, validate untrusted input, keep data separate from interpreters, keep secrets out of code/logs/URLs/clients/prompts, minimize privilege, bound work, and add focused negative tests. Use an AegisLine skill for explicit security work; report only evidence-backed attack paths.";

export function buildHookOutput(raw = "{}") {
  let event = "SessionStart";
  try {
    const input = typeof raw === "string" ? JSON.parse(raw || "{}") : raw;
    event = input?.hook_event_name || event;
  } catch {
    // Fail open: malformed host input must never break an agent session.
  }

  return {
    hookSpecificOutput: {
      hookEventName: event,
      additionalContext
    }
  };
}

export function buildCopilotHookOutput() {
  return { additionalContext };
}

async function main() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  const output = process.argv.includes("--copilot")
    ? buildCopilotHookOutput()
    : buildHookOutput(Buffer.concat(chunks).toString("utf8"));
  process.stdout.write(JSON.stringify(output));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
