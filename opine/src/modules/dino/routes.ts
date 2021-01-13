import { Application } from '../../../deps/index.ts';

import { DinoController } from './controllers/dino.ts';

export class DinoRoutes {
	public static baseUrl = '/dinos';
    public static controller: DinoController = new DinoController();

	public static load(app: Application): void {
		// Get all dinos
		app.route(this.baseUrl).get(
			this.controller.getAll
		);

		// Get dino by id
		app.route(`${this.baseUrl}/:id`).get(
			this.controller.getById
		);

		// Create dino
		app.route(this.baseUrl).post(
			this.controller.create
		);
	}
}
