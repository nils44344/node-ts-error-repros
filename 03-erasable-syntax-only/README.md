# 03 - TS1294: syntax not allowed when 'erasableSyntaxOnly' is enabled

```bash
npm install
npm run repro          # four TS1294 errors from tsc
npm run repro-runtime  # the same file under Node: ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX
npm run fixed          # the rewritten file runs -> 0 1 a#1
npm run fixed-check    # and it type-checks with the flag still on
```

`enum`, `const enum`, `namespace` with code in it, and constructor parameter properties all have to *emit*
JavaScript, so they cannot survive type stripping. `declare enum` is accepted, because it emits nothing.

TypeScript 5.9.3, Node 24.14.0.

Full write-up: https://nilaykabariya.blog/fixes/erasablesyntaxonly-syntax-not-allowed-ts1294
