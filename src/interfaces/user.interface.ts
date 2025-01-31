import { Document } from "mongoose";
import { TimeStamps } from "../typings/utils.types";

interface IUser extends Document<any>, TimeStamps {
	firstName: string;
	lastName: string;
	email: string;
	gender: "male" | "female";
	age: number;
}

export default IUser;
