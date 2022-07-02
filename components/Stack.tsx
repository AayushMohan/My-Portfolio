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
      <h1 className="text-center font-bold text-6xl text-gray-200 p-10 hover:ease-in transition hover:-translate-y-4 duration-300 cursor-pointer">
        My Tech Stack
      </h1>
      <div className="flex md:justify-between md:flex-row flex-col">
        <Image src={Coding} className="" />
        <div className="grid md:grid-cols-6 grid-cols-6 gap-6 md:gap-6 p-4 md:mr-12 md:px-8 overflow-hidden h-[25rem] w-[25rem] md:h-[35rem] md:w-[35rem] items-center">
          {/* <div className=""> */}
          <a href="https://www.w3schools.com/html/">
            <Image src={HTML} className="" />
          </a>
          <a href="https://www.w3schools.com/css/">
            <Image src={CSS} className="" />
          </a>
          <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">
            <Image src={Bootstrap} className="" />
          </a>
          <a href="https://sass-lang.com/">
            <Image src={SCSS} className="" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            <Image src={Javascript} className="" />
          </a>
          <a href="https://reactjs.org/">
            <Image src={ReactIcon} className="" />
          </a>
          <a href="https://nodejs.org/en/">
            <Image src={NodeIcon} className="" />
          </a>
          <a href="https://www.typescriptlang.org/">
            <Image src={TypeScript} className="" />
          </a>
          <a href="https://nextjs.org/">
            <Image src={NextIcon} className="" />
          </a>

          <a href="https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=next-website">
            <Image src={Vercel} className="" />
          </a>
          <a href="https://git-scm.com/">
            <Image src={Git} className="" />
          </a>

          <a href="https://github.com/">
            <Image src={Github} className="" />
          </a>
          <a href="https://metamask.io/">
            <Image src={Metamask} className="" />
          </a>
          <a href="https://sanity.io/">
            <Image src={Sanity} className="" />
          </a>
          <a href="https://thirdweb.com/">
            <Image src={ThirdWeb} className="" />
          </a>
          <a href="https://moralis.io/">
            <Image src={Moralis} className="" />
          </a>
          <a href="https://firebase.google.com/">
            <Image src={FireBase} className="" />
          </a>
          <a href="https://alchemy.com/">
            <Image src={Alchemy} className="" />
          </a>
        </div>
      </div>
      <Image src={Wave2} className="" />
    </div>
  );
};

export default Stack;
