import axios from "axios";

export const deleteBlog = (id: number) => {
  axios.delete(`https://backend.cornstar.workers.dev/api/v1/blog/${id}`, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};
