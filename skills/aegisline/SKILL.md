---
name: aegisline
description: Apply secure-by-default engineering to frontend, backend, API, mobile, infrastructure, systems, and AI/LLM code in any programming language. Use when implementing or fixing code that handles untrusted input, identity, authorization, sessions, secrets, files, URLs, databases, external services, dependencies, privileged operations, personal data, mobile APIs, prompts, RAG, MCP, tools, agents, or model output; also use for threat modeling and requests to secure a change.
---

# AegisLine

Build the smallest maintainable change that preserves the real security boundaries. Prefer evidence and language-native safe APIs over generic checklists. Never claim that model review proves security or compliance.

## Choose the operation

- Default: implement or fix the requested scope securely.
- `strict`: state threat assumptions and add focused negative tests for each changed trust boundary.
- `threat-model [scope]`: model assets, actors, boundaries, abuse cases, and mitigations before implementation.
- `review [scope]`: use `aegisline-review`; remain read-only.
- `audit [scope]`: use `aegisline-audit`; remain read-only.
- `help`: use `aegisline-help`.

Use invocation arguments when the host supplies them. Otherwise infer scope only from the user's request and current task.

## Secure workflow

1. Inspect only the files, versions, callers, and configuration needed to trace the affected flow.
2. Identify assets, attacker-controlled sources, trust boundaries, identities, privileged actions, security-sensitive sinks, prerequisites, and failure impact.
3. Check existing controls before proposing new ones. Distinguish client checks from trusted-process enforcement.
4. Load only the relevant reference:
   - [frontend.md](references/frontend.md) for browsers and frontend applications.
   - [backend.md](references/backend.md) for servers, APIs, identity, data, and business logic.
   - [mobile.md](references/mobile.md) for Android, iOS, Flutter, React Native, and mobile clients.
   - [ai.md](references/ai.md) for LLM, RAG, MCP, tools, agents, and model pipelines.
   - [platform.md](references/platform.md) for CI/CD, dependencies, cloud, containers, desktop, embedded, and systems code.
   - [languages.md](references/languages.md) for language- and framework-specific primitives.
   - [owasp.md](references/owasp.md) only when standards mapping is requested or useful.
   - [verification.md](references/verification.md) when choosing tests or security tools.
5. Implement the smallest robust change. Do not silently widen scope, add a dependency, or change public behavior without justification.
6. Run focused positive and negative verification. Report exactly what ran, what was inferred, and what remains unverified.

## Security invariants

- Enforce authentication and action, object, field, and tenant authorization in a trusted process; deny by default.
- Validate type, size, range, syntax, state, and business rules at every trust boundary.
- Keep untrusted data separate from SQL, shells, HTML, templates, paths, URLs, headers, logs, prompts, and other interpreters.
- Keep secrets and sensitive data out of source, clients, URLs, logs, errors, analytics, prompts, traces, and model context.
- Treat third-party responses, files, retrieved content, tool output, and model output as untrusted.
- Use maintained platform cryptography and password hashing; never design custom crypto or weaken certificate validation.
- Protect sessions, recovery, webhooks, and sensitive transitions from replay, fixation, enumeration, races, and cross-account use.
- Bound time, memory, bodies, uploads, queries, pagination, concurrency, retries, recursion, tool calls, tokens, and spend.
- Minimize permissions, exposed interfaces, retained data, dependency surface, and security burden placed on users.
- Preserve redacted, tamper-aware audit evidence for important security decisions and failures.

## Output

Use a compact result:

```text
Result: what changed or was designed
Security decisions: controls and trust assumptions
Verification: commands/tests and outcomes
Residual risk: unverified or environment-dependent concerns
```

For a threat model, return scope, assumptions, assets, actors, boundaries, entry points, privileged actions, top abuse cases, mitigations, validation, and unresolved risks. Use STRIDE only as a completeness aid.

## Boundaries

Use safe local tests and inert proof strings. Ask before active network testing, destructive fuzzing, credential use, or production changes. Never access unrelated data, expose secrets, weaken controls to prove a finding, or replace dedicated SAST, dependency and secret scanning, penetration testing, mobile testing, AI red teaming, and human review.
