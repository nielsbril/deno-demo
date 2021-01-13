import { App } from './src/app.ts';

const app: App = new App();

app.start();

for await (const sigint of Deno.signal(Deno.Signal.SIGINT)) {
    app.stop('SIGINT');
}
for await (const sigterm of Deno.signal(Deno.Signal.SIGTERM)) {
    app.stop('SIGTERM');
}