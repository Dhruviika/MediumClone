import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const NewStory = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handlePublish = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://backend.cornstar.workers.dev/api/v1/blog/post",
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (res.status === 200) {
        navigate("/me");
      }
    } catch (e) {
      console.error("An error occurred while publishing the story", e);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col p-20 gap-3">
        <input
          className="text-5xl focus:outline-none shadow-lg px-3 rounded-md"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="text-1xl focus:outline-none h-svh px-3 rounded-md shadow-lg"
          placeholder="Tell your story....."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="flex justify-center items-center h-40">
        <button
          onClick={handlePublish}
          className="bg-orange-500 text-white rounded-full py-3 w-1/4 hover:bg-orange-700"
        >
          Publish
        </button>
      </div>
    </div>
  );
};
