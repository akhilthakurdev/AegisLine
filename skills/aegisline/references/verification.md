# Security verification

Choose the smallest verification set that can disprove the security assumptions of the change.

1. Run existing project tests, linters, type checks, and security tools before adding new tooling.
2. Add focused negative tests at changed boundaries: missing identity, wrong role, wrong tenant/object, malformed and oversized input, unsafe interpreter characters, replay, duplicate delivery, races, timeout, and downstream failure.
3. Use property tests or fuzzing for parsers, codecs, archive handling, protocol state, unsafe/native boundaries, and complex validation when practical.
4. Use dependency, secret, SAST, IaC, container, mobile, or AI evaluation tools only when relevant. Record tool version, scope, configuration, and result; triage reachability and suppress only with evidence.
5. Prefer inert local fixtures. Ask before network scanning, exploit execution, credential use, destructive fuzzing, production access, or large dependency installation.
6. Never invent a command result or call an unrun test passing. State environmental limits and what requires dynamic, device, cloud, penetration, or red-team testing.

Complement code-level OWASP checks with:

- NIST SSDF 1.1 for secure development lifecycle outcomes: https://csrc.nist.gov/projects/ssdf
- CISA Secure by Design for safe defaults and ownership of customer security outcomes: https://www.cisa.gov/securebydesign
- NIST AI RMF Generative AI Profile for broader AI risk management: https://doi.org/10.6028/NIST.AI.600-1

These frameworks guide coverage; they do not turn a source review into certification.
