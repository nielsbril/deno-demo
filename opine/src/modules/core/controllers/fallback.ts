import { Request, Response, NextFunction } from '../../../../deps/index.ts';

import { NotFoundError } from '../../../shared/helpers/error.ts'

export class FallbackController {
	public get(req: Request , res: Response, next: NextFunction): Response | void {
		return next(new NotFoundError());
	}
}
