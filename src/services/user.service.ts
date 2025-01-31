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

	// update user service
	public updateUser = async (userData: IUser, id: string): Promise<IUser> => {
		const user = await this.userModel.findByIdAndUpdate(id, userData);
		if (!user){
			throw new HTTPException(StatusCodes.BAD_REQUEST, "User not found");
		}
		return user;
	}

	// user service that get a user by id
	public getUserById = async (id: string): Promise<IUser> => {
		const user = await this.userModel.findById(id);
		if (!user){
			throw new HTTPException(StatusCodes.BAD_REQUEST, "User not found");
		}
		return user;
	}
}

export default UserService;
