import App from "./app";
import UserRoutes from "./routes/user.route";

const app = new App([new UserRoutes()]);
app.startServer();
