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
  if (!posts) {
    return c.json({ message: "No posts found" });
  }

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

  if (!res) {
    return c.json({ message: "Post not created" });
  }

  return c.json(res);
});

blogRouter.get("/myblog", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.get("jwtPayload");

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
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  if (!posts) {
    return c.json({ message: "No posts found" });
  }

  return c.json(posts);
});

blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.get("jwtPayload");
  const id = c.req.param("id");

  const posts = await prisma.post.findMany({
    where: {
      authorId: Number(userId),
      id: Number(id),
    },
    select: {
      id: true,
      title: true,
      createdAt: true,
      updatedAt: true,
      content: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  if (!posts) {
    return c.json({ message: "No posts found" });
  }

  return c.json(posts);
});

blogRouter.put("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.get("jwtPayload");
  const id = c.req.param("id");
  const body = await c.req.json();

  const res = await prisma.post.update({
    where: {
      authorId: Number(userId),
      id: Number(id),
    },
    data: {
      title: body.title,
      content: body.content,
    },
    select: {
      id: true,
      title: true,
      createdAt: true,
      updatedAt: true,
      content: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  if (res) {
    return c.json({ message: "Post updated successfully", res });
  } else {
    return c.json({ message: "Post not found" });
  }
});

blogRouter.delete("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.get("jwtPayload");
  const id = c.req.param("id");

  const res = await prisma.post.delete({
    where: {
      authorId: Number(userId),
      id: Number(id),
    },
  });

  if (res) {
    return c.json({ message: "Post deleted successfully" });
  } else {
    return c.json({ message: "Post not found" });
  }
});
