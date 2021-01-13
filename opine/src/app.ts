import {
	Application,
	opine,
	Server,
} from '../deps/index.ts';

import CONFIG, { IConfig } from './config.ts';
import { CoreModule } from './modules/core/index.ts';
import { DinoModule } from './modules/dino/index.ts';
import { ErrorMiddleware } from './modules/core/middleware/error.ts';
import { GlobalMiddleware } from './modules/core/middleware/global.ts';

export class App {
	public app: Application = opine();
	public config: IConfig = CONFIG;
	public server: Server;

	constructor() {
		this.loadMiddleware();
		this.loadModules();
		this.loadErrorHandling();
	}

	public start(): void {
		this.server = this.app.listen(this.config.server.port, (err?: Error) => {
			if (err) {
				console.error(err);
				return Deno.exit(1);
			}

			console.log(`Server running on ${this.config.state.env} environment at port ${this.config.server.port}`);
		});
	}

	public stop(signal: string): void {
		console.log(`Server stopped due to ${signal}, graceful shutdown`);
		this.server.close();
        Deno.exit();
	}

	private loadMiddleware(): void {
		GlobalMiddleware.load(this.app);
	}

	private loadModules(): void {
		CoreModule.load(this.app);
		DinoModule.load(this.app);
	}

	private loadErrorHandling(): void {
		CoreModule.loadFallback(this.app);
		this.app.use(ErrorMiddleware.handleError);
	}
}
