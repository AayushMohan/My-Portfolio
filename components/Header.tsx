import React, { useState } from "react";
import { LockClosedIcon, MenuIcon, XIcon } from "@heroicons/react/solid";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="mx-10 py-10 md:flex justify-between relative items-center">
      {/* Icon */}
      <div>Aayush</div>

      {/* Nav */}
      <div
        onClick={() => setNavbarOpen(!navbarOpen)}
        className="md:hidden h-10 w-10 absolute right-1 top-8 cursor-pointer"
      >
        {navbarOpen ? <XIcon /> : <MenuIcon />}
      </div>
      <ul
        className={`md:space-x-9 md:flex md:pb-0 pb-12 md:bg-inherit bg-slate-900 md:shadow-none sm:p-0 p-8 shadow-2xl rounded-lg flex-1 md:flex-none text-center transition-all duration-500 ease-in my-4  ${
          navbarOpen ? "block" : "hidden"
        }`}
      >
        <li className="md:my-0 my-7">
          <a className="hover:underline" href="#About">
            About
          </a>
        </li>{" "}
        <li className="md:my-0 my-7">
          <a className="hover:underline" href="#Stacks">
            Stacks
          </a>
        </li>
        <li className="md:my-0 my-7">
          <a className="hover:underline" href="#Projects">
            Projects
          </a>
        </li>
        <li className="md:my-0 my-7">
          <a className="hover:underline" href="#Contact">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
