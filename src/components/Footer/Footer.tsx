import Image from "next/image";
import React from "react";
import CompanyIntro from "../CompanyIntro";
import Association from "../Association";
import Lottery from "../Lottery";
import GraphContainer from "../GraphContainer";
import Contact from "./Contact";
import Instruction from "./Instruction";
import Registration from "../Registration";

const Footer = () => {
  return (
    <div className="relative z-0">
      <Image
        src="image 23.svg"
        width={1}
        height={5}
        alt="bg2"
        className="w-full"
      />
      <div>
        <div className="flex justify-center items-center">
          <div className="bg-white shadow-2xl w-full md:w-[60%] md:left-[5%] absolute top-[83%] z-10 rounded-[15px] px-[5%] md:px-[100px] py-10 md:py-20">
            <Contact />
          </div>
          <div className="bg-[#27438C] shadow-2xl w-full md:w-[60%] md:left-[5%] absolute top-[420%] md:top-[155%] z-0 rounded-[15px] px-5 md:px-10 py-8 md:py-14">
            <Instruction />
          </div>
        </div>
        <div className="bg-white h-[128%] shadow-xl w-full md:w-[25%] md:left-[68%] absolute top-[83%] z-10 rounded-[15px] px-[5%] md:px-[30px] py-4 md:py-4">
          <Registration />
        </div>
      </div>
    </div>
  );
};

export default Footer;
