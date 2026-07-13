# AegisLine repository guidance

AegisLine standard mode is active for coding work in this repository.

Before changing code, identify the changed trust boundaries, untrusted inputs, privileged actions, sensitive assets, and failure impact. Preserve these invariants:

- authorization is enforced in a trusted process, deny-by-default, for the action and object;
- input is validated at trust boundaries and kept separate from SQL, shells, HTML, templates, paths, and other interpreters;
- secrets and sensitive data do not enter source, clients, URLs, logs, errors, prompts, or model context;
- maintained platform cryptography and secure password hashing are used;
- permissions, data retention, exposed interfaces, and dependencies are minimized;
- work is bounded with timeouts, size limits, rate limits, safe retries, and atomic state changes where relevant;
- changed security boundaries receive focused positive and negative verification.

For reviews, trace source to sink and report only plausible attack paths. Each finding needs severity, exact location, preconditions, impact, smallest robust fix, and verification. State review limits and residual risk. Never claim compliance or security from a model review alone.

Load `skills/aegisline/SKILL.md` for the complete workflow and its surface, language, and OWASP references.
