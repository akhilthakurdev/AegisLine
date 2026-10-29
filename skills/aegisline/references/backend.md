# Backend, API, and identity security

Trace each external source to its privileged action or interpreter sink.

- Authenticate with maintained protocols and libraries. Authorize every action, object, property, tenant, and administrative function in a trusted process; never rely on hidden UI or caller-supplied roles.
- Validate request and third-party response schemas, size, range, state, and business invariants before use. Use parameterized queries and structured process APIs; constrain templates, expressions, serializers, XML, paths, archives, and dynamic loading.
- For server-side fetches, parse once, allowlist schemes and destinations, resolve and re-check addresses, restrict redirects and egress, and block local, private, link-local, metadata, and alternate-address representations as required.
- Treat uploads as hostile: limit body and decompressed size, verify content independently of names and MIME claims, isolate storage, randomize names, prevent execution, and scan or transform where the threat model requires it.
- Protect sessions, tokens, password reset, account recovery, enrollment, and MFA changes from fixation, replay, enumeration, brute force, token substitution, and cross-account use.
- For OAuth/OIDC, apply RFC 9700: exact redirect matching, authorization code with PKCE, issuer and audience validation, no implicit or resource-owner-password grants, and sender-constrained or rotated refresh tokens where applicable. Bind tokens to the intended client, resource, scope, and tenant.
- Prefer phishing-resistant authenticators such as passkeys for sensitive access. Give recovery, authenticator replacement, federation, and help-desk flows assurance comparable to normal authentication; use NIST SP 800-63-4 when assurance levels or identity proofing matter.
- Verify webhook signatures over canonical raw bytes, bind to the correct tenant and endpoint, check timestamps, reject replay, and make delivery idempotent.
- Protect sensitive business flows from bots, races, duplicate delivery, stale-state changes, and partial failure. Use atomic transitions, idempotency keys, quotas, and authorization-aware rate limits.
- Bound bodies, pagination, filters, GraphQL depth/cost, regex work, concurrency, database work, outbound calls, retries, and response sizes. Set cancellation and timeouts.
- Check HTTP request desynchronization, host/header injection, cache poisoning, unsafe redirects, proxy trust, WebSocket/gRPC reauthorization, and inconsistent parsing when the stack makes them relevant.
- Return generic external errors. Log structured, redacted security events without allowing log forging. Encrypt sensitive data where justified and manage keys separately from data.
- Handle exceptional conditions explicitly: fail closed for security decisions, preserve transactional consistency, clean up partial state, avoid retry amplification, and test dependency timeout, malformed response, cancellation, and resource-exhaustion paths.
- Distrust integrated APIs: require TLS, authenticate peers, validate returned data, constrain redirects, and apply time and resource limits.

Primary guidance:

- OWASP ASVS 5.0.0: https://asvs.owasp.org/
- OWASP API Security Top 10:2023: https://owasp.org/API-Security/editions/2023/en/0x11-t10/
- OAuth 2.0 Security Best Current Practice, RFC 9700: https://www.rfc-editor.org/rfc/rfc9700.html
- NIST SP 800-63-4 Digital Identity Guidelines: https://pages.nist.gov/800-63-4/
