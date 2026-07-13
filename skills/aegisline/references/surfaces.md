# Security surfaces

Read only the relevant sections.

## Frontend and browser

- Prevent DOM and reflected/stored XSS: avoid unsafe HTML, URL, and CSS sinks; use framework escaping and maintained contextual sanitizers.
- Do not put secrets or trusted authorization decisions in browser code or storage. Prefer secure, HttpOnly, SameSite cookies when the architecture permits.
- Check CSRF for cookie-authenticated mutations, clickjacking for sensitive UI, postMessage origin/source validation, redirects, and iframe or Worker boundaries.
- Treat CSP, Trusted Types, SRI, and headers as layered defenses. CORS is not authentication.
- Avoid personal data in hydration payloads, source maps, analytics, caches, and client logs.

## Backend and API

- Authenticate first; authorize every operation and object, including tenant ownership and field-level changes.
- Check interpreter injection, SSRF, unsafe deserialization, mass assignment, path traversal, archive extraction, and file handling.
- Bound bodies, uploads, queries, pagination, concurrency, and expensive endpoints. Rate-limit abuse-prone identities and operations.
- Verify webhook signatures over canonical raw bytes and prevent replay. Constrain server-side fetch destinations.
- Make sensitive transitions atomic and resistant to replay, races, duplicate delivery, and partial failure.
- Return generic external errors; log structured, redacted security events.

## Mobile

- Follow platform APIs and the current OWASP MASVS/MASWE model.
- Store credentials and keys in Keychain/Keystore-backed facilities; exclude sensitive data from backups, screenshots, clipboard, notifications, logs, and shared storage.
- Enforce TLS and hostname verification. Treat pinning as a threat-model decision with rotation and recovery.
- Validate deep links, intents, URL schemes, exported components, universal/app links, and inter-app messages.
- Restrict WebView bridges, file access, navigation, content, and origins.
- Minimize permissions; protect local databases, signing, provisioning, update channels, debug flags, symbols, and CI credentials.

## AI, LLM, RAG, and agents

- Treat prompts, retrieved content, tool output, documents, metadata, and model output as untrusted. Keep instructions separate from content.
- Expect direct and indirect prompt injection; prompting alone cannot enforce a security boundary.
- Gate every tool call with deterministic authorization, typed schemas, allowlisted resources/actions, least privilege, confirmation for high-impact actions, and bounded arguments.
- Validate model output before code, shells, browsers, databases, templates, workflows, or other interpreters.
- Prevent disclosure through prompts, retrieval, traces, embeddings, caches, evals, and provider logs. Apply tenant isolation before retrieval.
- Protect RAG/model supply chains with provenance, ingestion validation, access control, poisoning detection, and version pinning.
- Bound tokens, recursion, tool calls, fan-out, time, and spend. Add circuit breakers and idempotency.
- Evaluate excessive agency, goal hijacking, insecure output handling, overreliance, model theft, and vector/embedding weaknesses.

## Infrastructure, CI/CD, and cloud

- Use least-privilege workload identity and avoid long-lived CI secrets or wildcard permissions.
- Pin actions, images, modules, and build inputs to trustworthy immutable versions where practical.
- Deny public management access by default; separate environments and protect artifact provenance, state files, logs, metadata services, and rollback.
- Review egress, secret injection, destructive permissions, and failure recovery.

## Desktop, embedded, and systems code

- Define privilege boundaries, IPC authentication, update signing, plugin loading, filesystem permissions, and sandbox assumptions.
- For memory-unsafe code, prioritize bounds, lifetime, integer overflow, format strings, races, unsafe FFI, and parser attack surface.
- For devices, include secure boot, signed firmware, debug interfaces, key storage, rollback protection, physical access, recovery, and safe failure.
