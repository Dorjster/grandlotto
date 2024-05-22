import Image from "next/image";
import React from "react";
import CompanyIntro from "../CompanyIntro";
import Association from "../Association";
import Lottery from "../Lottery";
import GraphContainer from "../GraphContainer";
import Contact from "./Contact";
import Instruction from "./Instruction";

const Footer = () => {
  return (
    <div className="  relative z-0">
      <Image
        src="image 23.svg"
        width={1}
        height={5}
        alt="bg2"
        className="w-full "
      />
      <div className=" flex justify-center items-center ">
        <div className="bg-white shadow-2xl w-[70%] absolute top-[83%] z-10 rounded-[15px] px-[100px] py-20">
          <Contact />
        </div>
        <div className="bg-[#27438C] shadow-2xl w-[70%] absolute top-[160%] z-0 rounded-[15px] px-10 py-14">
          <Instruction />
        </div>
      </div>
    </div>
  );
};

export default Footer;
