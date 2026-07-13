# Language and ecosystem routing

Security concepts are language-independent; implementations are not. Inspect the framework version and prefer maintained safe APIs.

| Ecosystem | High-risk areas | Prefer |
|---|---|---|
| JavaScript / TypeScript | DOM sinks, prototype pollution, eval, commands, SSRF, npm scripts | textContent/safe templates, URL policy, schemas, parameterized drivers, spawn argument arrays, lockfiles |
| Python | subprocess shells, pickle/YAML, templates, paths, dynamic imports | argument arrays without shell, safe loaders, containment checks, framework validators, parameterized drivers |
| Java / Kotlin | deserialization, expression languages, XML, SSRF, archives, Android exports | constrained serializers, hardened XML, URI policy, normalized paths, resource authorization |
| C# / .NET | Razor sinks, deserialization, process start, XML, authorization | Razor encoding, constrained System.Text.Json, argument lists, secure XML, resource policies |
| Go | path/URL confusion, template choice, commands, unbounded work | html/template, exec.Command args, body limits, context deadlines, path containment |
| Rust | unsafe/FFI, parsers, commands, broad serde types, paths | audit unsafe, typed parsers, Command args, constrained types, path containment |
| PHP | loose comparisons, includes, unserialize, SQL, output | strict types, allowlisted paths, safe serialization, PDO parameters, contextual escaping |
| Ruby | mass assignment, ERB/shell interpolation, Marshal/YAML, redirects | strong parameters, argument arrays, safe loaders, resource authorization |
| Swift / Objective-C | Keychain, URL schemes, WebViews, pasteboard/logs, ATS | Keychain controls, universal links, restricted WKWebView, data protection, minimal entitlements |
| Dart / Flutter | platform channels, storage, deep links, WebViews, TLS overrides | platform-backed secure storage, typed channels, verified links, restricted WebViews, default TLS |
| C / C++ | memory safety, integer overflow, parsers, format strings, paths | checked abstractions, sanitizers/fuzzing, checked math, safe formatting, privilege separation |
| SQL | dynamic identifiers, row ownership, excessive grants | parameters, allowlisted identifiers, tenant policy, least-privilege roles |
| Shell / PowerShell | injection, quoting, globbing, paths, secret output | structured APIs, literal paths, argument arrays, strict errors, resolved-path checks |

Framework defaults change. Verify current official documentation for version-specific controls. Check package maintenance, provenance, license, and fit before recommending a dependency.
