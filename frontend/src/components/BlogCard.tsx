import { Blog } from "../pages/UserBlogs";
import { useNavigate } from "react-router-dom";

export function DateFormatter(date: string) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formattedDate;
}

export const BlogCard = ({ title, content, author, createdAt, id }: Blog) => {
  const formattedDate = DateFormatter(createdAt);
  const navigate = useNavigate();

  const onBlogSelect = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div
      className="flex h-auto m-10 rounded-md items-center"
      key={id}
      onClick={onBlogSelect}
    >
      <div className="flex w-1/3">
        <img src="https://via.placeholder.com/300" alt="blog" />
      </div>
      <div className="flex w-3/4 flex-col ml-5 gap-3">
        <div className="flex items-center gap-3">
          <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-sm text-xs text-gray-600 dark:text-gray-300">
              D
            </span>
          </div>
          <span>•</span>
          <div>{author.name}</div>
        </div>
        <div className=" cursor-pointer font-bold text-2xl">{title}</div>
        {content.length > 150 ? (
          <div>
            {content.slice(0, 150)}...
            <span className="text-blue-500 cursor-pointer">Read more</span>
          </div>
        ) : (
          <div>{content}</div>
        )}
        <div className="flex gap-3 items-center">
          <div>{Math.ceil(content.length / 100)} min read</div>
          <span>•</span>
          <div>{formattedDate}</div>
        </div>
      </div>
    </div>
  );
};
