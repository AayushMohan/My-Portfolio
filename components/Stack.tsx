import Image from "next/image";
import React from "react";
import Coding from "../Assets/Coding.svg";

const Stack = () => {
  return (
    <div className="bg-inherit relative flex ">
      <div>
        <Image src={Coding} />
      </div>
    </div>
  );
};

export default Stack;
