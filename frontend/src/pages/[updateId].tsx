import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { InputArea } from "../components/InputArea";

export const BlogUpdate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { updateId } = useParams();

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `https://backend.cornstar.workers.dev/api/v1/blog/${updateId}`,
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
      console.error("An error occurred while updating the story", e);
    }
    setLoading(false);
  };

  const getBlog = async () => {
    try {
      const res = await axios.get(
        `https://backend.cornstar.workers.dev/api/v1/blog/${updateId}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setTitle(res.data.title);
      setContent(res.data.content);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      getBlog();
    }
  }, []);

  return (
    <InputArea
      handleSubmit={handleUpdate}
      title={title}
      content={content}
      setTitle={setTitle}
      setContent={setContent}
      loading={loading}
    />
  );
};
