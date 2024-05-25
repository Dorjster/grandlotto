import Image from "next/image";

import Contact from "./Contact";
import Instruction from "./Instruction";
import Registration from "./Registration";

const Footer = () => {
  return (
    <div className="py-20">
      <Image
        src="image 23.svg"
        width={1}
        height={5}
        alt="bg2"
        className="w-full"
      />

      <div className="grid">
        <div className="container mx-auto px-10 shadow-2xl bg-white p-4 rounded-[15px] w-[100%] -mt-32 py-10   ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
            <div className=" md:col-span-2 lg:col-span-2">
              <div className="bg-[#27438C] shadow-2xl w-full  rounded-[15px] py-10">
                <Instruction />
              </div>
              <Contact />
            </div>
            <div className="pl-2 lg:col-span-1 md:col-span-2">
              <Registration />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
