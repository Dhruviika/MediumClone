import { faker } from "@faker-js/faker";
import { LuAlignJustify } from "react-icons/lu";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export const Navbar = () => {
  const avatar = faker.image.avatar();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="flex justify-between border-2 p-5">
        <div className="flex text-3xl font-bold justify-center items-center">
          Blogxpress.
        </div>
        <div className="hidden lg:flex gap-12 items-center">
          <a href="#" className="font-medium">
            Home
          </a>
          <a href="#" className="font-medium">
            Blogs
          </a>
          <a href="#" className="font-medium">
            About
          </a>
          <a href="#" className="font-medium">
            Contact
          </a>
        </div>
        <div className="hidden lg:flex items-center justify-end">
          <div className="px-10 border-2 rounded-full py-3 mx-3">
            Contact Us
          </div>
          <img className="rounded-full w-12 h-12" src={avatar} alt="avatar" />
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
