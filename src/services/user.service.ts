import { StatusCodes } from "http-status-codes";
import HTTPException from "../exceptions/http.exception";
import IUser from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { isEmpty } from "../utils";

class UserService {
	public userModel = UserModel;

	public createUser = async (userData: IUser): Promise<IUser> => {
		if (isEmpty(userData))
			throw new HTTPException(StatusCodes.BAD_REQUEST, "Empty user data");

		if (!userData.firstName)
			throw new HTTPException(StatusCodes.BAD_REQUEST, "Provide first name");

		if (!userData.email)
			throw new HTTPException(StatusCodes.BAD_REQUEST, "Provide email");

		if (!userData.gender)
			throw new HTTPException(StatusCodes.BAD_REQUEST, "Provide first gender");

		if (!userData.lastName)
			throw new HTTPException(StatusCodes.BAD_REQUEST, "Provide last name");

		const user = await this.userModel.create(userData);
		return user;
	};

	public getAllUsers = async (): Promise<IUser[]> => {
		const users = this.userModel.find();
		return users;
	};
}

export default UserService;
