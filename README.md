# Node + TypeScript errors, reproduced

Minimal, runnable reproductions of errors developers actually hit, each one triggered on a real machine
with the exact versions recorded. Every folder is self-contained: clone it, run one command, see the error.

These back the write-ups at **[nilaykabariya.blog](https://nilaykabariya.blog)**, where each error also has the
fix, what didn't work, and the versions it was checked on.

| # | Error | Reproduce with | Write-up |
|---|---|---|---|
| 01 | `TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts"` | `npm run repro` | [Read](https://nilaykabariya.blog/fixes/unknown-file-extension-ts) |
| 02 | `Error [ERR_MODULE_NOT_FOUND]: Cannot find module` | `npm run repro` | [Read](https://nilaykabariya.blog/fixes/err-module-not-found-cannot-find-module-esm) |
| 03 | `error TS1294: This syntax is not allowed when 'erasableSyntaxOnly' is enabled` | `npm run repro` | [Read](https://nilaykabariya.blog/fixes/erasablesyntaxonly-syntax-not-allowed-ts1294) |
| 04 | `TypeError: Cannot read properties of undefined (reading 'fileExists')` (ts-node + TypeScript 7) | `npm run repro` | [Read](https://nilaykabariya.blog/fixes/ts-node-cannot-read-properties-of-undefined-fileexists) |
| 05 | TypeScript 7 side-by-side setup: ts-node, ts-loader and typescript-eslint working with `tsc` 7 | `npm run all` | [Read](https://nilaykabariya.blog/tested/typescript-7-compatibility-tools-tested) |

## How to use

```bash
git clone https://github.com/nils44344/node-ts-error-repros
cd node-ts-error-repros/03-erasable-syntax-only
npm install
npm run repro     # prints the error
npm run fixed     # prints the working version
```

Each folder's README lists what was run, on which versions, and what came out.

## Why these exist

Most answers to these errors were written for a Node that no longer behaves that way. Node runs TypeScript
files directly now, TypeScript 7 is a Go binary with no importable API, and both changes moved errors from
the compiler to the runtime. Rather than guess, I reproduce each one, keep the terminal output, and publish
the versions alongside it.

Tested on Windows 11, Node 20.19.4 / 22.5.1 / 22.6.0 / 22.18.0 / 24.14.0, TypeScript 5.9.3 / 6.0.3 / 7.0.2.

MIT licensed. Corrections welcome — open an issue with your versions and output.
