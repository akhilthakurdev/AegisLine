# AegisLine

![AegisLine  Security guardrails for every line of code](assets/aegisline-hero.png)

**Security guardrails for every line of code.**

AegisLine adds secure-by-default engineering and evidence-based AppSec review to Claude Code, Codex, and GitHub Copilot. It supports frontend, backend, APIs, mobile, infrastructure, systems code, and AI/LLM applications.

It is inspired by Ponytail's portable, always-on plugin architecture. AegisLine's security rules, workflows, and implementation are original.

> AegisLine is an engineering guardrail, not a security guarantee or a replacement for security scanners, penetration testing, AI red teaming, or human review.

## Quick start

### Requirements

- One supported host: Claude Code, Codex, or GitHub Copilot CLI
- Node.js 18 or newer for the automatic activation hook
- Git for installation from GitHub

Replace `YOUR_GITHUB_USERNAME` below with the owner of the published AegisLine repository.

### Install in Codex

Run:

```powershell
codex plugin marketplace add YOUR_GITHUB_USERNAME/aegisline
codex
```

Inside Codex:

1. Enter `/plugins`.
2. Select the **AegisLine** marketplace.
3. Install **AegisLine**.
4. Enter `/hooks`, inspect the AegisLine hooks, and trust them.
5. Start a new Codex task.

Use it:

```text
Use $aegisline to review the current changes for security issues.
```

### Install in Claude Code

Inside Claude Code, run:

```text
/plugin marketplace add YOUR_GITHUB_USERNAME/aegisline
/plugin install aegisline@aegisline
```

Start a new Claude Code session, then use:

```text
/aegisline:aegisline review src/auth
```

### Install in GitHub Copilot CLI

Run:

```powershell
copilot plugin install YOUR_GITHUB_USERNAME/aegisline
```

Start a new Copilot CLI session, then use:

```text
/aegisline:aegisline review src/api
```

## Test locally before publishing

Clone or open this repository:

```powershell
cd path/to/aegisline
npm test
```

Claude Code:

```powershell
claude --plugin-dir .
```

GitHub Copilot CLI:

```powershell
copilot plugin install .
```

Codex:

```powershell
codex plugin marketplace add .
codex
```

Then open `/plugins`, install AegisLine, review its hooks, and start a new task.

## How to use AegisLine

Natural-language requests work in every supported host.

### Build securely

```text
Use AegisLine to implement this file-upload endpoint securely.
```

AegisLine identifies trust boundaries, validates attacker-controlled input, preserves authorization, chooses safe APIs, and adds focused security tests.

### Review code

Codex:

```text
Use $aegisline to review src/api for exploitable security issues.
```

Claude Code or Copilot CLI:

```text
/aegisline:aegisline review src/api
```

A finding includes:

- severity and title;
- exact file and location;
- attacker-controlled source and prerequisites;
- attack path and realistic impact;
- smallest robust fix;
- verification or regression test.

AegisLine does not report an issue only because code looks unusual. It traces a plausible source-to-sink attack path.

### Create a threat model

```text
Use AegisLine to threat-model the payment flow.
```

The result covers assets, actors, trust boundaries, privileged operations, abuse cases, mitigations, validation, and unresolved risks.

### Use strict mode

```text
Use AegisLine in strict mode while implementing authentication.
```

Strict mode requires explicit threat assumptions and negative tests for each changed trust boundary.

### Disable it for the current conversation

```text
/aegisline:aegisline off
```

Explicit security requests still activate the security workflow.

## Command reference

| Operation | Purpose |
|---|---|
| `standard` | Secure-by-default implementation guidance |
| `strict` | Stronger threat assumptions and mandatory negative tests |
| `review [scope]` | Read-only, evidence-based security review |
| `threat-model [scope]` | Compact threat model before implementation |
| `off` | Disable automatic guidance for the current conversation |
| `help` | Display available operations |

Claude Code and Copilot CLI command format:

```text
/aegisline:aegisline
/aegisline:aegisline strict
/aegisline:aegisline review src/auth
/aegisline:aegisline threat-model payments
/aegisline:aegisline off
/aegisline:aegisline help
```

In Codex, invoke the skill with `$aegisline` or ask for AegisLine in natural language.

## Repository-only installation

If plugins are unavailable, copy the appropriate instruction file into a target repository:

- Codex and AGENTS.md-compatible agents: `AGENTS.md`
- Claude Code: `CLAUDE.md`
- GitHub Copilot: `.github/copilot-instructions.md`

This provides the baseline security rules but not the complete skill commands, references, or lifecycle hooks.

## What it covers

| Surface | Representative checks |
|---|---|
| Frontend | XSS, CSRF, DOM and URL sinks, browser storage, CSP, messages, redirects |
| Backend and APIs | authentication, authorization, IDOR/BOLA, injection, SSRF, uploads, webhooks, rate limits, races |
| Mobile | secure storage, deep links, WebViews, permissions, TLS, backups, logs, signing, updates |
| AI, LLM, RAG, agents | prompt injection, tool authorization, output validation, leakage, poisoning, excessive agency, cost limits |
| Infrastructure and supply chain | CI identity, secrets, dependency pinning, provenance, cloud permissions, egress |
| Systems and embedded | memory safety, parsers, IPC, privilege boundaries, signed updates, secure boot |

The core workflow applies to any programming language. Explicit ecosystem routing is included for JavaScript/TypeScript, Python, Java/Kotlin, C#/.NET, Go, Rust, PHP, Ruby, Swift/Objective-C, Dart/Flutter, C/C++, SQL, shell, and PowerShell.

## OWASP alignment

AegisLine maps relevant checks to:

- OWASP Top 10:2025;
- OWASP Application Security Verification Standard;
- OWASP API Security Top 10;
- OWASP MASVS and MASWE for mobile;
- OWASP Top 10 for LLM Applications 2025 and current GenAI agentic-security guidance.

OWASP is used as a coverage aid. Source review alone cannot establish compliance.

## Project structure

```text
.codex-plugin/plugin.json       Codex plugin manifest
.claude-plugin/                 Claude/Copilot manifest and marketplace
hooks/hooks.json                Lifecycle activation
scripts/activate.mjs            Security-context injector
skills/aegisline/               Core workflow and references
AGENTS.md                       Codex repository guidance
CLAUDE.md                       Claude Code repository guidance
.github/copilot-instructions.md GitHub Copilot repository guidance
test/                           Manifest and hook tests
```

## Safety and privacy

AegisLine has no runtime dependencies and does not send code anywhere. Its activation hook reads the host event from standard input and returns static security guidance. It does not read project files, credentials, or network data.

Report vulnerabilities privately according to [SECURITY.md](SECURITY.md).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Run `npm test` before submitting changes.

## License

Apache-2.0. See [LICENSE](LICENSE).
