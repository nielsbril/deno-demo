import { Request, Response, NextFunction } from '../../../../deps/index.ts';

import config from '../../../config.ts';

import { IStatus } from '../core.types.ts';

export class StatusController {
	public get(req: Request , res: Response, next: NextFunction): Response | void {
		const status: IStatus = {
			version: config.state.version,
			success: true,
		};

		return res
			.setStatus(200)
			.json(status);
	}
}
