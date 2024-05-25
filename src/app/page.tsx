"use client";
import Design from '@/components/Bussiness/Design';
import Comment from '@/components/Comments/Comment';
import Company from '@/components/CompanyIntro/Company';
import { useLabelData } from '@/components/Context/Label';
import Finance from '@/components/Finance/Finance';
import Footer from '@/components/Footer/Footer';
import Introduction from '@/components/Introdution/Introduction';
import React, { useCallback, useEffect, useRef } from 'react';

const Page = () => {
  const { label } = useLabelData();

  const designRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const financeRef = useRef<HTMLDivElement>(null);
  const commentRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  const goToSection = useCallback(() => {
    switch (label) {
      case 'introduction':
        scrollToRef(introRef);
        break;
      case 'biznesplan':
        scrollToRef(designRef);
        break;
      case 'market':
        scrollToRef(financeRef);
        break;
      case 'comment':
        scrollToRef(commentRef);
        break;
      case 'order':
        scrollToRef(footerRef);
        break;
      default:
        break;
    }
  }, [label]);

  useEffect(() => {
    goToSection();
  }, [goToSection]);

  return (
    <div>
      <div ref={introRef}>
        <Introduction />
        <Company />
      </div>
      <div ref={designRef}>
        <Design />
      </div>
      <div ref={financeRef}>
        <Finance />
      </div>
      <div ref={commentRef}>
        <Comment />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
