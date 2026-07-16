# AI, LLM, RAG, MCP, and agent security

Prompting is not a security boundary. Place deterministic controls around model and agent behavior.

- Treat user prompts, retrieved documents, web pages, tool descriptions, MCP metadata, memory, files, tool output, and model output as untrusted content. Keep instructions and data structurally separate where possible.
- Expect direct and indirect prompt injection, goal hijacking, context poisoning, tool poisoning, and malicious multi-agent messages. Do not grant authority based on model confidence or text that claims to be trusted.
- Authorize every tool action in trusted code using the authenticated principal, current tenant, typed arguments, allowlisted resources and actions, least-privilege credentials, and fresh state. Require human confirmation for clearly explained high-impact, irreversible, or external actions.
- Prevent confused-deputy behavior: bind delegation, approvals, callbacks, and tool results to the originating user, task, scope, and expiry. Reauthorize when plans or arguments materially change.
- Validate and encode model output before passing it to shells, code execution, browsers, databases, templates, workflows, URLs, or other interpreters. Sandbox execution and constrain filesystem, network, time, and resources.
- Enforce tenant and document authorization before retrieval, not after generation. Track provenance, validate ingestion, isolate indexes and caches, detect poisoning, and define deletion and re-indexing behavior.
- Treat memory as a write-capable security surface. Scope it by identity and tenant, validate writes, limit retention, preserve provenance, and prevent untrusted content from becoming durable instructions.
- Do not put secrets in system prompts or assume prompts stay hidden. Minimize provider logging, traces, eval datasets, embeddings, caches, and fine-tuning data; redact and apply retention controls.
- Verify model, dataset, adapter, prompt, tool, MCP server, and dependency provenance. Pin versions where practical and review remote changes before granting authority.
- Bound input/output tokens, recursion, planning steps, retries, tool calls, fan-out, parallel agents, time, and spend. Add circuit breakers, idempotency, cancellation, and safe partial-failure behavior.
- Test adversarial documents, cross-tenant retrieval, unauthorized tools, poisoned memory, malformed tool output, delayed or duplicated actions, cost exhaustion, and refusal/override paths. Preserve privacy-aware audit trails and a human recovery path.
