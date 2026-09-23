# 04 - ts-node dies on TypeScript 7

```bash
npm install
npm run repro   # TypeError: Cannot read properties of undefined (reading 'fileExists')
npm run api     # 7.0.2 2 exports sys=undefined
```

TypeScript 7 is the Go rewrite: the npm package is no longer an importable JavaScript library, so `ts.sys`
is gone and ts-node crashes while reading `tsconfig.json`, before touching your code.

| TypeScript | `require('typescript').sys` | exports | ts-node 10.9.2 |
|---|---|---|---|
| 6.0.3 | object | 2248 | runs |
| 7.0.2 (npm `latest`) | undefined | 2 | crashes |
| 7.1.0-dev.20260922 | undefined | 2 | crashes |

Three ways out, all runnable here: `npm run fixed-ts6`, `npm run fixed-tsx`, `npm run fixed-node`.
`tsc` itself is unaffected. Upstream issue: https://github.com/TypeStrong/ts-node/issues/2174

Full write-up: https://nilaykabariya.blog/fixes/ts-node-cannot-read-properties-of-undefined-fileexists
