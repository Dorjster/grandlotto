import Image from "next/image";
import React from "react";
import CompanyIntro from "../CompanyIntro";
import Plan from "./Plan";

const Finance = () => {
  return (
    <div className="  relative z-0">
      <Image
        src="image 29.svg"
        width={1}
        height={5}
        alt="bg2"
        className="w-full "
      />
      <div className=" flex justify-center items-center ">
        <div className="bg-white shadow-2xl w-[70%] absolute top-[83%] z-10 rounded-[15px] p-20">
          {" "}
          <CompanyIntro
            h1="Зах"
            h2="зээл"
            p1="Сугалааны зах зээл нь боломж ихтэй салбар бөгөөд сугалааны маш сонирхолтой төрлүүд дэлхий дахинд бий болж асар хурдтай хөгжиж байна. Үүнд:"
            p2=""
          />
        </div>
        <div className="  w-[70%] absolute top-[140%] z-0 rounded-[15px] px-10 py-12">
          <Plan />
        </div>
      </div>
    </div>
  );
};

export default Finance;
