---
name: aegisline-help
description: Display a short AegisLine command and host-syntax reference without scanning code, changing files, or activating a persistent mode. Use when the user asks how to use AegisLine, requests AegisLine help, or invokes aegisline-help.
---

# AegisLine Help

Display this one-shot reference and change nothing:

| Task | Codex | Claude Code | Copilot CLI | Cursor / OpenCode |
|---|---|---|---|---|
| Secure or fix | `$aegisline` | `/aegisline:aegisline` | `/aegisline` | `/aegisline` |
| Review diff | `$aegisline-review` | `/aegisline:aegisline-review` | `/aegisline-review` | `/aegisline-review` |
| Audit repository | `$aegisline-audit` | `/aegisline:aegisline-audit` | `/aegisline-audit` | `/aegisline-audit` |
| Show help | `$aegisline-help` | `/aegisline:aegisline-help` | `/aegisline-help` | `/aegisline-help` |

`review` examines the current diff and never changes files. `audit` examines broad repository risk and uses more tokens. Use the main `aegisline` command when you want secure implementation or confirmed findings fixed. Natural-language requests also work.
