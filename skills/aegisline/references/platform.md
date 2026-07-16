# Platform, supply-chain, and systems security

## Dependencies and CI/CD

- Minimize dependencies; inspect maintenance, provenance, install/build scripts, transitive risk, known vulnerabilities, license fit, and package-name confusion. Commit and verify lockfiles where the ecosystem supports them.
- Separate trusted release workflows from untrusted pull requests. Prevent workflow, expression, artifact, cache, and command injection; use least-privilege permissions and short-lived workload identity.
- Pin external actions, images, toolchains, and build inputs to trustworthy immutable versions where practical. Protect branches, tags, signing keys, registries, artifacts, and release approvals.
- Generate and retain provenance and an SBOM where the product requires them. Verify downloaded checksums/signatures and define a vulnerability intake, patch, revocation, and rollback process.

## Cloud, containers, and infrastructure

- Deny public administrative access by default. Separate environments, identities, networks, state, logs, backups, and keys; minimize inbound and outbound access.
- Protect metadata services, control planes, secrets, state files, CI variables, and break-glass credentials. Avoid wildcard permissions and long-lived static cloud keys.
- Run containers as a non-root user where possible; drop capabilities, restrict mounts and devices, use read-only filesystems, set resource limits, and apply seccomp/AppArmor/SELinux and network policy as appropriate.
- Review infrastructure changes for public exposure, privilege escalation, cross-account trust, destructive permissions, data loss, drift, rollback, and recovery.

## Desktop, native, embedded, and systems code

- Prefer memory-safe languages for new security-sensitive components when feasible. For unsafe code and FFI, review bounds, lifetimes, ownership, integer arithmetic, format strings, races, parsing, and error paths; use sanitizers and fuzzing where available.
- Authenticate IPC peers and authorize methods and resources. Constrain plugin loading, file handlers, URL schemes, update services, privileged helpers, and sandbox escape surfaces.
- For devices, include secure boot, signed firmware, hardware-backed keys, debug interfaces, physical access, rollback protection, safe failure, recovery, and supported update lifetime.
