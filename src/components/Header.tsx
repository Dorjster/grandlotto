"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useLabelData } from "./Context/Label";
import { IoIosMenu } from "react-icons/io";

type NavigationItem = {
  label: string;
};

const navigationItems: NavigationItem[] = [
  { label: "Танилцуулга" },
  { label: "Загвар" },
  { label: "Зах зээл" },
  { label: "Сэтгэгдэл" },
  { label: "Захиалга" },
];

const Header = () => {
  const { setLabel } = useLabelData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize window width
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleGet = (data: string) => {
    setLabel(data);

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

        <nav className="hidden md:flex md:gap-[15px]">
          {navigationItems.map((item, index) => (
            <button
              onClick={() => handleGet(item.label)}
              key={index}
              className="text-black hover:text-blue-700"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {isMenuOpen && windowWidth <= 768 && (
          <nav className="fixed top-[92px] left-0 w-full bg-white/90 p-4 flex flex-col space-y-4 md:hidden">
            {navigationItems.map((item, index) => (
              <button
                onClick={() => handleGet(item.label)}
                key={index}
                className="text-black hover:text-blue-700"
              >
                {item.label}
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
