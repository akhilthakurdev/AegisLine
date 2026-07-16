# Language and ecosystem routing

Security concepts apply across languages; safe primitives depend on the exact compiler, runtime, framework, protocol, and version.

1. Detect the languages, generated-code boundaries, manifests, lockfiles, build commands, frameworks, and versions actually in use.
2. Identify interpreter crossings, native/FFI boundaries, concurrency, serialization, reflection, dynamic loading, and package lifecycle scripts.
3. Prefer maintained framework protections, typed APIs, memory-safe abstractions, and standard libraries. Verify version-dependent behavior in current official documentation.
4. For a language not listed below, classify its memory model, type system, concurrency model, interpreter and serialization APIs, package manager, and deployment boundary; then apply the same source-to-sink reasoning.

| Ecosystem | High-risk areas | Prefer |
|---|---|---|
| JavaScript / TypeScript | DOM sinks, prototype pollution, eval, commands, SSRF, object merging, npm scripts | safe DOM APIs, schemas, URL policy, parameterized drivers, `spawn` argument arrays, lockfiles |
| Python | shell subprocesses, pickle/YAML, templates, paths, dynamic imports, notebooks | argument arrays, safe loaders, typed validation, path containment, parameterized drivers |
| Java / Kotlin / Scala | deserialization, expression languages, XML, SSRF, archives, reflection, Android exports | constrained serializers, hardened XML, URI policy, normalized paths, resource authorization |
| C# / .NET | Razor sinks, deserialization, process start, XML, claims and policy confusion | Razor encoding, constrained `System.Text.Json`, argument lists, secure XML, resource policies |
| Go | URL/path confusion, template choice, commands, races, unbounded bodies | `html/template`, `exec.Command` args, body limits, contexts, path containment, race testing |
| Rust | `unsafe`, FFI, parser assumptions, commands, broad Serde types | minimize/audit `unsafe`, constrained types, checked parsing, `Command` args, path containment |
| C / C++ / Zig | memory lifetime, bounds, integer overflow, formats, parsers, FFI, races | checked abstractions, sanitizers, fuzzing, checked math, privilege separation |
| Swift / Objective-C | Keychain, URL schemes, WebViews, pasteboard/logs, ATS, native bridges | Keychain controls, verified links, restricted `WKWebView`, data protection, minimal entitlements |
| Dart / Flutter / React Native | platform channels, storage, deep links, WebViews, JS/native bridges | platform secure storage, typed channels, verified links, restricted bridges and WebViews |
| PHP / Ruby | loose coercion, includes, serialization, templates, mass assignment, redirects | strict comparison/types, allowlisted paths, safe loaders, contextual escaping, strong parameters |
| Erlang / Elixir | atom exhaustion, term decoding, distributed nodes, process mailbox pressure | safe binary decoding, bounded atoms/messages, authenticated distribution, supervision limits |
| SQL / NoSQL / query DSLs | dynamic identifiers/operators, row ownership, excessive grants | parameters, allowlisted identifiers/operators, tenant policy, least-privilege roles |
| Shell / PowerShell | interpolation, quoting, globbing, paths, secret output, shell changes | structured APIs, literal paths, argument arrays, strict errors, resolved-path checks |
| Solidity / smart contracts | reentrancy, access control, oracle trust, precision, upgradeability | checks-effects-interactions, explicit roles, bounded external calls, invariant and fork tests |
| R / data and notebooks | code evaluation, unsafe deserialization, package sources, sensitive output | fixed expressions, trusted formats, pinned sources, redacted reproducible pipelines |
| WebAssembly / plugins | host imports, memory bounds, capability leakage, module provenance | capability-limited hosts, fuel/time limits, validated modules, narrow interfaces |
| Terraform / YAML / configuration | public exposure, wildcard identity, secret interpolation, unsafe defaults | typed modules, policy checks, least privilege, secret references, plan review and pinning |

Do not recommend a dependency only to avoid understanding a small security boundary. When a dependency is justified, check maintenance, provenance, license, version fit, and operational cost.
