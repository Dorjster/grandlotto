import Intro from "@/components/Intro";
import Status from "@/components/Status";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
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
      <div className="w-screen relative z-0">
        <Image
          src="image 14.svg"
          width={1}
          height={5}
          alt="bg2"
          className="w-full "
        />
        <div className="w-screen flex justify-center items-center ">
          <div className="bg-white shadow-xl w-[70%] absolute mb-[10%] z-10 rounded-[15px]"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
