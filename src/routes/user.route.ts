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
		this.router.put(this.path + "/:id", this.userController.updateUser); // update user route
		this.router.get(this.path + "/:id", this.userController.getUser); // get user by id route
		this.router.get(this.path, this.userController.getAllUsers); // get all users route
		this.router.delete(this.path + "/:id", this.userController.deleteUser); // delete user
	}
}

export default UserRoutes;
