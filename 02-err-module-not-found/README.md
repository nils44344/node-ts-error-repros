# 02 - ERR_MODULE_NOT_FOUND: Cannot find module

```bash
npm run repro          # extensionless relative import -> ERR_MODULE_NOT_FOUND
npm run repro-dir      # folder import -> ERR_UNSUPPORTED_DIR_IMPORT
npm run fixed          # same import with the .js extension -> 5
npm run fixed-imports  # Node's own "imports" alias map -> 5
```

The file exists; the name being asked for does not. CommonJS `require()` guessed extensions, ES modules
resolve the string as a URL and stop when nothing matches.

Reproduced on Node 24.14.0 and Node 20.19.4. `--experimental-specifier-resolution=node`, the fix in most
older answers, changed nothing on either.

Full write-up: https://nilaykabariya.blog/fixes/err-module-not-found-cannot-find-module-esm
