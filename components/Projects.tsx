import Image from "next/image";
import React from "react";
import AirBnb from "./Projects/AirBnb";
import OpenSea from "./Projects/OpenSea";

const Projects = () => {
  return (
    <div className="h-screen bg-inherit">
      <h1 className="md:text-6xl font-semibold text-center p-12 text-3xl">
        Featured Projects
      </h1>
      <OpenSea />
      <AirBnb />
    </div>
  );
};

export default Projects;
