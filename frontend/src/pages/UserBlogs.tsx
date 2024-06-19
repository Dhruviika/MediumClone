import { useEffect, useState } from "react";
import axios from "axios";
import { BlogCard } from "../components/BlogCard";
import { Navbar } from "../components/Navbar";
import { TopPosts } from "../components/TopPosts";

export interface Blog {
  id: number;
  title: string;
  content: string;
  name: string;
  createdAt: string;
}

export const UserBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      id: 1,
      name: "John Doe",
      createdAt: "2024-06-18T13:40:21.876Z",
      title:
        "How an Ugly Single-Page Webiste Makes $5,000 a Month with Affiliate Markteing",
      content:
        "No need to create a fanccy and morder website with hindred of pages to make money online. Making money online is the dream for man.Making money online is the dream for man.Making money online is the dream for man.",
    },
    {
      id: 2,
      name: "Von Doe",
      createdAt: "2024-06-18T13:40:21.876Z",
      title:
        "How an Ugly Single-Page Webiste Makes $5,000 a Month with Affiliate Markteing",
      content:
        "No need to create a fanccy and morder website with hindred of pages to make money online. Making money online is the dream for man.",
    },
  ]);
  //   useEffect(() => {
  //     const fetchBlogs = async () => {
  //       try {
  //         const res = await axios.get(
  //           "https://backend.cornstar.workers.dev/api/v1/blog/myblog",
  //           {
  //             headers: {
  //               Authorization: localStorage.getItem("token"),
  //             },
  //           }
  //         );
  //         setBlogs(res.data);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     };
  //     fetchBlogs();
  //   }, []);
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="mt-10 ml-16 flex flex-col gap-5  w-2/3">
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className=" border-b-2 border-gray-300">
                <BlogCard {...blog} />
              </div>
            );
          })}
        </div>
        <div className="flex w-1/3 border-l-2 border-gray-300 px-5 pt-20">
          <TopPosts />
        </div>
      </div>
    </>
  );
};
