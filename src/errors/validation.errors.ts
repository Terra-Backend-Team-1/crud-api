class ValidationError extends Error {
	public message: string;
	constructor(message: string) {
		super();
		Error.captureStackTrace(this, this.constructor);
		this.name = this.constructor.name;
		this.message = message;
	}
}

export default ValidationError;
