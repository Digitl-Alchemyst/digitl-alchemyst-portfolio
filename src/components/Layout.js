/* eslint-disable react/function-component-definition */


import TopLeftImg from "./TopLeftImg";
import Nav from "./Nav";
import Header from "./Header";

import { Sora } from 'next/font/google';



// Font Configuration
const sora = Sora({
  subsets: ['latin'],
  variable: '--fonts-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});


export default function RootLayout({ children }) {
  return (
    
        <div className={`page relative bg-site bg-cover bg-no-repeat text-slate-300 ${sora.variable} font-sora`}>
          <TopLeftImg />
          <Nav />
          <Header />
          {children}
        </div>
      
  );
}
