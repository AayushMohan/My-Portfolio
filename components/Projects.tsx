import Image from "next/image";
import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import OS from "../Assets/OS.png";

const Projects = () => {
  return (
    <div className="h-screen bg-inherit">
      <h1 className="text-6xl font-semibold text-center py-12">
        Featured Projects
      </h1>
      <div className="overflow-hidden relative h-screen bg-inherit">
        <HoverVideoPlayer
          videoSrc="https://res.cloudinary.com/upwork-fp/video/upload/c_scale,w_1000,q_auto/v1647622694/profile/portfolio/1396689749490266112/sibjvk6arybl7tdsd6pt.mp4"
          className="h-[40rem] w-[40rem] space-x-8"
          pausedOverlay={<Image src={OS} />}
        />
        <h2>OpenSea Clone</h2>
      </div>
    </div>
  );
};

export default Projects;
