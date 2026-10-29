# Mobile security

Treat the mobile application as an untrusted client; enforce account and data authorization on the backend.

- Store tokens and keys with platform-backed Keychain or Keystore facilities and appropriate access controls. Do not embed recoverable service secrets in the application binary.
- Exclude sensitive data from backups, shared storage, screenshots, clipboard, notifications, widgets, pasteboards, logs, analytics, crash reports, and debug artifacts.
- Validate deep links, universal/app links, URL schemes, Android intents, exported components, content providers, custom keyboards, extensions, and inter-process messages. Require caller identity or explicit authorization for privileged IPC.
- Prefer verified Android App Links and Apple Universal Links. Explicitly mark Android components exported or private; protect exported components with appropriate permissions; default to immutable, explicit `PendingIntent` targets; sanitize nested intents; and apply the same checks on every lifecycle entry point.
- Restrict WebView content, origins, navigation, file access, mixed content, JavaScript bridges, debugging, and downloads. Never expose privileged native methods to untrusted pages.
- Use platform TLS and hostname verification. Treat certificate pinning as a threat-model decision with rotation, expiry, and recovery; never add a permissive trust manager for testing builds that can reach production.
- Bind biometric approval to protected key use or a server-verified transaction; do not treat a UI success callback alone as authorization.
- Prefer platform passkey and credential APIs. Bind app-attestation challenges and assertions to the app identity, account, action, freshness, and replay state on the server; treat failed or unavailable attestation as a risk signal under an explicit policy, not proof of compromise.
- Minimize permissions and background data access. Separate production and debug configuration; remove test endpoints, debug flags, and verbose logs from release builds.
- Review accessibility services, privacy manifests, required-reason APIs, third-party SDK data collection, and device fingerprinting. Keep declarations consistent with observed behavior and minimize collected data.
- Protect signing keys, provisioning, CI credentials, dependency resolution, native libraries, over-the-air updates, app links, and release channels. Verify update authenticity and rollback behavior.
- Treat root/jailbreak and device-attestation signals as risk inputs, not sole security boundaries. Design safe offline behavior, cache expiry, logout, account switching, and lost-device recovery.
- Verify with OWASP MASVS, MASWE 1.0.0, MASTG 2.0.0, and platform tests; source review alone cannot establish runtime storage, network, IPC, privacy, or binary-hardening behavior.

Primary guidance:

- OWASP Mobile Application Security: https://mas.owasp.org/
- Android security best practices: https://developer.android.com/privacy-and-security/security-best-practices
- Apple platform security APIs: https://developer.apple.com/documentation/security
- Apple App Attest server validation: https://developer.apple.com/documentation/devicecheck/validating-apps-that-connect-to-your-server
