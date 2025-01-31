import mongoose from "mongoose";

const connectDB = async (uri: string) => {
	return mongoose.connect(uri);
};

mongoose.set("strictQuery", true);
export default connectDB;
