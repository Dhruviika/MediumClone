import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Spinner } from "../components/Spinner";

export const NewStory = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handlePublish = async () => {
    setLoading(true);
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
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-r from-[#DAD05F] to-white">
      <Navbar />

      <div className="flex flex-col mt-5 gap-5 items-center">
        <div className="flex flex-col items-end mb-5 w-2/3">
          <button
            onClick={handlePublish}
            className="bg-green-500 w-28 text-white py-2 rounded-full px-5 hover:bg-green-700"
          >
            Publish {loading && <Spinner color="fill-green-500" />}
          </button>

          <input
            className="text-5xl focus:outline-none shadow-lg px-3 rounded-md border-5 my-5 w-full border-2 border-gray-300"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="text-1xl focus:outline-none h-svh px-3 rounded-md shadow-lg w-full  border-dotted border-2 border-black"
            placeholder="Tell your story....."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
