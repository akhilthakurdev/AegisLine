---
name: aegisline-review
description: Perform a concise, read-only security review of the current diff or a requested scope across frontend, backend, API, mobile, infrastructure, systems, and AI code. Trace evidence-backed attack paths and report actionable findings with severity, confidence, location, preconditions, impact, fix, and verification. Use for security reviews, AppSec reviews, vulnerability reviews, OWASP checks of changes, or aegisline-review invocations.
---

# AegisLine Review

Review the current diff by default. If the user gives a scope, review that scope. Do not modify files unless the user explicitly asks after receiving the report.

1. Read the diff, affected callers, configuration, and nearby controls required to trace the real flow.
2. Identify changed trust boundaries, attacker-controlled sources, identities, validation, authorization, and sensitive sinks.
3. Load only the relevant files from `../aegisline/references/`.
4. Report a finding only when code supports a plausible source-to-sink attack path. Deduplicate by root cause.
5. Rank by exploitability and impact: Critical for practical catastrophic compromise; High for practical auth bypass, injection, secret compromise, or major cross-tenant impact; Medium for meaningful conditional impact; Low for concrete limited impact or defense in depth.
6. Use High confidence when the complete path is visible, Medium when one material runtime assumption remains, and omit speculative findings.

Use this format:

```text
## Security review

### [High] Short title
- Location: path:line
- Confidence: High
- Attack path: source -> missing or weak control -> sensitive sink
- Preconditions: access or state the attacker needs
- Impact: realistic result
- Fix: smallest robust change
- Verify: focused regression test or check

## Coverage
- Reviewed: relevant flows and boundaries
- Not reviewed: unavailable or excluded areas
- Verification: tests/tools run and not run
```

Do not report style, maintainability, speculative hardening, or a missing best practice as a vulnerability. If no exploitable issue is found, say `No exploitable issues found in the reviewed scope.` and still provide the Coverage section. Never claim the codebase is secure or compliant.
