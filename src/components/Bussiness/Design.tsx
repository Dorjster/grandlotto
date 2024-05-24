import Image from 'next/image';
import CompanyIntro from '../CompanyIntro';
import Designe from './Designe';

const Design = () => {
  return (
    <div className='  relative z-0 pt-20'>
      <Image
        src='image 32.svg'
        width={1}
        height={5}
        alt='bg2'
        className='w-full '
      />

      <div className='grid'>
        <div className='container mx-auto px-20 shadow-2xl  bg-white p-4 rounded-[15px] w-[100%] -mt-32 pt-10'>
          <CompanyIntro
            h1='Бизнес'
            h2='загвар'
            p1='Олон улсын сугалааны салбарт дижитал хувьсгал, технологийн дэвшил хүчээ авч, сугалаат тоглоомууд ч асар хурдтай шинэчлэгдэн өөрчлөгдөж байна. Харин Монгол улсад сугалааг гол төлөв уламжлалт арга барилаар зохион байгуулдаг ба хонжворт сугалааны цөөхөн нэр төрөлтэй байна.'
            p2='Тэгвэл Компани нь өөрсдийн хуримтлуулсан туршлага, програм хангамж дээрээ үндэслэн дэлхий жишигт нийцсэн шинэлэг сонирхолтой сугалаануудыг Монголд нэвтрүүлж, нутагшуулж ажиллахаар зорьж байна. '
          />
        </div>
        {/* <div className='bg-[#27438C] shadow-2xl w-[100%] md:w-[70%]  top-[400%] md:top-[160%] z-0 rounded-[15px] px-10 py-14'> */}
        <div className='bg-[#27438C] container mx-auto px-20 -mt-3 -z-10 pt-10 rounded-b-[15px]'>
          <Designe />
        </div>
      </div>
    </div>
  );
};

export default Design;
