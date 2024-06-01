import { Hono } from "hono";
import { verify } from "hono/jwt";

export const authenticateRoute = new Hono<{
  Bindings: {
    JWT_SECRET: string;
  };
}>();

authenticateRoute.use("/blog/*", async (c, next) => {
  const jwt = c.req.header("Authorization");
  if (!jwt) {
    c.status(401);
    return c.json({ message: "unauthorized" });
  }

  const payload = await verify(jwt, c.env.JWT_SECRET);
  if (!payload) {
    c.status(401);
    return c.json({ message: "unauthorized" });
  }
  c.set("jwtPayload", payload.id as string);
  await next();
});
