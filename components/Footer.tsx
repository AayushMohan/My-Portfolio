import Image from "next/image";
import React from "react";
import Aayush from "../Assets/Aayush.svg";

const Footer = () => {
  return (
    <div className=" bg-inherit flex flex-col overflow-hidden">
      <h1 className="text-3xl md:text-4xl text-center py-10 leading-relaxed font-bold md:w-[30rem] md:mx-24">
        Let's make something amazing together.
      </h1>
      <h1 className="text-3xl text-center md:text-4xl font-bold md:mx-24 md:my-20">
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
      <span className="py-10 text-gray-600 text-center">
        ©2022. All Rights Reserved
      </span>
    </div>
  );
};

export default Footer;
