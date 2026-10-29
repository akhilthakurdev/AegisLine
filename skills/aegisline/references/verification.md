# Security verification

Choose the smallest verification set that can disprove the security assumptions of the change.

1. Run existing project tests, linters, type checks, and security tools before adding new tooling.
2. Add focused negative tests at changed boundaries: missing identity, wrong role, wrong tenant/object, malformed and oversized input, unsafe interpreter characters, replay, duplicate delivery, races, timeout, and downstream failure.
3. Use property tests or fuzzing for parsers, codecs, archive handling, protocol state, unsafe/native boundaries, and complex validation when practical.
4. Use dependency, secret, SAST, IaC, container, mobile, or AI evaluation tools only when relevant. Record tool version, scope, configuration, and result; triage reachability and suppress only with evidence.
5. Prefer inert local fixtures. Ask before network scanning, exploit execution, credential use, destructive fuzzing, production access, or large dependency installation.
6. Never invent a command result or call an unrun test passing. State environmental limits and what requires dynamic, device, cloud, penetration, or red-team testing.

Use OWASP WSTG stable tests for web runtime checks and the MASVS → MASWE 1.0.0 → MASTG 2.0.0 traceability chain for mobile. Cite exact editions and test IDs; do not silently map old MASWE beta IDs to the stable numbering.

For vulnerability and dependency findings, confirm the exact component and version, deployment exposure, reachability, prerequisites, fixed version, and applicable vendor guidance. Use CISA KEV as evidence of known exploitation and a prioritization input; absence from KEV is not evidence of safety. Use the MITRE CWE Top 25:2025 to prioritize recurring weakness classes, not as an exhaustive checklist or severity score for a specific finding.

Complement code-level OWASP checks with:

- NIST SSDF 1.1 for secure development lifecycle outcomes: https://csrc.nist.gov/projects/ssdf
- NIST SP 800-218A for generative AI and foundation-model development practices: https://csrc.nist.gov/pubs/sp/800/218/a/final
- CISA Secure by Design for safe defaults and ownership of customer security outcomes: https://www.cisa.gov/securebydesign
- NIST AI RMF Generative AI Profile for broader AI risk management: https://doi.org/10.6028/NIST.AI.600-1
- OWASP GenAI Red Teaming Manual 1.0 for scoped, authorized AI security evaluations: https://genai.owasp.org/resource/genai-red-teaming-manual-version-1-0/
- OWASP WSTG stable for web security testing: https://wstg.owasp.org/
- OWASP Mobile Application Security for device and binary testing: https://mas.owasp.org/
- CISA Known Exploited Vulnerabilities Catalog: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
- MITRE CWE Top 25:2025: https://cwe.mitre.org/top25/

These frameworks guide coverage; they do not turn a source review into certification.
