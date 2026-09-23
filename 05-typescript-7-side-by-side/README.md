# 05 - TypeScript 7 with ts-node, ts-loader and typescript-eslint

TypeScript 7.0 ships no JavaScript API, so every tool that imports `typescript` breaks on it. This folder is
set up the way Microsoft recommends in the TypeScript 7.0 announcement: TypeScript 7 for `tsc`, and a
TypeScript 6 compatibility package where the tools look for `typescript`.

```bash
npm install
npm run all       # tsc 7.0.2, and ts-node, webpack + ts-loader and ESLint all pass
```

To see what breaks on plain TypeScript 7, then put it back:

```bash
npm run break     # installs typescript@7.0.2 in place of the compat package
npm run all       # ts-node, ts-loader and ESLint now fail
npm run restore   # back to the side-by-side setup
```

## Switching an existing project: reinstall clean

The compat package only provides a `tsc6` command; `tsc` comes from `@typescript/native`. If a project was on
plain TypeScript 7 and you switch it to this setup with a normal `npm install`, npm can leave the old `tsc`
shortcut behind. When I did exactly that here, `tsc --version` printed **6.0.3**, so builds were quietly
running the old compiler. Deleting `node_modules` and installing again put it back to **7.0.2**, which is why
`npm run restore` reinstalls from scratch.

After switching, always check:

```bash
npx tsc --version    # should say 7.x
```

What `npm run check` prints on each setup:

| Setup | `tsc --version` | `require('typescript')` | `ts.sys` |
|---|---|---|---|
| side-by-side (default) | 7.0.2 | 6.0.3 | object |
| after `npm run break` | 7.0.2 | 7.0.2 | undefined |

The errors on plain TypeScript 7:

```
ts-node   TypeError: Cannot read properties of undefined (reading 'fileExists')
webpack   TypeError: Cannot read properties of undefined (reading 'fileExists')   (from ts-loader)
eslint    Error: typescript-eslint does not support TS 7.0.
```

Nine tools tested this way, including ts-jest, TypeDoc, Vitest and ts-morph:
https://nilaykabariya.blog/tested/typescript-7-compatibility-tools-tested

Windows 11, Node 24.14.0, npm 11.9.0.
