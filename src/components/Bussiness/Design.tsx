import Image from "next/image";
import CompanyIntro from "../CompanyIntro";
import Designe from "./Designe";

const Design = () => {
  return (
    <div className="pt-20 overflow-hidden">
      <Image
        src="image 32.svg"
        width={1}
        height={5}
        alt="bg2"
        className="w-full rounded-[15px]"
      />

      <div className="grid">
        <div className="container mx-auto px-10 md:px-20 shadow-2xl bg-white p-4 rounded-[15px] -mt-32 pt-10">
          <CompanyIntro
            h1="Бизнес"
            h2="загвар"
            p1="Олон улсын сугалааны салбарт дижитал хувьсгал, технологийн дэвшил хүчээ авч, сугалаат тоглоомууд ч асар хурдтай шинэчлэгдэн өөрчлөгдөж байна. Харин Монгол улсад сугалааг гол төлөв уламжлалт арга барилаар зохион байгуулдаг ба хонжворт сугалааны цөөхөн нэр төрөлтэй байна."
            p2="Тэгвэл Компани нь өөрсдийн хуримтлуулсан туршлага, програм хангамж дээрээ үндэслэн дэлхий жишигт нийцсэн шинэлэг сонирхолтой сугалаануудыг Монголд нэвтрүүлж, нутагшуулж ажиллахаар зорьж байна. "
          />
        </div>

        <div className="bg-[#27438C] container mx-auto px-4 md:px-20 -mt-3 -z-10 pt-10 rounded-b-[15px]">
          <Designe />
        </div>
      </div>
    </div>
  );
};

export default Design;
