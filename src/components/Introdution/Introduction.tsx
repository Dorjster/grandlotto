import Image from "next/image";
import Intro from "./Intro";
import Status from "./Status";

const Introduction = () => {
  return (
    <div className='w-full h-screen '>
      <Image
        src='/image1.png'
        alt='bg'
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%', height: '100%' }}
        className='object-cover'
      />
      <div className=' flex flex-col items-center justify-center'>
        <Intro />
        <Status />
      </div>
    </div>
  );
};

export default Introduction;
