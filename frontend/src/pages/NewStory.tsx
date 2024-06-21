import { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

import { InputArea } from "../components/InputArea";

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
    <InputArea
      handleSubmit={handlePublish}
      title={title}
      content={content}
      setTitle={setTitle}
      setContent={setContent}
      loading={loading}
    />
  );
};
