# Mobile security

Treat the mobile application as an untrusted client; enforce account and data authorization on the backend.

- Store tokens and keys with platform-backed Keychain or Keystore facilities and appropriate access controls. Do not embed recoverable service secrets in the application binary.
- Exclude sensitive data from backups, shared storage, screenshots, clipboard, notifications, widgets, pasteboards, logs, analytics, crash reports, and debug artifacts.
- Validate deep links, universal/app links, URL schemes, Android intents, exported components, content providers, custom keyboards, extensions, and inter-process messages. Require caller identity or explicit authorization for privileged IPC.
- Restrict WebView content, origins, navigation, file access, mixed content, JavaScript bridges, debugging, and downloads. Never expose privileged native methods to untrusted pages.
- Use platform TLS and hostname verification. Treat certificate pinning as a threat-model decision with rotation, expiry, and recovery; never add a permissive trust manager for testing builds that can reach production.
- Bind biometric approval to protected key use or a server-verified transaction; do not treat a UI success callback alone as authorization.
- Minimize permissions and background data access. Separate production and debug configuration; remove test endpoints, debug flags, and verbose logs from release builds.
- Protect signing keys, provisioning, CI credentials, dependency resolution, native libraries, over-the-air updates, app links, and release channels. Verify update authenticity and rollback behavior.
- Treat root/jailbreak and device-attestation signals as risk inputs, not sole security boundaries. Design safe offline behavior, cache expiry, logout, account switching, and lost-device recovery.
- Verify with OWASP MASVS/MASWE and platform tests; source review alone cannot establish runtime storage, network, IPC, or binary-hardening behavior.
