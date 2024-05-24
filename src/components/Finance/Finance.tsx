import Image from "next/image";
import CompanyIntro from "../CompanyIntro";
import Plan from "./Plan";

const Finance = () => {
  return (
    <div className="pt-20  z-0">
      <Image
        src="image 29.svg"
        width={1}
        height={5}
        alt="bg2"
        className="w-full "
      />

      <div className="grid">
        <div className="container mx-auto px-20 shadow-2xl  bg-white p-4 rounded-[15px] w-[100%] -mt-32 pt-10">
          <CompanyIntro
            h1="Зах"
            h2="зээл"
            p1="Сугалааны зах зээл нь боломж ихтэй салбар бөгөөд сугалааны маш сонирхолтой төрлүүд дэлхий дахинд бий болж асар хурдтай хөгжиж байна. Үүнд:"
            p2=""
          />
        </div>
        {/* <div className='w-[100%] md:w-[70%]  top-[230%] md:top-[140%] z-0 rounded-[15px] px-1 md:px-10 py-12'> */}
        <div className=" container mx-auto px-20 -mt-4 -z-10 pt-10 rounded-b-[15px]">
          <Plan />
        </div>
      </div>
    </div>
  );
};

export default Finance;
