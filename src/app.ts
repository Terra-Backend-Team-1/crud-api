import express from "express";
import { Routes } from "./interfaces/routes.interface";
import { MONGO_URI, PORT } from "./config";
import errorHandlerMiddleware from "./middlewares/error.middleware";
import notFoundErrorMiddleware from "./middlewares/notfound.middleware";
import connectDB from "./database/connect";

class App {
	public app: express.Application;
	public port: number;
	private db_uri: string;

	constructor(routes: Routes[]) {
		this.app = express();
		this.port = (PORT || 4500) as number;
		this.db_uri = MONGO_URI!;

		this.connectToDatabase();
		this.initializeMiddlewares();
		this.initializeRoutes(routes);
		this.initializeErrorHandling(); // this must come last to avoid NotFound error
	}

	public async connectToDatabase() {
		// database connection here
		await connectDB(this.db_uri);
	}

	public initializeRoutes(routes: Routes[]) {
		routes.forEach((route) => {
			this.app.use("/", route.router);
		});
	}

	public initializeMiddlewares() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
	}

	public initializeErrorHandling() {
		this.app.use(errorHandlerMiddleware);
		this.app.use(notFoundErrorMiddleware);
	}

	public startServer() {
		this.app.listen(this.port, () => {
			console.log(`Server running at ${this.port}`);
		});
	}
}

export default App;
