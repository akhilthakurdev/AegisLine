# Frontend and browser security

Apply only the controls relevant to the observed browser flow.

- Treat URL parts, DOM content, cross-window messages, storage, server data, third-party scripts, browser extensions, and model output as untrusted.
- Prevent DOM, reflected, and stored XSS with framework escaping, safe DOM APIs, contextual sanitization when HTML is required, and Trusted Types where supported. Avoid HTML, script, style, URL, and event-handler sinks.
- Use CSP, nonces or hashes, SRI, and clickjacking controls as defense in depth; do not use them to excuse an unsafe sink.
- Treat micro-frontends, iframes, workers, service workers, import maps, and third-party JavaScript as separate trust domains. Constrain capabilities, origins, message schemas, update paths, and shared state; pin externally loaded resources where practical.
- Keep credentials and authorization decisions out of browser code. Prefer short-lived sessions in `Secure`, `HttpOnly`, appropriately scoped `SameSite` cookies when the architecture permits.
- Protect cookie-authenticated mutations from CSRF. For OAuth/OIDC clients, validate redirect URIs and use state, nonce, and PKCE as required by the flow.
- Follow OAuth Security BCP RFC 9700: use exact redirect matching, authorization code flow with PKCE, and issuer validation; avoid implicit and resource-owner-password grants. Keep authorization responses and tokens out of insecure URLs, referrers, and browser storage.
- Validate both origin and sender for `postMessage`; constrain redirects, iframe navigation, WebSocket destinations, deep links, and cross-origin resource use. CORS is not authentication.
- Minimize sensitive data in local/session storage, IndexedDB, caches, service workers, hydration data, source maps, analytics, crash reports, and client logs.
- Review prototype pollution, DOM clobbering, unsafe object merging, dependency-provided sinks, and client-side denial-of-service on expensive parsing or rendering.
- Test hostile markup and URLs, cross-site requests, unauthorized object access, message-origin confusion, and browser refresh/session transitions.

Primary guidance:

- OWASP Web Frontend Security Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Web_Frontend_Security_Cheat_Sheet.html
- OWASP ASVS 5.0.0 frontend requirements: https://asvs.owasp.org/
- OAuth 2.0 Security Best Current Practice, RFC 9700: https://www.rfc-editor.org/rfc/rfc9700.html
