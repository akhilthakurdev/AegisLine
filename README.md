# AegisLine

**Security guardrails for every line of code.**

AegisLine puts a pragmatic senior AppSec engineer inside Claude Code, Codex, and GitHub Copilot. It makes secure defaults part of implementation, then performs evidence-based reviews when asked.

It is inspired by Ponytail's portable, always-on agent-plugin architecture. Its security rules, workflows, writing, and implementation are original.

> AegisLine is an engineering guardrail, not a security guarantee or a replacement for SAST, DAST, dependency scanning, penetration testing, mobile testing, AI red teaming, or human review.

## What it covers

| Surface | Representative checks |
|---|---|
| Frontend | XSS, CSRF, DOM and URL sinks, browser storage, CSP, messages, redirects, sensitive client data |
| Backend and APIs | authn/authz, IDOR/BOLA, injection, SSRF, deserialization, uploads, webhooks, rate limits, races |
| Mobile | secure storage, deep links, WebViews, permissions, TLS, backups, logs, signing, update channels |
| AI, LLM, RAG, agents | prompt injection, tool authorization, output handling, data leakage, poisoning, excessive agency, cost bounds |
| Infrastructure and supply chain | CI identity, secrets, dependency/action pinning, provenance, cloud permissions, egress |
| Systems and embedded | memory safety, parsers, IPC, privilege boundaries, signed updates, key storage, secure boot |

The core rules apply to any programming language. AegisLine adds explicit implementation routing for JavaScript/TypeScript, Python, Java/Kotlin, C#/.NET, Go, Rust, PHP, Ruby, Swift/Objective-C, Dart/Flutter, C/C++, SQL, shell, and PowerShell. Framework-specific depth still depends on the code and documentation available.

## How it works

Before an agent changes code, AegisLine asks:

1. What assets and privileged actions are affected?
2. Where does untrusted data cross a trust boundary?
3. Are authentication and authorization enforced in the trusted layer?
4. Does attacker-controlled data reach an interpreter, path, URL fetch, file, model, or tool?
5. Can secrets, personal data, permissions, dependencies, or failure behavior create impact?
6. What focused negative test proves the boundary fails safely?

A review finding is reported only when the code supports a plausible source-to-sink attack path. Findings include severity, location, prerequisites, impact, fix, and verification. If no exploitable issue is found, AegisLine says so and identifies review limits.

## Operations

In a skill-capable host:

```text
/aegisline:aegisline
/aegisline:aegisline strict
/aegisline:aegisline review src/auth
/aegisline:aegisline threat-model payments
/aegisline:aegisline off
/aegisline:aegisline help
```

- `standard` is the default secure-by-default implementation mode.
- `strict` requires explicit threat assumptions and negative tests for changed trust boundaries.
- `review` is read-only unless you separately ask for fixes.
- `threat-model` produces a compact, decision-oriented model.
- `off` applies only to the current conversation.

## Install

Node.js 18 or newer is required only for the tiny activation hook. The skill and repository instruction files still work without it.

### Local development

From this repository:

```powershell
claude --plugin-dir .
copilot plugin install .
```

For Codex, add this local repository as a plugin marketplace, open `/plugins`, install AegisLine, review and trust its hooks, and start a new task:

```powershell
codex plugin marketplace add .
```

### From GitHub after publishing

Replace `YOUR_GITHUB_USERNAME` with the repository owner.

Claude Code:

```text
/plugin marketplace add YOUR_GITHUB_USERNAME/aegisline
/plugin install aegisline@aegisline
```

Codex:

```powershell
codex plugin marketplace add YOUR_GITHUB_USERNAME/aegisline
```

Then open `/plugins`, install AegisLine, review its hooks, and start a new task.

GitHub Copilot CLI:

```powershell
copilot plugin install YOUR_GITHUB_USERNAME/aegisline
```

Repository-only fallback for Copilot, Codex, and other AGENTS.md readers: copy `AGENTS.md` and `.github/copilot-instructions.md` into the target repository. Claude Code can use `CLAUDE.md`.

## OWASP alignment

AegisLine currently maps its review coverage to:

- OWASP Top 10:2025 for web applications;
- OWASP ASVS for detailed verification requirements;
- OWASP API Security Top 10;
- OWASP MASVS and MASWE for mobile;
- OWASP Top 10 for LLM Applications 2025 and current OWASP GenAI agentic-security guidance.

OWASP is used as a coverage aid. A source review cannot establish "OWASP compliance."

## Project structure

```text
.codex-plugin/plugin.json       Codex plugin manifest
.claude-plugin/                 Claude/Copilot manifest and marketplace
hooks/hooks.json                Always-on lifecycle activation
scripts/activate.mjs            Compact security-context injector
skills/aegisline/               Core workflow and on-demand references
AGENTS.md                       Codex and compatible agent guidance
CLAUDE.md                       Claude Code repository guidance
.github/copilot-instructions.md GitHub Copilot repository guidance
test/                           Manifest and hook tests
```

## Safety and privacy

AegisLine does not send code anywhere and has no runtime dependencies. The activation hook reads the host event from standard input and returns static guidance. It does not read project files, credentials, or network data.

Report vulnerabilities privately according to [SECURITY.md](SECURITY.md).

## License

Apache-2.0. See [LICENSE](LICENSE).
