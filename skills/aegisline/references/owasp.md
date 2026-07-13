# OWASP coverage map

Use OWASP as a coverage aid, not a substitute for architecture-specific reasoning. Cite the edition used.

## Web application baseline

OWASP Top 10:2025:

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

Primary source: https://owasp.org/Top10/

Use OWASP ASVS for detailed verification requirements: https://owasp.org/www-project-application-security-verification-standard/

## APIs

Use the current OWASP API Security Top 10 for object, property, and function authorization; resource consumption; sensitive business flows; SSRF; inventory; and unsafe API consumption.

Primary source: https://owasp.org/www-project-api-security/

## Mobile

Use OWASP MASVS for controls and MASWE for weaknesses. Do not use the older Mobile Top 10 as the sole test plan.

- https://mas.owasp.org/MASVS/
- https://mas.owasp.org/MASWE/

## AI and LLM systems

Use the OWASP Top 10 for LLM Applications 2025 as one input: prompt injection, sensitive information disclosure, supply chain, data/model poisoning, improper output handling, excessive agency, system prompt leakage, vector/embedding weaknesses, misinformation, and unbounded consumption.

Primary source: https://genai.owasp.org/llm-top-10/

For agentic systems, also consult current OWASP GenAI agentic-security guidance. The LLM list alone does not cover every multi-agent or tool workflow.

## Reporting

State the standard and edition, requirements inspected, evidence, gaps, tests not performed, and whether the result was source review, automated scan, dynamic test, or compliance assessment. Never state "OWASP compliant" from source review alone.
