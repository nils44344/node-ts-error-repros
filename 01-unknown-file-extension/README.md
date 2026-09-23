# 01 - Unknown file extension ".ts"

`npm run repro` runs this file on **Node 20.19.4**, fetched by npx, nothing to install:

```
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for .../src/index.ts
    at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:189:9)
  code: 'ERR_UNKNOWN_FILE_EXTENSION'
```

`npm run fixed-node` runs the same file on your own Node. It works from **Node 22.18** onward, because Node
strips the types and runs the result. `npm run fixed-tsx` works on any version.

Measured across five versions, same file, unchanged:

| Node | `node src/index.ts` | with `--experimental-strip-types` |
|---|---|---|
| 20.19.4 | ERR_UNKNOWN_FILE_EXTENSION | flag does not exist |
| 22.5.1 | ERR_UNKNOWN_FILE_EXTENSION | `bad option` |
| 22.6.0 | ERR_UNKNOWN_FILE_EXTENSION | runs |
| 22.18.0 | runs | runs |
| 24.14.0 | runs | runs |

Full write-up: https://nilaykabariya.blog/fixes/unknown-file-extension-ts
