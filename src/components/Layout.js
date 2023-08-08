/* eslint-disable react/function-component-definition */

import TopLeftImg from './TopLeftImg';
import Nav from './Nav';
import Header from './Header';
import Head from 'next/head';
import { Sora, Montserrat, Poppins } from 'next/font/google';

// Font Configuration
const sora = Sora({
  subsets: ['latin'],
  variable: '--fonts-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--fonts-mont',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--fonts-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export default function RootLayout({ children }) {
  return (
    <main
      className={`page relative bg-site bg-cover bg-no-repeat text-slate-300 ${montserrat.variable} font-mont scrollbar-hide`}
    >
      <TopLeftImg />
      
      <Header />
      <div className='bg-site bg-cover'>{children}</div>
    </main>
  );
}
