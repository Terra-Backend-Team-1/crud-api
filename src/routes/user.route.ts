import express from "express";
import UserController from "../controllers/user.controller";



class UserRoutes {
	public path = "/users";
	public router = express.Router();
	public userController = new UserController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.post(this.path, this.userController.createUser);
		// other routes for : get, delete, update and get by id
		this.router.post(this.path + "/:id", this.userController.updateUser);
	}
}

export default UserRoutes;
