# Security standards map

Use standards to improve coverage and traceability, not as a substitute for architecture-specific reasoning. Cite the edition and exact requirement when making a mapping.

## Web applications

OWASP Top 10:2025 awareness categories:

1. A01 Broken Access Control
2. A02 Security Misconfiguration
3. A03 Software Supply Chain Failures
4. A04 Cryptographic Failures
5. A05 Injection
6. A06 Insecure Design
7. A07 Authentication Failures
8. A08 Software or Data Integrity Failures
9. A09 Security Logging and Alerting Failures
10. A10 Mishandling of Exceptional Conditions

Source: https://owasp.org/Top10/

Use OWASP ASVS 5.0.0 for testable web and service requirements. When citing an ASVS requirement, include its version, for example `v5.0.0-1.2.5`.

Source: https://owasp.org/www-project-application-security-verification-standard/

## APIs

Use OWASP API Security Top 10:2023 for object, property, and function authorization; authentication; resource consumption; sensitive business flows; SSRF; misconfiguration; inventory; and unsafe consumption of integrated APIs.

Source: https://owasp.org/API-Security/editions/2023/en/0x11-t10/

## Mobile

Use OWASP MASVS for control objectives, MASWE 1.0.0 for stable weakness IDs, and MASTG 2.0.0 for runtime verification. Do not use a Top 10 list as the sole mobile test plan.

- https://mas.owasp.org/MASVS/
- https://mas.owasp.org/MASWE/
- https://mas.owasp.org/MASTG/

## AI and agentic systems

Use OWASP Top 10 for LLM Applications 2026:

1. LLM01 Prompt Injection
2. LLM02 Sensitive Information Disclosure
3. LLM03 Excessive Agency
4. LLM04 Supply Chain
5. LLM05 Data and Model Poisoning
6. LLM06 Unbounded Consumption
7. LLM07 Misinformation
8. LLM08 Hidden Context Exposure
9. LLM09 Vector and Embedding Weaknesses
10. LLM10 Improper Output Handling

Source: https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/

For autonomous agents, also use OWASP Top 10 for Agentic Applications 2026. It covers goal hijacking, tool misuse, identity and privilege abuse, supply-chain and memory risks, unsafe inter-agent communication, cascading failures, and rogue behavior beyond the LLM-only list.

Source: https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/

For coding agents, also use the OWASP Secure Coding with AI Cheat Sheet for repository instructions, dependency suggestions, MCP tools, sandboxing, test integrity, context leakage, CI agents, deceptive markup, and multi-agent propagation.

Source: https://cheatsheetseries.owasp.org/cheatsheets/Secure_Coding_with_AI_Cheat_Sheet.html

For MCP clients and servers, use the OWASP MCP Security Cheat Sheet for tool-definition integrity, server isolation, scoped credentials, authorization, transport validation, approvals, output handling, and supply-chain controls.

Source: https://cheatsheetseries.owasp.org/cheatsheets/MCP_Security_Cheat_Sheet.html

When an agent platform exposes runtime policy middleware, the OWASP Agent Control Standard can guide portable inspection and enforcement hooks. Treat it as implementation guidance, not a compliance claim.

Source: https://genai.owasp.org/resource/agent-control-standard-acs/

## Reporting

State the standard and edition, requirements inspected, evidence, gaps, tests not performed, and whether the result was source review, automated scan, dynamic test, or formal assessment. Never state `OWASP compliant` from source review alone.
