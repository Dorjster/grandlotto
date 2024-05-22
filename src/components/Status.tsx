import Image from "next/image";
import React from "react";
import { Statuss } from "./_db";

const Status = () => {
  return (
    <div className="absolute top-[55%] md:top-[90%] w-[70%] bg-[#27438C] py-[35px] rounded-[15px] justify-between px-[20px] z-10">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {Statuss.map((el, index) => (
          <div key={index} className="flex items-center p-4 gap-[18px]">
            <div className="rounded-full flex items-center justify-center bg-[#1DAFEC] p-6">
              <Image src={el.image} width={24} height={24} alt="icon" />
            </div>
            <div>
              <div className="text-white font-[300] text-[15px]">
                {el.title}
              </div>
              <div className="text-white font-[700] text-[15px] ">
                {el.stat}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;
