import { Associations } from './_db';
import Image from 'next/image';

const Association = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[41px] mb-[30px]'>
      <div className='text-[#27438C] text-[21px] font-[600]'>
        Хамтран ажилласан<span className='text-[#1DAFEC]'> байгууллага</span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full'>
        {Associations.map((el, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div
              className={`rounded-full border border-[#27438C] flex justify-center items-center mb-[20px] overflow-hidden w-[103px] h-[103px]`}
              style={{ backgroundColor: el.color }}
            >
              <Image src={el.image} width={60} height={60} alt='img' />
            </div>
            <div className='text-[#27438C] font-bold'>{el.company}</div>
            <div className='text-[14px] text-center px-[23px] text-[#797979]'>
              {el.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Association;
