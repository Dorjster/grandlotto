import Image from "next/image";
import React from "react";
import Intro from "../Intro";
import Status from "../Status";

const Introduction = () => {
  return (
    <div className="w-screen h-screen  relative">
      <Image src="/image 12.svg" layout="fill" alt="bg" />
      <div>
        {" "}
        <Intro />
      </div>
      <div className="flex items-center justify-center">
        {" "}
        <Status />
      </div>
    </div>
  );
};

export default Introduction;
