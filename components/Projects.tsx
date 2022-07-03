import Image from "next/image";
import React from "react";
import AirBnb from "./Projects/AirBnb";
import OpenSea from "./Projects/OpenSea";
import Twitter from "./Projects/Twitter";
import wave3 from "../Assets/wave3.svg";
import Footer from "./Footer";
import Link from "next/link";
import Project from "../pages/Project";

const Projects = () => {
  return (
    <div className="h-screen bg-inherit">
      <h1 className="md:text-6xl font-semibold text-center p-12 pb-20 text-3xl">
        Featured Projects
      </h1>
      <OpenSea />
      <AirBnb />
      <Twitter />
      <div className="bg-inherit text-center">
        <Link href="/Project">
          <button className="p-4 px-8  rounded-lg bg-slate-900 font-medium transition hover:ease-in  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300">
            Show More
          </button>
        </Link>
      </div>
      <div className="bg-inherit">
        <Image src={wave3} alt="wave" />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
