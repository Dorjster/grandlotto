type Props = {
  h1: String;
  h2: String;
  p1: String;
  p2: String;
};

const CompanyIntro = ({ h1, h2, p1, p2 = ' ' }: Props) => {
  return (
    <div className='flex flex-col items-center justify-center gap-[24px] mb-[30px]'>
      <div className='text-[#27438C] text-[21px] font-[600]'>
        {h1} <span className='text-[#1DAFEC] ml-[5px]'>{h2}</span>
      </div>
      <div className='text-[15px] '>
        {p1} <br />
        <div className='mt-[20px] pr-[30px] '>{p2}</div>
      </div>
    </div>
  );
};

export default CompanyIntro;
