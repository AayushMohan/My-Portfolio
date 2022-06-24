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
import FireBase from "../Assets/FireBase.svg";
import Alchemy from "../Assets/Alchemy.svg";

const Stack = () => {
  return (
    <div className="bg-inherit relative flex items-center justify-between">
      <div>
        <Image src={Coding} className="items-center p-10 flex" />
      </div>
      <div className="grid grid-cols-5 gap-6 items-center mx-14 my-10">
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
  );
};

export default Stack;
