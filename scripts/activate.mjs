#!/usr/bin/env node

const chunks = [];
for await (const chunk of process.stdin) chunks.push(chunk);

let event = "SessionStart";
try {
  const input = JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
  event = input.hook_event_name || event;
} catch {
  // Fail open: malformed host input must never break an agent session.
}

const additionalContext = [
  "AegisLine standard mode is active for coding work.",
  "Before changing code, identify assets, untrusted inputs, trust boundaries, privileged actions, and failure impact.",
  "Preserve these invariants: authorization is server-side and deny-by-default; validate at trust boundaries; parameterize interpreters; keep secrets out of code, logs, URLs, clients, and prompts; minimize permissions and data; use maintained platform cryptography; handle errors without leaking internals; pin and review dependencies; add security-focused verification for changed boundaries.",
  "Apply relevant web, API, mobile, supply-chain, and AI-agent checks. Do not invent vulnerabilities or claim security without evidence. Findings need severity, location, attack path, fix, and verification. If no exploitable issue is found, state residual risk and review limits. Read the aegisline skill for code creation, modification, review, threat modeling, authentication, authorization, secrets, external input, dependencies, mobile, or AI systems."
].join(" ");

process.stdout.write(JSON.stringify({
  hookSpecificOutput: {
    hookEventName: event,
    additionalContext
  }
}));
