# deno-demo

`deno run hello-world.js`

`deno run file-access.js`
`deno run --allow-read file-access.js`

`deno run network-access.js https://api.ipify.org`
`deno run --allow-net network-access.js https://api.ipify.org`

`deno run env-access.js`
`deno run --allow-env env-access.js`

`deno run --unstable ask-permission.js`

`deno run --unstable ask-permission.ts`

`deno test add.spec.ts`

`deno run --unstable --allow-read --allow-net -c opine/tsconfig.json opine/index.ts`
