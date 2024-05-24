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
    <div className='py-20'>
      <Image
        src='image 23.svg'
        width={1}
        height={5}
        alt='bg2'
        className='w-full'
      />
      {/* <div>
        <div className='flex justify-center items-center'> */}

      {/* <div className='grid'>
        <div className='container mx-auto px-20 shadow-2xl  bg-white p-4 rounded-[15px] w-[100%] -mt-32 pt-10'>
          <div className='bg-white shadow-2xl w-full md:w-[60%] md:left-[5%]  top-[83%] z-10 rounded-[15px] px-[5%] md:px-[100px] py-10 md:py-20'>
            <Contact />
          </div>
          <div className='bg-[#27438C] shadow-2xl w-full md:w-[60%] md:left-[5%]  top-[420%] md:top-[162%] z-0 rounded-[15px] px-5 md:px-10 py-8 md:py-14'>
            <Instruction />
          </div>
        </div>
        <div className='bg-white  shadow-xl w-full md:w-[25%] md:left-[68%] absolute top-[685%] md:top-[83%] z-10 rounded-[15px] px-[5%] md:px-[30px] py-4 md:py-4'>
          <Registration />
        </div>
      </div> */}
      <div className='grid'>
        <div className='container mx-auto px-10 shadow-2xl bg-white p-4 rounded-[15px] w-[100%] -mt-32 py-10   '>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 '>
            <div className=' md:col-span-2 lg:col-span-2'>
              <div className='bg-[#27438C] shadow-2xl w-full  rounded-[15px] py-10'>
                <Instruction />
              </div>
              <Contact />
            </div>
            <div className='pl-2 lg:col-span-1 md:col-span-2'>
              <Registration />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
