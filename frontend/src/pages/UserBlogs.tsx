import { useEffect, useState } from "react";
import axios from "axios";
import { BlogCard } from "../components/BlogCard";
import { Navbar } from "../components/Navbar";
import { TopPosts } from "../components/TopPosts";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { BlogCardSkeleton } from "../components/Skeleton";

export interface author {
  name: string;
}

export interface Blog {
  id: number;
  title: string;
  content?: string;
  createdAt?: string;
  author?: author;
  updatedAt?: string;
}

export const UserBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          "https://backend.cornstar.workers.dev/api/v1/blog/myblog",
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        setBlogs(res.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="h-full">
      <Navbar />
      <div className="flex">
        {loading ? (
          <div className="mt-10 ml-16 mr-5 flex flex-col gap-5  w-2/3">
            <BlogCardSkeleton />
            <BlogCardSkeleton />
          </div>
        ) : blogs?.length == 0 ? (
          <div className="flex flex-col justify-center items-center mt-10 ml-16 w-2/3 ">
            <div className="text-4xl font-bold leading-tight lg:text-6xl">
              Write your first blog...
            </div>
            <button
              type="button"
              className="ml-3 text-lg font-semibold bg-[#DAD05F] rounded-lg px-8 py-3 mt-8 text-center  hover: transition duration-700 hover:scale-125"
            >
              <Link
                to="/new-story"
                className="text-black inline-flex items-center "
              >
                Get Started
                <HiOutlineArrowLongRight className="ml-2 size-5" />
              </Link>
            </button>
          </div>
        ) : (
          <div className="mt-10 ml-16 flex flex-col gap-5  w-2/3">
            {blogs.map((blog) => {
              return (
                <div key={blog.id} className=" border-b-2 border-gray-300">
                  <BlogCard {...blog} />
                </div>
              );
            })}
          </div>
        )}
        <div className="flex w-1/3 border-l-2 border-gray-300 px-5 pt-20">
          <TopPosts />
        </div>
      </div>
    </div>
  );
};
