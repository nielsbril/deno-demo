import { Application } from '../../../deps/index.ts';

import { CoreRoutes } from './routes.ts';

export class CoreModule {
	public static load(app: Application): void {
		CoreRoutes.load(app);
	}

	public static loadFallback(app: Application): void {
		CoreRoutes.loadFallback(app);
	}
}
