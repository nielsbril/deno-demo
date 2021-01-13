export interface ICustomError extends Error {
	host: string;
	identifier: string;
	message: string;
	name: string;
	status: number;
	timestamp: string;
}
export type INotFoundError = ICustomError;
