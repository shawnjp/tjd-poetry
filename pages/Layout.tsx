import React from 'react';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import PrideFlag, { gradient } from '../components/inclusivePrideFlagColors'; 
import NavBar from '../components/NavBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (    
    <div className={inter.className}>
      <PrideFlag style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
      <NavBar /> 
      {children}
    </div>
  );
}