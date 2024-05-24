import Image from "next/image";
import React from "react";
import Intro from "../Intro";
import Status from "../Status";

const Introduction = () => {
  return (
    <div className='w-full h-screen relative'>
      <Image
        src='/image1.png'
        layout='fill'
        alt='bg'
        className='object-cover'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center'>
        <Intro />

        <Status />
      </div>
    </div>
  );
};

export default Introduction;
