import { Navbar } from "./Navbar";
import { Spinner } from "./Spinner";

export const InputArea = ({
  handleSubmit,
  loading,
  title,
  setTitle,
  content,
  setContent,
}: {
  handleSubmit: () => void;
  loading: boolean;
  title: string;
  setTitle: (title: string) => void;
  content: string;
  setContent: (content: string) => void;
}) => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col mt-5 gap-5 items-center">
        <div className="flex flex-col items-end mb-5 w-2/3">
          <button
            onClick={handleSubmit}
            className="bg-green-500 w-28 text-white py-2 rounded-full px-5 hover:bg-green-700"
          >
            {loading ? <Spinner color="fill-green-500" /> : "Publish"}
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
