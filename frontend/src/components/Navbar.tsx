import { LuAlignJustify } from "react-icons/lu";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="flex justify-between p-5">
        <div className="flex text-3xl font-bold justify-center items-center">
          <Link to={"/home"}>Blogxpress.</Link>
        </div>
        <div className="hidden lg:flex gap-12 items-center">
          <Link to={"/home"} className="font-medium">
            Home
          </Link>
          <Link to={"/home"} className="font-medium">
            Blog
          </Link>
          <a href="#" className="font-medium">
            About
          </a>
          <a href="#" className="font-medium">
            Contact
          </a>
        </div>
        <div className="hidden lg:flex items-center justify-end">
          <div className="px-10 rounded-full py-3 mx-3 border-2 font-medium hover:bg-[#DAD05F]">
            <Link to={"/new-story"}>Publish</Link>
          </div>

          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full border-2">
            <span className="font-medium">D</span>
          </div>
        </div>
        <div className="lg:hidden" onClick={() => setShowMenu(true)}>
          <LuAlignJustify className="text-3xl" />
        </div>
      </div>

      {showMenu && (
        <div className="fixed bg-slate-50 inset-0">
          <div className="m-5 flex justify-between">
            <div className="text-3xl font-bold justify-center">Blogxpress.</div>
            <RxCross2 className="text-3xl" onClick={() => setShowMenu(false)} />
          </div>
          <div className="flex flex-col mx-5 gap-5">
            <a
              href="#"
              className="font-medium hover:bg-gray-200 py-3 rounded-2xl pl-3"
            >
              Home
            </a>
            <a
              href="#"
              className="font-medium hover:bg-gray-200 py-3 rounded-2xl pl-3"
            >
              Blogs
            </a>
            <a
              href="#"
              className="font-medium hover:bg-gray-200 py-3 rounded-2xl pl-3"
            >
              About
            </a>
            <a
              href="#"
              className="font-medium hover:bg-gray-200 py-3 rounded-2xl pl-3"
            >
              Contact
            </a>
            <a
              href="#"
              className="font-medium hover:bg-gray-200 py-3 rounded-2xl pl-3"
            >
              Profile
            </a>
          </div>
        </div>
      )}
    </>
  );
};
