import { ImageGeneration } from "./ImageGeneration";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const StepInto = () => {
  return (
    <div className="m-10">
      <div className="w-2/3 p-14">
        <div className="text-6xl font-bold leading-tight">
          Step into the world of Blogxpress, where our thoughts, stories and
          ideas come to life.
        </div>
        <button
          type="button"
          className=" text-lg font-semibold bg-[#DAD05F] rounded-lg px-8 py-3 mt-5 text-center inline-flex items-center animate-pulse hover:animate-none"
        >
          Get Started
          <HiOutlineArrowLongRight className="ml-2 size-5" />
        </button>
      </div>

      {/* <div className="flex gap-24 h-72"> images</div> */}
    </div>
  );
};
