import { Comments } from '../_db';
import Image from 'next/image';

const Comment = () => {
  return (
    <div className='pt-20 w-full flex flex-col items-center justify-center gap-10 md:gap-20 lg:gap-32'>
      <div className='text-[#27438C] text-2xl md:text-3xl font-semibold'>
        Оролцогч талуудын <span className='text-[#1DAFEC]'>сэтгэгдэл</span>
      </div>
      <div className=' w-full flex flex-col items-center gap-10 md:gap-20'>
        {Comments.map((el, index) => (
          <div
            key={index}
            className={`w-[100%] md:w-[80%] flex flex-col md:flex-row bg-white shadow-xl overflow-hidden ${
              index % 2 === 1
                ? 'md:flex-row-reverse rounded-bl-[14px] rounded-tl-[14px] rounded-tr-[14px] md:rounded-br-[14px] md:rounded-tr-[0px]'
                : 'rounded-bl-[14px] rounded-tr-[14px] rounded-tl-[14px] md:rounded-br-[14px] md:rounded-tl-[14px]'
            }`}
          >
            <div className='relative w-full md:w-1/2'>
              <Image
                src={el.bgImage}
                alt='background image'
                width={560}
                height={560}
                className='w-full h-auto'
              />
              <div
                className={`absolute inset-0 bg-[#1c2f80]/85 flex items-center justify-center ${
                  index % 2 === 1
                    ? 'rounded-br-[0px] rounded-tr-[0px] md:rounded-br-[14px] md:rounded-tr-[14px]'
                    : 'rounded-bl-[0px] rounded-tl-[0px] md:rounded-bl-[14px] md:rounded-tl-[14px]'
                }`}
              >
                <Image
                  src={el.icon}
                  alt='icon'
                  width={247}
                  height={85}
                  className='w-[247px] h-[85px]'
                />
              </div>
            </div>
            <div className='p-10 w-full md:w-[50%] md:gap-[25px] flex flex-col justify-center'>
              <p className='text-[#27438C] text-lg font-semibold mb-2'>
                {el.title}
              </p>
              <p className='text-sm text-black mb-2'>{el.description}</p>
              <p className='text-sm text-black mb-2'>{el.des1}</p>
              <div className='flex md:flex flex-col items-start '>
                <p className='text-sm text-black font-semibold'>{el.author}</p>
                <p className='text-sm text-[#808080] '>{el.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
