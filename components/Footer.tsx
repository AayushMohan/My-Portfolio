import Image from "next/image";
import React from "react";
import Aayush from "../Assets/Aayush.svg";

const Footer = () => {
  return (
    <div className=" bg-inherit flex flex-col overflow-hidden" id="footer">
      <h1 className="text-3xl md:text-left md:text-4xl text-center py-10 leading-relaxed font-bold md:w-[30rem] md:mx-24">
        Let's make something amazing together.
      </h1>
      <h1 className="text-3xl md:text-left text-center md:text-4xl font-bold md:mx-24 md:my-20">
        Start by{" "}
        <span
          className="underline text-[#225E7A] cursor-pointer"
          onClick={() =>
            (window.location.href = "mailto:aayushmohan1702@gmail.com")
          }
        >
          Saying Hi!
        </span>
      </h1>
      <div className="flex md:flex-row flex-col items-center md:justify-between">
        <span className="py-10 text-gray-600 text-center md:text-left md:px-10">
          ©2022. All Rights Reserved
        </span>
        <div className="flex space-x-4 md:mr-10 mb-10">
          <a href="https://github.com/AayushMohan">
            <img
              src="https://img.icons8.com/material-rounded/48/000000/github.png"
              className="bg-white rounded-full w-10 h-10 btnAni"
              alt="Github"
            />
          </a>

          <a href="https://www.linkedin.com/in/aayushmohan/">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/linkedin-circled--v1.png"
              className="bg-white rounded-full w-10 h-10 btnAni"
              alt="Linkedin"
            />
          </a>

          <a href="https://www.instagram.com/aayushcodes/">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/instagram-new--v1.png"
              className="bg-white rounded-2xl w-10 h-10 btnAni"
              alt="Instagram"
            />
          </a>

          <a href="https://twitter.com/AayushMohan">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
              className="bg-white rounded-full w-10 h-10 btnAni"
              alt="Twitter"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
