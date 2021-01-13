import { Application } from '../../../deps/index.ts';

import { DinoRoutes } from './routes.ts';

export class DinoModule {
	public static load(app: Application): void {
		DinoRoutes.load(app);
	}
}
