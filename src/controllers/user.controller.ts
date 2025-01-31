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

	// get a user  by id
	public getUser = async (req: Request, resp: Response, next: NextFunction) => {
		try {
			const id: string = req.params.id;
			const user = await this.userService.getUserById(id);
			resp.status(StatusCodes.OK).json({ data: user, message: "User" });
		} catch (error) {
			next(error);
		}
	};

	public getAllUsers = async (
		req: Request,
		resp: Response,
		next: NextFunction
	) => {
		try {
			const users = await this.userService.getAllUsers();
			resp.status(StatusCodes.OK).json({ data: users, message: "All users" });
		} catch (error) {
			next(error);
		}
	};
	// update user
	public updateUser = async (
		req: Request,
		resp: Response,
		next: NextFunction
	) => {
		try {
			const id: string = req.params.id;
			const user = await this.userService.updateUser(req.body, id);
			resp.status(StatusCodes.OK).json({ data: user, message: "User updated" });
		} catch (error) {
			next(error);
		}
	};

	// delete user
	public deleteUser = async (
		req: Request,
		resp: Response,
		next: NextFunction
	) => {
		try {
			const id = req.params.id;
			const user = await this.userService.deleteUser(id);
			resp.status(StatusCodes.OK).json({ data: user, message: "User deleted" });
		} catch (error) {
			next(error);
		}
	};
}

export default UserController;
