import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Гранд системс',
  description: 'Grandsystems'
  // icons: {
  //   icon: "/IPO.ico",
  // },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link
        rel='icon'
        href='/icon?<generated>'
        type='image/png'
        sizes='32x32'
      />
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
