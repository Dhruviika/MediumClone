import { Hono } from "hono";
import { userRouter } from "./routes/signup";
import { blogRouter } from "./routes/blog";
import { authenticateRoute } from "./middleware";
const app = new Hono();

app.get("/", (c) => c.text("Hello Cloudflare Workers!"));

app.route("api/v1", authenticateRoute);

app.route("/api/v1/user", userRouter);
app.route("api/v1/blog", blogRouter);

export default app;
