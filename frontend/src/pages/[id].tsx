import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Blog } from "../pages/UserBlogs";
import { Navbar } from "../components/Navbar";
import { DateFormatter } from "../components/BlogCard";

export const BlogScreen = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

  const fetchData = async () => {
    const res = await axios.get(
      `https://backend.cornstar.workers.dev/api/v1/blog/${id}`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    setBlog(res?.data[0]);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const formattedDate = DateFormatter(blog?.createdAt || "");
  const contentLength = blog?.content?.length || 0;
  return (
    <div className="bg-gradient-to-r from-[#DAD05F] to-white h-auto">
      <Navbar />
      <div className="flex justify-center">
        <div className="flex flex-col items-start mt-10 bg-white w-2/3 p-5 mb-5 rounded-md">
          <div className="text-4xl font-semibold">{blog?.title}</div>
          <div className="flex gap-4 py-5">
            <div className="flex items-center">
              <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full border-2">
                <span className="font-medium">D</span>
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <div className=" font-medium">{blog?.author.name}</div>
              <div className=" text-gray-600 flex gap-2">
                {Math.ceil(contentLength / 100)} min read
                <span>•</span> {formattedDate}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full p-5 border-t-2 mb-5">
            <img
              className="rounded-sm"
              src="https://via.placeholder.com/600"
              alt="blog"
            />
            <div className="mt-20 text-xl">{blog?.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
