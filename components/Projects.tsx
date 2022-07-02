import Image from "next/image";
import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import OS from "../Assets/OS.png";
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

const Projects = () => {
  return (
    <div className="h-screen bg-inherit">
      <h1 className="text-6xl font-semibold text-center py-12">
        Featured Projects
      </h1>
      <div className="overflow-hidden h-screen bg-inherit flex md:flex-row flex-col">
        <div>
          <HoverVideoPlayer
            videoSrc="https://res.cloudinary.com/upwork-fp/video/upload/c_scale,w_1000,q_auto/v1647622694/profile/portfolio/1396689749490266112/sibjvk6arybl7tdsd6pt.mp4"
            className="md:h-[40rem] md:w-[40rem] md:space-x-2 p-8 transition ease-in duration-150"
            pausedOverlay={
              <Image src={OS} width="1150" height="700" objectFit="fill" />
            }
          />
        </div>
        <div className="md:p-10 md:space-x-10 p-10">
          <h2 className="text-3xl md:mx-40 md:text-right">OpenSea Clone</h2>
          <p className="text-xl md:mx-40 md:my-4 md:text-right">
            This site is a clone of Opensea, the first and largest NFT
            marketplace in the world. Users can use Metamask to authenticate and
            purchase samples from the collection.
          </p>

          <div className="h-14 w-14 my-4 cursor-pointer flex justify-start ">
            <a href="https://reactjs.org/">
              <Image src={ReactIcon} className="" />
            </a>
            <a href="https://nodejs.org/en/">
              <Image src={NodeIcon} className="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
