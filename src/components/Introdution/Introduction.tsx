import Image from "next/image";
import Intro from "./Intro";
import Status from "./Status";

const Introduction = () => {
  return (
    <div className="w-full h-screen ">
      <Image
        src="/image1.png"
        layout="fill"
        alt="bg"
        className="object-cover"
      />
      <div className=" flex flex-col items-center justify-center">
        <Intro />
        <Status />
      </div>
    </div>
  );
};

export default Introduction;
