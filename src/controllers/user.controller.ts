import { Response, Request, NextFunction } from "express";
import UserService from "../services/user.service";
import { StatusCodes } from "http-status-codes";

class UserController {
	public userService = new UserService();

	public createUser = async (
		req: Request,
		resp: Response,
		next: NextFunction
	) => {
		try {
			const user = await this.userService.createUser(req.body);
			resp.status(StatusCodes.OK).json({ data: user, message: "User created" });
		} catch (error) {
			next(error);
		}
	};

	public getAllUsers = async(req: Request, res: Response, next: NextFunction) => {
		try {
			const users = await this.userService.getAllUsers();
			res.status(StatusCodes.OK).json({ data: users, message: "All Users"});
		} catch (error) {
			next(error);
		}
	};
}

export default UserController;
