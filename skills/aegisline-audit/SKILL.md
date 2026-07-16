---
name: aegisline-audit
description: Perform a risk-prioritized, read-only security audit of an entire repository or broad requested scope covering frontend, backend, APIs, mobile, infrastructure, systems, supply chain, and AI. Map entry points and trust boundaries, trace plausible attack paths, and return ranked actionable findings plus coverage limits. Use for repository audits, whole-codebase scans, broad OWASP or AppSec audits, or aegisline-audit invocations.
---

# AegisLine Audit

Audit read-only. Do not apply fixes unless the user asks after reviewing the report.

1. Inventory manifests, deployable services, entry points, identities, data stores, external integrations, CI/CD, mobile clients, infrastructure, native code, and AI components. Exclude generated, vendored, build, and dependency directories unless supply-chain evidence points there.
2. Map assets, trust boundaries, privileged actions, tenants, and security-sensitive sinks.
3. Prioritize authorization and tenant isolation; input reaching interpreters; files, URLs, network and process execution; secrets and cryptography; sessions and recovery; dependency and CI identity; mobile IPC and storage; and AI retrieval, tools, memory, and output.
4. Load only relevant files from `../aegisline/references/`. Trace high-risk paths before broad low-value searching.
5. Report only evidence-backed attack paths. Deduplicate by root cause and rank by severity, exploitability, confidence, and impact.
6. Stop when remaining areas are materially lower risk or evidence is unavailable, then state the limit.

Use the finding format from `aegisline-review`. End with:

```text
## Audit coverage
- Reviewed: surfaces and trust boundaries
- Not reviewed: excluded or unavailable areas
- Verification: tests/tools run and not run
- Residual risk: important uncertainty
```

If no exploitable issue is found, say so without claiming the repository is secure or compliant. A whole-repository audit intentionally costs more time and tokens than a diff review.
