# Contributing

Contributions should improve a concrete security decision without turning the skill into an unbounded checklist.

1. Open an issue describing the missed or incorrect behavior and a minimal safe example.
2. Keep core instructions concise; place surface- or ecosystem-specific detail in references.
3. Cite primary standards or official framework documentation for version-dependent claims.
4. Add or update tests for manifests, hooks, and deterministic behavior.
5. Run the validations documented below.

```powershell
npm test
claude plugin validate .
```

If the Claude CLI is unavailable, `npm test` still validates the shared manifests and activation-hook contract. Before a release, also install the plugin locally in each supported host and start a fresh test session.

Never submit live secrets, exploit data from systems you do not own, copied proprietary rules, or claims that a model review proves compliance.
