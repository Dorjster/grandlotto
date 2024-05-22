import Image from "next/image";
import React from "react";
import CompanyIntro from "../CompanyIntro";
import Association from "../Association";
import Lottery from "../Lottery";
import GraphContainer from "../GraphContainer";

const Company = () => {
  return (
    <div className="relative z-0">
      <Image
        src="image 14.svg"
        width={1}
        height={5}
        alt="bg2"
        className="w-full"
      />
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-2xl w-[100%] md:w-[70%] absolute top-[75%] z-10 rounded-[15px] p-4 md:p-20">
          <CompanyIntro
            h1="Компанийн"
            h2="танилцуулга"
            p1="Гранд Системс нь 2018 онд байгуулагдсан Сангийн Яамны тусгай зөвшөөрөлтэй сугалааны компани юм. Компани нь үндэсний томоохон үйлдвэрлэгч аж ахуй нэгжүүдтэй хамтран ажиллаж, тэдгээрийн борлуулалтыг нэмэгдүүлэх зорилгоор сугалаа зохион байгуулдаг."
            p2="Өнгөрсөн хугацаанд Компани нь сугалааг технологитой хослуулан 10 орчим компанийн 500 гаруй сая төгрөгийн шагналын сантай сугалааг зохион байгуулж ажилласан. "
          />
          <hr className="border-1.5 border-dotted border-gray-400 md:mb-[30px] mb-[100px]" />
          <Association />
        </div>
        <div className="bg-[#27438C] shadow-2xl w-[100%] md:w-[70%] absolute top-[1530%] md:top-[273%] z-0 rounded-[15px] p-20 ">
          <Lottery />
        </div>
        <div className="absolute top-[2400%] md:top-[400%] w-[90%] md:w-[70%] z-20">
          <GraphContainer />
        </div>
      </div>
    </div>
  );
};

export default Company;
