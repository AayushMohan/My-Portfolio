import Image from "next/image";
import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import Airbnb from "../../Assets/Airbnb.png";
import Tools2 from "../../Assets/Tools2.svg";

const AirBnb = () => {
  return (
    <div className="overflow-hidden h-screen bg-inherit flex md:flex-row-reverse flex-col">
      <div>
        <HoverVideoPlayer
          videoSrc="https://res.cloudinary.com/upwork-fp/video/upload/c_scale,w_1000,q_auto/v1649101379/profile/portfolio/1396689749490266112/gdwtrazngmuopaq7wjdi.mov"
          className="md:h-[40rem] md:w-[40rem] md:space-x-2 p-8 transition ease-in duration-150"
          pausedOverlay={
            <Image src={Airbnb} width="1100" height="650" objectFit="fill" />
          }
        />
      </div>
      <div className="md:p-10 md:space-x-10  px-10">
        <h2 className="text-4xl text-center font-bold md:mx-10 md:text-left">
          Airbnb Clone
        </h2>
        <p className="text-xl md:my-4 md:w-auto w-[20rem] text-center md:text-left mt-4">
          This site is a clone of Airbnb, an American company that operates an
          online marketplace for lodging, primarily homestays for vacation
          rentals, and tourism activities. Based in San Francisco, California,
          the platform is accessible via website and mobile app.
        </p>

        <div className="h-[6rem] w-[24rem] my-4 md:h-[8rem] items-center space-x-4 cursor-pointer flex justify-start">
          <Image src={Tools2} />
        </div>
        <div className="flex md:space-x-4 md:justify-start justify-between">
          <a href="https://github.com/AayushMohan/Airbnb-Clone">
            <button className=" p-4 rounded-lg bg-slate-900 font-medium transition hover:ease-in  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300">
              Source Code
            </button>
          </a>

          <a href="https://airbnb-clone-pink-rho.vercel.app/">
            <button className="p-4 rounded-lg px-8 bg-slate-300 text-slate-900 transition hover:ease-in  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-300">
              Live URL
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AirBnb;
