---
description: Review the current diff for exploitable security issues
---

Perform a read-only AegisLine security review of $ARGUMENTS. If no scope is given, review the current diff. Trace attacker-controlled sources through identity, validation, and authorization to sensitive sinks. Report only plausible attack paths. For each finding provide severity, location, confidence, attack path, preconditions, impact, smallest robust fix, and verification. End with coverage and tests or tools not run. If none are found, say so without claiming the code is secure. Do not modify files.
