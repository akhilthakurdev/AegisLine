# Platform, supply-chain, and systems security

## Dependencies and CI/CD

- Minimize dependencies; inspect maintenance, provenance, install/build scripts, transitive risk, known vulnerabilities, license fit, and package-name confusion. Commit and verify lockfiles where the ecosystem supports them.
- Separate trusted release workflows from untrusted pull requests. Prevent workflow, expression, artifact, cache, and command injection; use least-privilege permissions and short-lived workload identity.
- Bind CI workload identity to the expected repository, workflow, ref, environment, and reusable-workflow chain. Do not expose release credentials to forked or otherwise untrusted builds; distrust caches, artifacts, generated attestations, and pull-request-controlled build metadata until verified.
- Pin external actions, images, toolchains, and build inputs to trustworthy immutable versions where practical. Protect branches, tags, signing keys, registries, artifacts, and release approvals.
- Generate and retain provenance and an SBOM where the product requires them. Verify provenance against policy rather than accepting its presence as trust. Use SLSA 1.2 Source and Build tracks where appropriate; verify downloaded checksums/signatures and define a vulnerability intake, patch, revocation, and rollback process.
- For open-source projects, use a versioned OpenSSF OSPS Baseline as a repository-control floor covering governance, access, build, release, vulnerability reporting, and dependency practices. Record the assessed version and evidence; do not claim project safety from a badge or checklist alone.

## Cloud, containers, and infrastructure

- Deny public administrative access by default. Separate environments, identities, networks, state, logs, backups, and keys; minimize inbound and outbound access.
- Protect metadata services, control planes, secrets, state files, CI variables, and break-glass credentials. Avoid wildcard permissions and long-lived static cloud keys.
- Run containers as a non-root user where possible; drop capabilities, restrict mounts and devices, use read-only filesystems, set resource limits, and apply seccomp/AppArmor/SELinux and network policy as appropriate.
- Review infrastructure changes for public exposure, privilege escalation, cross-account trust, destructive permissions, data loss, drift, rollback, and recovery.

## Desktop, native, embedded, and systems code

- Prefer memory-safe languages for new security-sensitive components when feasible. For unsafe code and FFI, review bounds, lifetimes, ownership, integer arithmetic, format strings, races, parsing, and error paths; use sanitizers and fuzzing where available.
- For existing memory-unsafe products, prioritize privileged and exposed components, enable compiler and runtime hardening, track root causes by weakness class, and maintain a risk-based memory-safety roadmap instead of promising an unbounded rewrite.
- Authenticate IPC peers and authorize methods and resources. Constrain plugin loading, file handlers, URL schemes, update services, privileged helpers, and sandbox escape surfaces.
- For devices, include secure boot, signed firmware, hardware-backed keys, debug interfaces, physical access, rollback protection, safe failure, recovery, and supported update lifetime.

## Cryptographic transition

- Inventory algorithms, protocols, keys, certificates, libraries, hardware dependencies, data-retention periods, and external interoperability before changing cryptography. Design crypto agility and prioritize long-lived sensitive data exposed to harvest-now-decrypt-later risk.
- Use maintained protocol and platform implementations of finalized NIST standards. For post-quantum migration, follow NISTIR 8547 and FIPS 203, 204, and 205; do not implement primitives yourself, deploy draft algorithms as standards, or invent hybrid constructions.

Primary guidance:

- SLSA 1.2: https://slsa.dev/spec/v1.2/
- OWASP Software Component Verification Standard 1.0: https://scvs.owasp.org/
- OpenSSF OSPS Baseline v2026.08.28: https://baseline.openssf.org/
- CISA Product Security Bad Practices v2: https://www.cisa.gov/sites/default/files/2025-01/joint-guidance-product-security-bad-practices-508c_0.pdf
- NISTIR 8547, Transition to Post-Quantum Cryptography Standards: https://doi.org/10.6028/NIST.IR.8547
