"use client";
import React, { useState, useEffect } from 'react';
import { useLabelData } from './Context/Label';
import { IoIosMenu } from 'react-icons/io';
import { useRouter } from 'next/router';
import Image from "next/image";

type NavigationItem = {
  id: number;
  label: string;
  name: string;
};

const navigationItems: NavigationItem[] = [
  { id: 1, name: 'Танилцуулга', label: 'introduction' },
  { id: 2, name: 'Загвар', label: 'biznesplan' },
  { id: 3, name: 'Зах зээл', label: 'market' },
  { id: 4, name: 'Сэтгэгдэл', label: 'comment' },
  { id: 5, name: 'Захиалга', label: 'order' }
];

const Header = () => {
  const { setLabel } = useLabelData();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleGet = (label: string) => {
    setLabel(label);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="w-full backdrop-opacity-95 bg-white/90 fixed top-0 z-20 flex items-center justify-between pr-[30px]">
        <div className="w-fit bg-[#27438C] px-[10px] py-[20px]">
          <Image src="/image 13.svg" width={147} height={51} alt="system" />
        </div>

        <button
          onClick={toggleMenu}
          className="text-black  hover:text-blue-700 md:hidden"
        >
          <IoIosMenu size={30} />
        </button>

        <nav className=" hidden md:flex md:gap-[15px] px-[30px] ">
          {navigationItems.map((item) => (
            <button
              onClick={() => handleGet(item.label)}
              key={item.id}
              className="text-slate-600 hover:text-blue-700 font-semibold"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {isMenuOpen && windowWidth <= 768 && (
          <nav className="fixed top-[92px] left-0 w-full bg-white/90 p-4 flex flex-col space-y-4 md:hidden">
            {navigationItems.map((item) => (
              <button
                onClick={() => handleGet(item.label)}
                key={item.id}
                className="text-black hover:text-blue-700 font-[700]"
              >
                {item.name}
              </button>
            ))}
          </nav>
        )}

        <div className="hidden lg:flex md:flex">
          <Image src="/w.png" width={421} height={43} alt="as" />
        </div>
      </div>
    </div>
  );
};

export default Header;
