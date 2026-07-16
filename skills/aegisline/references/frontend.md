# Frontend and browser security

Apply only the controls relevant to the observed browser flow.

- Treat URL parts, DOM content, cross-window messages, storage, server data, third-party scripts, browser extensions, and model output as untrusted.
- Prevent DOM, reflected, and stored XSS with framework escaping, safe DOM APIs, contextual sanitization when HTML is required, and Trusted Types where supported. Avoid HTML, script, style, URL, and event-handler sinks.
- Use CSP, nonces or hashes, SRI, and clickjacking controls as defense in depth; do not use them to excuse an unsafe sink.
- Keep credentials and authorization decisions out of browser code. Prefer short-lived sessions in `Secure`, `HttpOnly`, appropriately scoped `SameSite` cookies when the architecture permits.
- Protect cookie-authenticated mutations from CSRF. For OAuth/OIDC clients, validate redirect URIs and use state, nonce, and PKCE as required by the flow.
- Validate both origin and sender for `postMessage`; constrain redirects, iframe navigation, WebSocket destinations, deep links, and cross-origin resource use. CORS is not authentication.
- Minimize sensitive data in local/session storage, IndexedDB, caches, service workers, hydration data, source maps, analytics, crash reports, and client logs.
- Review prototype pollution, DOM clobbering, unsafe object merging, dependency-provided sinks, and client-side denial-of-service on expensive parsing or rendering.
- Test hostile markup and URLs, cross-site requests, unauthorized object access, message-origin confusion, and browser refresh/session transitions.
