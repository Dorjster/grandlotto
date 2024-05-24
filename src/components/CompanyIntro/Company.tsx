import Image from "next/image";
import CompanyIntro from "../CompanyIntro";
import Association from "./Association";
import Lottery from "./Lottery";
import GraphContainer from "./GraphContainer";

const Company = () => {
  return (
    <div className="">
      <Image
        src="/image 14.svg"
        width={1}
        height={5}
        alt="bg2"
        className="w-full"
      />
      <div className="grid">
        <div className="container mx-auto px-4 md:px-10 lg:px-20 shadow-2xl bg-white p-4 rounded-[15px] w-full -mt-20 md:-mt-32 pt-10 md:pt-20">
          <CompanyIntro
            h1="Компанийн"
            h2="танилцуулга"
            p1="Гранд Системс нь 2018 онд байгуулагдсан Сангийн Яамны тусгай зөвшөөрөлтэй сугалааны компани юм. Компани нь үндэсний томоохон үйлдвэрлэгч аж ахуй нэгжүүдтэй хамтран ажиллаж, тэдгээрийн борлуулалтыг нэмэгдүүлэх зорилгоор сугалаа зохион байгуулдаг."
            p2="Өнгөрсөн хугацаанд Компани нь сугалааг технологитой хослуулан 10 орчим компанийн 500 гаруй сая төгрөгийн шагналын сантай сугалааг зохион байгуулж ажилласан. "
          />
          <hr className="border-1.5 border-dotted border-gray-400 md:mb-10 mb-20" />
          <Association />
        </div>

        <div className="bg-[#27438C] container mx-auto px-4 md:px-10 lg:px-20 pt-20 rounded-b-[15px]">
          <Lottery />
        </div>
        <div className="container pt-20 mx-auto px-4 md:px-10 lg:px-20">
          <GraphContainer />
        </div>
      </div>
    </div>
  );
};

export default Company;
