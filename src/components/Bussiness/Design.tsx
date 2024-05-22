import Image from "next/image";
import React from "react";
import CompanyIntro from "../CompanyIntro";
import Association from "../Association";
import Lottery from "../Lottery";
import GraphContainer from "../GraphContainer";
import Designe from "./Designe";

const Design = () => {
  return (
    <div className="  relative z-0">
      <Image
        src="image 32.svg"
        width={1}
        height={5}
        alt="bg2"
        className="w-full "
      />
      <div className=" flex justify-center items-center ">
        <div className="bg-white shadow-2xl w-[100%] md:w-[70%] absolute top-[83%] z-10 rounded-[15px] p-4 md:p-20">
          {" "}
          <CompanyIntro
            h1="Бизнес"
            h2="загвар"
            p1="Олон улсын сугалааны салбарт дижитал хувьсгал, технологийн дэвшил хүчээ авч, сугалаат тоглоомууд ч асар хурдтай шинэчлэгдэн өөрчлөгдөж байна. Харин Монгол улсад сугалааг гол төлөв уламжлалт арга барилаар зохион байгуулдаг ба хонжворт сугалааны цөөхөн нэр төрөлтэй байна."
            p2="Тэгвэл Компани нь өөрсдийн хуримтлуулсан туршлага, програм хангамж дээрээ үндэслэн дэлхий жишигт нийцсэн шинэлэг сонирхолтой сугалаануудыг Монголд нэвтрүүлж, нутагшуулж ажиллахаар зорьж байна. "
          />
        </div>
        <div className="bg-[#27438C] shadow-2xl w-[100%] md:w-[70%] absolute top-[400%] md:top-[160%] z-0 rounded-[15px] px-10 py-14">
          <Designe />
        </div>
      </div>
    </div>
  );
};

export default Design;
