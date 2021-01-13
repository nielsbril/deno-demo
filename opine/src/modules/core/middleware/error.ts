import { Request, Response, NextFunction } from '../../../../deps/index.ts';

import { CustomError } from '../../../shared/helpers/error.ts';
import { ICustomError } from "../../../shared/shared.types.ts";

export class ErrorMiddleware {
	public static handleError(err: string | Error | ICustomError | null | undefined, req: Request, res: Response, next: NextFunction): Response | void {		
		// Check if there is an error
		if (!err) {
			return next();
		}

		// Convert a string to an Error object
		if (typeof err === 'string') {
			err = new Error(err); // tslint:disable-line no-parameter-reassignment
		}

		// Convert an Error object to a CustomError object
		if (err instanceof Error) {
			err = new CustomError(err); // tslint:disable-line no-parameter-reassignment
		}

		return res
			.setStatus((err as ICustomError).status)
			.json({
				host: (err as ICustomError).host,
				identifier: (err as ICustomError).identifier,
				timestamp: (err as ICustomError).timestamp,
				status: (err as ICustomError).status,
				name: (err as ICustomError).name,
				message: (err as ICustomError).message,
			});
	}
}
