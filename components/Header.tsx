import React, { useRef, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";
import Hero from "./Hero";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <div className="mx-10 pt-10 md:flex justify-between relative items-center ">
        {/* Icon */}
        <div className="h-16 w-16 md:pt-3 cursor-pointer">
          <h1 className="font-logo md:text-3xl text-2xl">Aayush</h1>
        </div>

        {/* Nav */}
        <div
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden h-10 w-10 absolute right-1 top-8 cursor-pointer"
        >
          {navbarOpen ? <XIcon /> : <MenuIcon />}
        </div>
        <ul
          className={`md:space-x-9 md:flex md:pb-0 pb-12 md:bg-inherit bg-slate-900 md:shadow-none sm:p-0 p-8 shadow-md rounded-lg flex-1 md:flex-none text-center my-4  ${
            navbarOpen ? "block" : "hidden"
          }`}
        >
          <li className="md:my-0 my-7 cursor-pointer md:hover:border-b-4 md:pb-2 md:border-slate-700">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              href="../components/Hero.tsx"
            >
              About
            </Link>
          </li>{" "}
          <li className="md:my-0 my-7 md:hover:border-b-4 md:pb-2 md:border-slate-700 cursor-pointer">
            <Link
              to="stacks"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              href="../components/Stack.tsx"
            >
              Stacks
            </Link>
          </li>
          <li className="md:my-0 my-7 md:hover:border-b-4 md:pb-2 md:border-slate-700 cursor-pointer">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              href="Projects"
            >
              Projects
            </Link>
          </li>
          <li className="md:my-0 my-7 md:hover:border-b-4 md:pb-2 md:border-slate-700 cursor-pointer">
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              href="../components/Footer.tsx"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
