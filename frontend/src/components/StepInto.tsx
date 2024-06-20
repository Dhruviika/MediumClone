import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

export const StepInto = () => {
  return (
    <div className="m-10">
      <div className="w-auto lg:w-2/3 p-14">
        <div className="text-4xl font-bold leading-tight lg:text-6xl">
          Step into the world of Blogxpress, where our thoughts, stories and
          ideas come to life.
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
    </div>
  );
};
