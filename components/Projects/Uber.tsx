import Image from "next/image";
import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import uber from "../../Assets/uber.png";
import Tools2 from "../../Assets/Tools2.svg";

const Uber = () => {
  return (
    <div className="overflow-hidden bg-inherit flex md:flex-row-reverse flex-col">
      <div className="m-[3rem] md:px-10 md:my-10 p-10">
        <HoverVideoPlayer
          videoSrc="https://res.cloudinary.com/upwork-fp/video/upload/c_scale,w_1000,q_auto/v1647624701/profile/portfolio/1396689749490266112/wrza5xsvf1wgwp5hncvl.mp4"
          className="md:space-x-2 p-8 transition ease-in duration-150 rounded-lg md:w-[22.5rem] md:h-[46.25rem]"
          pausedOverlay={
            <Image
              src={uber}
              objectFit="fill"
              className="rounded-lg "
              alt="Uber Thumbnail"
            />
          }
        />
      </div>
      <div className="md:p-10 md:space-x-10 px-10 h-screen">
        <div className="md:p-10 md:space-x-10 px-10"></div>
        <h2 className="text-4xl text-center font-bold md:mx-10 md:text-left">
          Uber App Clone
        </h2>
        <p className="text-xl md:my-4 md:w-auto w-[20rem] text-center md:text-left mt-4 text-gray-400">
          This site is a clone of Uber Mobile App, an American mobility as a
          service provider. It is based in San Francisco with operations in
          approximately 72 countries and 10,500 cities.
        </p>

        <div className="h-[6rem] w-[24rem] my-4 md:h-[8rem] items-center space-x-4 cursor-pointer flex justify-start">
          <Image src={Tools2} alt="Tools" />
        </div>
        <div className="flex md:space-x-4 md:justify-start justify-between">
          <a href="https://github.com/AayushMohan/Uber-App-Clone">
            <button className=" p-4 rounded-lg bg-slate-900 font-medium transition hover:ease-in  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300">
              Source Code
            </button>
          </a>

          <a href="https://uber-app-clone-theta.vercel.app/">
            <button className="p-4 rounded-lg px-8 bg-slate-300 text-slate-900 transition hover:ease-in  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-300">
              Live URL
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Uber;
