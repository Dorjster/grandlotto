import React from "react";
import { Lotteries } from "./_db";
import Image from "next/image";

const Lottery = () => {
  return (
    // <div className="flex flex-col items-center justify-center gap-[41px] ">
    <div>
      <div className='text-white text-[21px] font-[600] text-center'>
        Хамтран ажилласан
        <span className='text-[#1DAFEC]'> сугалаат хөтөлбөр</span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full my-14'>
        {Lotteries.map((el, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div
              className={` flex justify-center items-center mb-[20px] overflow-hidden`}
              //   style={{ backgroundColor: el.color }}
            >
              <Image src={el.image} width={240} height={60} alt='img' />
            </div>
            <div className='text-[#1DAFEC] font-bold'>{el.title}</div>
            <div className='text-[14px] text-center px-[23px] text-white'>
              {el.company}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lottery;
