import { Application } from '../../../deps/index.ts';

import { FallbackController } from './controllers/fallback.ts';
import { StatusController } from './controllers/status.ts';

export class CoreRoutes {
	public static baseUrl = '/';
	public static fallbackController: FallbackController = new FallbackController();
	public static statusController: StatusController = new StatusController();

	public static load(app: Application): void {
		// Get status
		app.route(`${this.baseUrl}status`).get(
			this.statusController.get
		);
	}

	public static loadFallback(app: Application): void {
		// Get fallback
		app.route(['/', '/*']).all(
			this.fallbackController.get
		);
	}
}
