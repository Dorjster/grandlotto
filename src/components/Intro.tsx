import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <div className="absolute top-[35%] left-[32%] flex flex-col gap-8 ">
      <div>
        <Image src="/IPO.svg" width={530} height={195} alt="ipo" />
      </div>
      <div className="bg-[#1DAFECD9] text-white  text-center rounded-[15px] text-[15px] font-[300] p-2">
        Монголын Хөрөнгийн Бирж дээр{" "}
        <span className="font-[600]  ">
          Хувьцаагаа <br /> гаргахад бэлэн боллоо
        </span>
      </div>
    </div>
  );
};

export default Intro;