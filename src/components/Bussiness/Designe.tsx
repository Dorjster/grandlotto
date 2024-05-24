import { Design } from '../_db';
import Image from 'next/image';

const Designe = () => {
  return (
    <div className=''>
      {Design.map((el, index) => (
        <div key={index} className=' flex flex-col'>
          <div className='flex items-center gap-[30px] mb-[20px] py-[10px]'>
            {' '}
            <div className='flex justify-center items-center w-[68px] h-[68px] bg-[#1DAFEC] rounded-full '>
              {' '}
              <Image src={el.icon} alt='a' width={34} height={34} />
            </div>
            <div className='w-[80%] flex flex-col gap-[5px]'>
              <div className='text-[16px] text-white'>{el.title}</div>
              <div className='text-[13px] text-white'>{el.description}</div>
            </div>
          </div>{' '}
          {(index === 0 || index === 1) && (
            <hr className='border-b-1 border-dashed border-[#1DAFEC] h-[1px] w-full py-[10px]' />
          )}
        </div>
      ))}
    </div>
  );
};

export default Designe;
