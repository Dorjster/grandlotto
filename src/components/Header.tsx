import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full backdrop-opacity-95  bg-white/90 fixed top-0 z-10 flex items-center justify-between pr-[30px]">
      <div className="w-fit bg-[#27438C] px-[10px] py-[20px] ">
        <Image src="/image 13.svg" width={147} height={51} alt="system" />
      </div>
      <div></div>
      <div>
        <Image src="/w.png" width={421} height={43} alt="as" className="" />
      </div>
    </div>
  );
};

export default Header;
