const res = await fetch(Deno.args[0]);
const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);