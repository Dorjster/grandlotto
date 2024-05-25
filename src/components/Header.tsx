"use client";

import React, { useState, useEffect } from 'react';
import { IoIosMenu } from 'react-icons/io';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type NavigationItem = {
  id: number;
  label: string;
  name: string;
};

const navigationItems: NavigationItem[] = [
  { id: 1, name: 'Танилцуулга', label: 'intro' },
  { id: 2, name: 'Загвар', label: 'plan' },
  { id: 3, name: 'Зах зээл', label: 'market' },
  { id: 4, name: 'Сэтгэгдэл', label: 'comm' },
  { id: 5, name: 'Захиалга', label: 'order' }
];

const Header = () => {
  // const { setLabel } = useLabelData();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const section = searchParams?.get('s');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleGet = (label: string) => {
    // setLabel(label);
    setIsMenuOpen(false);

    if (searchParams?.entries() !== null) {
      const current = new URLSearchParams(
        Array.from(searchParams?.entries() || [])
      );
      if (!label) {
        current.delete('s');
      } else {
        current.set('s', label);
      }

      // cast to string
      const search = current.toString();
      // or const query = `${'?'.repeat(search.length && 1)}${search}`;
      const query = search ? `?${search}` : '';
      router.push(`${pathname}${query}`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='relative'>
      <div className='w-full backdrop-opacity-95 bg-white/90 fixed top-0 z-20 flex items-center justify-between pr-[30px]'>
        <div className='w-fit bg-[#27438C] px-[10px] py-[20px]'>
          <Image
            src='/image 13.svg'
            width={147}
            height={0}
            alt='system'
            onClick={() => handleGet('intro')}
            className=' cursor-pointer'
          />
        </div>

        <button
          onClick={toggleMenu}
          className='text-black  hover:text-blue-700 md:hidden'
        >
          <IoIosMenu size={30} />
        </button>

        <nav className=' hidden md:flex md:gap-[15px] px-[30px] '>
          {navigationItems.map((item) => (
            <button
              onClick={() => handleGet(item.label)}
              key={item.id}
              className={`text-slate-600  font-semibold py-4 px-4 rounded-full leading-4 mt-1 ${
                section === item.label ||
                (item.label === 'intro' && section === null)
                  ? 'bg-blue-500 font-bold text-white'
                  : ''
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {isMenuOpen && windowWidth <= 768 && (
          <nav className='fixed top-[92px] left-0 w-full bg-white/90 p-4 flex flex-col space-y-4 md:hidden'>
            {navigationItems.map((item, index) => (
              <button
                onClick={() => handleGet(item.label)}
                key={index}
                className='text-black hover:text-blue-700 font-[700]'
              >
                {item.name}
              </button>
            ))}
          </nav>
        )}

        <div className='hidden lg:flex md:flex'>
          <Image src='/w.png' width={421} height={43} alt='as' />
        </div>
      </div>
    </div>
  );
};

export default Header;
