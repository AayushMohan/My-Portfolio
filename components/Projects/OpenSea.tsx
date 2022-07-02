import Image from "next/image";
import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import OS from "../../Assets/OS.png";
import Tools from "../../Assets/Tools.svg";
import Wave2 from "../../Assets/Wave-2.svg";

const OpenSea = () => {
  return (
    <div className="overflow-hidden pb-20 bg-inherit flex md:flex-row flex-col">
      <div>
        <HoverVideoPlayer
          videoSrc="https://res.cloudinary.com/upwork-fp/video/upload/c_scale,w_1000,q_auto/v1647622694/profile/portfolio/1396689749490266112/sibjvk6arybl7tdsd6pt.mp4"
          className="md:h-[40rem] md:w-[40rem] md:space-x-2 p-8 transition ease-in duration-150"
          pausedOverlay={
            <Image src={OS} width="1100" height="650" objectFit="fill" />
          }
        />
      </div>
      <div className="md:p-10 md:space-x-10  px-10">
        <h2 className="md:text-4xl text-3xl text-center font-bold md:mx-8 md:text-right">
          OpenSea Clone
        </h2>
        <p className="md:text-xl md:my-4 px-8 md:text-right mt-4">
          This site is a clone of Opensea, the first and largest NFT marketplace
          in the world. Users can use Metamask to authenticate and purchase
          samples from the collection.
        </p>

        <div className="h-[4rem] w-[16rem] md:w-[30rem] md:h-[9rem] items-center space-x-4 mt-4 cursor-pointer flex justify-start ">
          <Image src={Tools} />
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/AayushMohan/opensea-blockchain-clone">
            <button className=" p-4 rounded-lg bg-slate-900 font-medium transition hover:ease-in  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300">
              Source Code
            </button>
          </a>

          <a href="https://opensea-blockchain-clone-psi.vercel.app/">
            <button className="p-4 rounded-lg px-8 bg-slate-300 text-slate-900 transition hover:ease-in  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-300">
              Live URL
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OpenSea;
