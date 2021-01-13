import { uuid } from '../../../deps/index.ts';

import config from '../../config.ts';

import { ICustomError } from '../shared.types.ts';

export class CustomError implements ICustomError {
	public host = config.server.host;
	public identifier: string = uuid.generate();
	public message = 'Something went wrong';
	public name = 'Error';
	public status = 500;
	public timestamp: string = new Date().toISOString();

	constructor(err?: Error) {
		Error.captureStackTrace(this, this.constructor);

		if (err) {
			this.message = err.message;
			this.name = err.name;
		}
	}
}

export class NotFoundError extends CustomError {
	public message = 'Resource not found';
	public name = 'Not Found';
	public status = 404;
}
