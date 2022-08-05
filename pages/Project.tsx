import Link from "next/link";
import React from "react";
import AirBnb from "../components/Projects/AirBnb";
import Deliveroo from "../components/Projects/Deliveroo";
import OpenSea from "../components/Projects/OpenSea";
import Twitter from "../components/Projects/Twitter";
import Uber from "../components/Projects/Uber";

const Project = () => {
  return (
    <div className="bg-primary h-screen text-gray-200">
      <h1 className="md:text-6xl font-semibold text-center p-12 pb-20 text-3xl">
        <Link href="/">All Projects</Link>
      </h1>
      <Deliveroo />
      <OpenSea />
      <AirBnb />
      <Twitter />
      <Uber />
    </div>
  );
};

export default Project;
