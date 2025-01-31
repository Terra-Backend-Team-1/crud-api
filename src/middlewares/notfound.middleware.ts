import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const notFoundErrorMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	res.status(StatusCodes.NOT_FOUND).send("Route not found");
};

export default notFoundErrorMiddleware;
