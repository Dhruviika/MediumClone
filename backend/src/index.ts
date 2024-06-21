import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { authenticateRoute } from "./middleware";
import { cors } from "hono/cors";

const app = new Hono();

app.use(cors());

app.get("/", (c) => c.text("Hello Cloudflare Workers!"));

app.route("api/v1", authenticateRoute);

app.route("/api/v1/user", userRouter);
app.route("api/v1/blog", blogRouter);

export default app;
