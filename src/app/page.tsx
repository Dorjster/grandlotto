"use client";
import React, { useCallback, useEffect, useRef } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import Design from '@/components/Bussiness/Design';
import Comment from '@/components/Comments/Comment';
import Company from '@/components/CompanyIntro/Company';
import Finance from '@/components/Finance/Finance';
import Footer from '@/components/Footer/Footer';
import Introduction from '@/components/Introdution/Introduction';

const Page = () => {
  const searchParams = useSearchParams();
  const section = searchParams?.get('s');

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
  const checkQueryString = useCallback(() => {
    switch (section) {
      case 'intro':
        scrollToRef(introRef);
        break;
      case 'plan':
        scrollToRef(designRef);
        break;
      case 'market':
        scrollToRef(financeRef);
        break;
      case 'comm':
        scrollToRef(commentRef);
        break;
      case 'order':
        scrollToRef(footerRef);
        break;
      default:
        scrollToRef(introRef);
        break;
    }
  }, [section]);

  useEffect(() => {
    checkQueryString();
  }, [checkQueryString]);

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