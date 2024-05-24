import Image from "next/image";

const Intro = () => {
  return (
    <div className="px-[30px] md:px-[10px] absolute top-[25%]  flex flex-col gap-8 md:top-[25%]  ">
      <div>
        <Image
          src="/IPO.svg"
          width={530}
          height={195}
          alt="ipo"
          layout="responsive"
        />
      </div>
      <div className="w-full md:text-[15px] md:p-2 bg-[#1DAFECD9] text-white text-center rounded-[15px] text-[13px] font-[300] p-1">
        Монголын Хөрөнгийн Бирж дээр{" "}
        <span className="font-[600]">
          Хувьцаагаа <br /> гаргахад бэлэн боллоо
        </span>
      </div>
    </div>
  );
};

export default Intro;
