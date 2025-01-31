import { NextFunction, Request, Response } from "express";
import HTTPException from "../exceptions/http.exception";
import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (
	error: HTTPException,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const status = error.status || StatusCodes.INTERNAL_SERVER_ERROR;
	let message = error.message || "Something went wrong";

	try {
		if (error.name === "ValidationError") {
			message = Object.values(error)
				.map((item) => {
					return item.ValidatorError;
				})
				.join(", ");
		}
		res.status(status).json({ message });
	} catch (error) {
		next(error);
	}
};

export default errorHandlerMiddleware;
