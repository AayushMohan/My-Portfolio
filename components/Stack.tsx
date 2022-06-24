import Image from "next/image";
import React from "react";
import Coding from "../Assets/Coding.svg";

const Stack = () => {
  return (
    <div className="bg-inherit relative flex items-center justify-between">
      <div>
        <Image src={Coding} className="items-center" />
      </div>
      <div></div>
    </div>
  );
};

export default Stack;
