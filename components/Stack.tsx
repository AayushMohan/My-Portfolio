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
import Tailwind from "../Assets/Tailwind.svg";
import ThirdWeb from "../Assets/ThirdWeb.svg";
import Moralis from "../Assets/Moralis.svg";
import FireBase from "../Assets/Firebase.svg";
import Alchemy from "../Assets/Alchemy.svg";
import Wave2 from "../Assets/Wave-2.svg";

const Stack = () => {
  return (
    <div className="bg-inherit overflow-hidden">
      <h1 className="text-center font-bold md:text-6xl text-3xl text-gray-200 p-10 hover:ease-in transition hover:-translate-y-4 duration-300 cursor-pointer">
        My Tech Stack
      </h1>
      <div className="flex md:justify-between md:flex-row flex-col">
        <div className="h-[20rem] w-[20rem] md:w-[40rem] md:h-[40rem] mx-8 md:mt-[6rem]">
          <Image src={Coding} className="" alt="Coding" />
        </div>

        <div className="grid md:grid-cols-5 grid-cols-5 gap-6 md:gap-8 p-8 md:mr-12 md:px-8 overflow-hidden h-[25rem] md:h-[35rem] md:w-[35rem] items-center">
          {/* <div className=""> */}
          <a href="https://www.w3schools.com/html/">
            <Image src={HTML} className=" btnAni" alt="html" />
          </a>
          <a href="https://www.w3schools.com/css/">
            <Image src={CSS} className=" btnAni" alt="css" />
          </a>
          <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">
            <Image src={Bootstrap} className=" btnAni" alt="Bootstrap" />
          </a>
          <a href="https://sass-lang.com/">
            <Image src={SCSS} className=" btnAni" alt="SCSS" />
          </a>
          <a href="https://tailwindcss.com/">
            <Image src={Tailwind} className=" btnAni" alt="Tailwind" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            <Image src={Javascript} className=" btnAni" alt="Javascript" />
          </a>
          <a href="https://reactjs.org/">
            <Image src={ReactIcon} className=" btnAni" alt="ReactIcon" />
          </a>
          <a href="https://redux.js.org/">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg"
              alt="redux"
              className="w-14 h-14 space-y-14 btnAni"
            />
          </a>
          <a href="https://nodejs.org/en/">
            <Image src={NodeIcon} className=" btnAni" alt="NodeIcon" />
          </a>
          <a href="https://www.typescriptlang.org/">
            <Image src={TypeScript} className=" btnAni" alt="TypeScript" />
          </a>
          <a href="https://nextjs.org/">
            <Image src={NextIcon} className=" btnAni" alt="NextIcon" />
          </a>

          <a href="https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=next-website">
            <Image src={Vercel} className="btnAni" alt="Vercel" />
          </a>
          <a href="https://git-scm.com/">
            <Image src={Git} className="btnAni" alt="Git" />
          </a>

          <a href="https://github.com/">
            <Image src={Github} className="btnAni" alt="Github" />
          </a>
          <a href="https://metamask.io/">
            <Image src={Metamask} className="btnAni" alt="Metamask" />
          </a>
          <a href="https://sanity.io/">
            <Image src={Sanity} className="btnAni" alt="Sanity" />
          </a>
          <a href="https://thirdweb.com/">
            <Image src={ThirdWeb} className="btnAni" alt="ThirdWeb" />
          </a>
          <a href="https://moralis.io/">
            <Image src={Moralis} className="btnAni" alt="Moralis" />
          </a>
          <a href="https://firebase.google.com/">
            <Image src={FireBase} className="btnAni" alt="FireBase" />
          </a>
          <a href="https://alchemy.com/">
            <Image src={Alchemy} className="btnAni" alt="Alchemy" />
          </a>
        </div>
      </div>
      <Image src={Wave2} className="" alt="Wave" />
    </div>
  );
};

export default Stack;
