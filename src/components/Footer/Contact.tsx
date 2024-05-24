import { Contacts } from '../_db';

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[50px] mt-10'>
      <div className='text-[#27438C] text-[21px] font-[600]'>
        Урьдчилж <span className='text-[#1DAFEC] ml-[5px]'>захиалга өгөх</span>
      </div>
      <div className='flex flex-col gap-[20px] justify-between w-[100%] md:flex-row'>
        {Contacts.map((el, index) => (
          <div key={index} className='flex items-center '>
            <div className='w-[4px] bg-[#1DAFEC] h-[95%] mr-[30px] flex '></div>
            <div className='w-[full] flex flex-col gap-[8px]'>
              <p className='text-black text-[15px] font-[600] w-[full]'>
                {el.company}
              </p>
              <p className='text-black text-[15px]'>{el.web}</p>
              <p className='text-black text-[15px]'>{el.mail}</p>
              <p className='text-black text-[15px]'>{el.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
