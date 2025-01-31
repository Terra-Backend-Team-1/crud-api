import { config } from "dotenv";

config({ path: ".env" });

export const MONGO_URI =
	process.env.NODE_ENV === "production"
		? process.env.MONGO_URI
		: "mongodb://127.0.0.1:27017/crud-api";

export const { PORT } = process.env;
