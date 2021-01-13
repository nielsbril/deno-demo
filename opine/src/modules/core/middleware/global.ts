import { Application, json, urlencoded } from '../../../../deps/index.ts';

export class GlobalMiddleware {
	public static load(app: Application): void {
        app.use(urlencoded());
        app.use(json());
	}
}
