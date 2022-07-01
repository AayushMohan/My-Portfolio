import Image from "next/image";
import React from "react";
import Coding from "../Assets/Coding.svg";
import HTML from "../Assets/HTML.svg";
import CSS from "../Assets/CSS.svg";
import Bootstrap from "../Assets/Bootstrap.svg";
import SCSS from "../Assets/SCSS.svg";
import Javascript from "../Assets/JS.svg";
import ReactIcon from "../Assets/React.svg";
import NodeIcon from "../Assets/Node.svg";
import TypeScript from "../Assets/TypeScript.svg";
import NextIcon from "../Assets/Next.svg";
import Vercel from "../Assets/Vercel.svg";
import Git from "../Assets/Git.svg";
import Github from "../Assets/Github.svg";
import Metamask from "../Assets/Metamask.svg";
import Sanity from "../Assets/Sanity.svg";
import ThirdWeb from "../Assets/ThirdWeb.svg";
import Moralis from "../Assets/Moralis.svg";
import FireBase from "../Assets/Firebase.svg";
import Alchemy from "../Assets/Alchemy.svg";
import Wave2 from "../Assets/Wave-2.svg";

const Stack = () => {
  return (
    <div className="bg-inherit overflow-hidden ">
      <h1 className="text-center font-bold text-3xl text-gray-200 p-10 hover:ease-in transition hover:-translate-y-4 duration-300 cursor-pointer">
        My Tech Stack
      </h1>
      <div className="flex md:justify-between md:flex-row flex-col">
        <Image src={Coding} className="" />
        <div className="grid grid-cols-6 gap-4 md:gap-6 p-6 md:mr-12 md:px-8 overflow-hidden h-[25rem] w-[25rem] md:h-[35rem] md:w-[35rem]">
          {/* <div className=""> */}
          <Image src={HTML} className="" />
          <Image src={CSS} className="" />
          <Image src={Bootstrap} className="" />
          <Image src={SCSS} className="" />
          <Image src={Javascript} className="" />
          <Image src={ReactIcon} className="" />
          <Image src={NodeIcon} className="" />
          <Image src={TypeScript} className="" />
          <Image src={NextIcon} className="" />
          <Image src={Vercel} className="" />
          <Image src={Git} className="" />
          <Image src={Github} className="" />
          <Image src={Metamask} className="" />
          <Image src={Sanity} className="" />
          <Image src={ThirdWeb} className="" />
          <Image src={Moralis} className="" />
          <Image src={FireBase} className="" />
          <Image src={Alchemy} className="" />
        </div>
      </div>
      <Image src={Wave2} className="" />
    </div>
  );
};

export default Stack;
