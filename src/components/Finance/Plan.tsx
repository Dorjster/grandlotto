import React from "react";
import { Plans } from "../_db";
import Image from "next/image";

const Plan = () => {
  return (
    <div className='relative'>
      <div className='absolute top-0 left-[67px] w-[1px] h-[100%] border-l border-dashed border-[#27438C]' />
      {Plans.map((el, index) => (
        <div key={index} className='flex flex-col'>
          <div className='flex items-center gap-[30px] mb-[20px] py-[35px] relative'>
            <div className='flex justify-center items-center'>
              <Image src={el.image} alt='a' width={134} height={128} />
            </div>
            <div className='w-[80%] flex flex-col gap-[5px]'>
              <div className='text-[16px] text-[#27438C] font-bold'>
                {el.title}
              </div>
              <div className='text-[13px] text-black'>
                {el.description}
                <div className='mt-[20px]'>
                  Тэгвэл Монгол улсад Гранд системс компани нь анхны хувьцаат
                  компани болж, Монголчууддаа сугалааны компанид хөрөнгө оруулж,
                  тус зах зээлээс өгөөж хүртэх боломжийг олгож байна.
                </div>
              </div>
              {(index === 0 || index === 1 || index === 2) && (
                <hr className='border-b-1 border-dashed border-[#27438C] h-[1px] w-full mt-[62px]' />
              )}
            </div>
          </div>
        </div>
      ))}
      <hr className='border-b-1 border-dashed border-[#27438C] w-[100vw] absolute -left-64' />
    </div>
  );
};

export default Plan;
