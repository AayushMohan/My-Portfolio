import Image from "next/image";
import Link from "next/link";
import React from "react";
import AirBnb from "./Projects/AirBnb";
import OpenSea from "./Projects/OpenSea";
import Twitter from "./Projects/Twitter";

const Projects = () => {
  return (
    <div className="h-screen bg-inherit">
      <h1 className="md:text-6xl font-semibold text-center p-12 text-3xl">
        Featured Projects
      </h1>
      <OpenSea />
      <AirBnb />
      <Twitter />
    </div>
  );
};

export default Projects;
