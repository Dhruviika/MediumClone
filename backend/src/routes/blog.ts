import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

blogRouter.get("/all", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      createdAt: true,
      updatedAt: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return c.json(posts);
});

blogRouter.post("/post", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.get("jwtPayload");
  const body = await c.req.json();

  const res = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userId,
    },
    select: {
      id: true,
      title: true,
      createdAt: true,
      updatedAt: true,
      author: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return c.json(res);
});

blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.req.param("id");

  const posts = await prisma.post.findMany({
    where: {
      authorId: Number(userId),
    },
    select: {
      id: true,
      title: true,
      createdAt: true,
      updatedAt: true,
      content: true,
    },
  });

  return c.json(posts);
});

blogRouter.put("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.req.param("id");
  const body = await c.req.json();

  const res = await prisma.post.update({
    where: {
      authorId: Number(userId),
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return c.json(res);
});
