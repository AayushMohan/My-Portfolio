import Image from "next/image";
import React from "react";
import AirBnb from "./Projects/AirBnb";
import OpenSea from "./Projects/OpenSea";
import Twitter from "./Projects/Twitter";
import wave3 from "../Assets/wave3.svg";
import Footer from "./Footer";

const Projects = () => {
  return (
    <div className="h-screen bg-inherit">
      <h1 className="md:text-6xl font-semibold text-center p-12 pb-0 text-3xl">
        Featured Projects
      </h1>
      <OpenSea />
      <AirBnb />
      <Twitter />
      <div className="bg-inherit">
        <Image src={wave3} />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
