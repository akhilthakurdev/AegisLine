# Backend, API, and identity security

Trace each external source to its privileged action or interpreter sink.

- Authenticate with maintained protocols and libraries. Authorize every action, object, property, tenant, and administrative function in a trusted process; never rely on hidden UI or caller-supplied roles.
- Validate request and third-party response schemas, size, range, state, and business invariants before use. Use parameterized queries and structured process APIs; constrain templates, expressions, serializers, XML, paths, archives, and dynamic loading.
- For server-side fetches, parse once, allowlist schemes and destinations, resolve and re-check addresses, restrict redirects and egress, and block local, private, link-local, metadata, and alternate-address representations as required.
- Treat uploads as hostile: limit body and decompressed size, verify content independently of names and MIME claims, isolate storage, randomize names, prevent execution, and scan or transform where the threat model requires it.
- Protect sessions, tokens, password reset, account recovery, enrollment, and MFA changes from fixation, replay, enumeration, brute force, token substitution, and cross-account use.
- Verify webhook signatures over canonical raw bytes, bind to the correct tenant and endpoint, check timestamps, reject replay, and make delivery idempotent.
- Protect sensitive business flows from bots, races, duplicate delivery, stale-state changes, and partial failure. Use atomic transitions, idempotency keys, quotas, and authorization-aware rate limits.
- Bound bodies, pagination, filters, GraphQL depth/cost, regex work, concurrency, database work, outbound calls, retries, and response sizes. Set cancellation and timeouts.
- Check HTTP request desynchronization, host/header injection, cache poisoning, unsafe redirects, proxy trust, WebSocket/gRPC reauthorization, and inconsistent parsing when the stack makes them relevant.
- Return generic external errors. Log structured, redacted security events without allowing log forging. Encrypt sensitive data where justified and manage keys separately from data.
- Distrust integrated APIs: require TLS, authenticate peers, validate returned data, constrain redirects, and apply time and resource limits.
