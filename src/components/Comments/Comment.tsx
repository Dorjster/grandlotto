import React from "react";
import { Comments } from "../_db";
import Image from "next/image";

const Comment = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[50px]">
      <div className="text-[#27438C] text-[21px] font-[600]">
        Оролцогч талуудын{" "}
        <span className="text-[#1DAFEC] ml-[5px]">сэтгэгдэл</span>
      </div>
      <div className="mt-4 flex flex-col items-center gap-[50px] ">
        {Comments.map((el, index) => (
          <div
            key={index}
            className={`flex w-[80%] bg-white gap-[50px] shadow-xl rounded-[14px] overflow-hidden
            ${index % 2 === 1 ? "flex-row-reverse" : " "}`}
          >
            <div className="relative w-[50%]">
              <Image
                src={el.bgImage}
                alt="background image"
                width={560}
                height={560}
                className={`w-full h-auto saturate-200  `}
              />
              <div
                className={`absolute top-0 left-0 right-0 bottom-0 bg-[#1c2f80]/85 flex items-center justify-center 
                ${
                  index % 2 === 1
                    ? "rounded-tr-[14px] rounded-br-[14px]"
                    : "rounded-bl-[14px] rounded-tl-[14px]"
                }
                `}
              >
                <Image
                  src={el.icon}
                  alt="icon"
                  width={247}
                  height={85}
                  className="w-[247px] h-[85px]"
                />
              </div>
            </div>
            <div className="py-4 w-[40%] flex flex-col gap-[50px] justify-center ">
              <p className="text-[#27438C] text-[16px] font-[500]">
                {el.title}
              </p>
              <p className="text-sm text-black">{el.description}</p>
              <p className="text-sm text-black">{el.des1}</p>
              <div>
                <p className="text-sm text-black font-[700]">{el.author}</p>
                <p className="text-sm text-[#808080]">{el.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
