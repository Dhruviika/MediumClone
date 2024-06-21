import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Blog } from "./UserBlogs";
import { DateFormatter } from "../components/BlogCard";
import { MdOutlineDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { deleteBlog } from "../axios/blog";
import { useNavigate } from "react-router-dom";

const BlogModule = ({ blog }: { blog: Blog }) => {
  const navigate = useNavigate();

  const formattedDate = DateFormatter(blog.createdAt || "");
  const formattedUpdateDate = DateFormatter(blog.updatedAt || "");

  return (
    <div className="flex justify-between px-5 items-center py-3 border-t-2 bg-white">
      <div className="font-medium w-2/5">{blog.title.slice(0, 60)}...</div>
      <div className="w-1/5 flex justify-center">{formattedDate}</div>
      <div className="w-1/5 flex justify-center">{formattedUpdateDate}</div>
      <div className="flex items-center gap-5 w-1/5 justify-center">
        <TbEdit
          onClick={() => {
            navigate(`/update/${blog.id}`);
          }}
          size={28}
        />
        <MdOutlineDelete onClick={() => deleteBlog(blog.id)} size={28} />
      </div>
    </div>
  );
};

interface User {
  name: string;
  email: string;
  posts: Blog[];
}

export const Profile = () => {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    const res = await axios.get(
      "https://backend.cornstar.workers.dev/api/v1/user/me",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    setUser(res.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  console.log(user);

  return (
    <div className=" bg-slate-100 h-screen p-5">
      <div className="rounded-t-lg bg-white h-full">
        <div className=" bg-gradient-to-r from-[#DAD05F] via-yellow-300 to-orange-300 p-5 rounded-t-lg flex gap-5 ">
          <img
            src="https://via.placeholder.com/100"
            alt="profile"
            className="rounded-full h-36 w-36 border-4 border-white"
          />
          <div className="flex flex-col justify-end">
            <div className="text-3xl font-medium">Dhruvika Goyal</div>
            <div className=" font-thin">dhruvikag086@gmail.com</div>
          </div>
        </div>
        <div className="border-2 m-10 rounded-md">
          <div className="flex px-5 items-center py-3 bg-slate-100">
            <div className="font-medium w-2/5">Title</div>
            <div className="w-1/5 flex justify-center">Created At</div>
            <div className="w-1/5 flex justify-center">Updated At</div>
            <div className="w-1/5 flex justify-center">Actions</div>
          </div>
          {user?.posts?.map((blog) => {
            return <BlogModule blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
};
