import Image from "next/image";
import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import twitter from "../../Assets/Twitter.png";
import Tools3 from "../../Assets/Tools3.svg";

const Twitter = () => {
  return (
    <div className="overflow-hidden pb-20 bg-inherit flex md:flex-row flex-col">
      <div>
        <HoverVideoPlayer
          videoSrc="https://res.cloudinary.com/upwork-fp/video/upload/c_scale,w_1000,q_auto/v1655152527/profile/portfolio/1396689749490266112/fb9c0ttmjzamaoiagxz8.mp4"
          className="md:h-[40rem] md:w-[40rem] md:space-x-2 p-8 transition ease-in duration-150"
          pausedOverlay={
            <Image
              src={twitter}
              width="1100"
              height="650"
              objectFit="fill"
              alt="Twitter"
            />
          }
        />
      </div>
      <div className="md:p-10 md:space-x-10 px-10">
        <h2 className="md:text-4xl text-3xl text-center font-bold md:mx-8 md:text-right">
          Twitter Clone
        </h2>
        <p className="md:text-xl md:my-4 md:px-8 md:text-right mt-4 text-center">
          This site is a clone of Twitter, A social networking platform that
          allows its users to send and read micro-blogs of up to 280-characters
          known as tweets.
        </p>

        <div className="h-[6rem] my-4 md:h-[8rem] items-center space-x-4 cursor-pointer flex justify-start">
          <Image src={Tools3} alt="Tools" />
        </div>
        <div className="flex md:space-x-4 md:justify-start justify-between">
          <a href="https://github.com/AayushMohan/Twitter-2.0-Clone">
            <button className=" p-4 rounded-lg bg-slate-900 font-medium transition hover:ease-in  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300">
              Source Code
            </button>
          </a>

          <a href="https://twitter-2-0-clone.vercel.app/">
            <button className="p-4 rounded-lg px-8 bg-slate-300 text-slate-900 transition hover:ease-in  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-300">
              Live URL
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Twitter;
