import React from "react";

const Header = () => {
  return (
    <div className="mx-10 py-10 flex justify-between">
      {/* Icon */}
      <div>Aayush</div>

      {/* Nav */}
      <div className=" list-none space-x-9 flex">
        <li>
          <a href="#About">About</a>
        </li>{" "}
        <li>
          <a href="#Stacks">Stacks</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contact">Contact Me</a>
        </li>
      </div>
    </div>
  );
};

export default Header;
