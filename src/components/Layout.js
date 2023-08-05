/* eslint-disable react/function-component-definition */

import TopLeftImg from './TopLeftImg';
import Nav from './Nav';
import Header from './Header';
import Head from 'next/head';
import { Sora } from 'next/font/google';

// Font Configuration
const sora = Sora({
  subsets: ['latin'],
  variable: '--fonts-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export default function RootLayout({ children }) {
  return (
    <div
      className={`page relative bg-site bg-cover bg-no-repeat text-slate-300 ${sora.variable} font-sora`}
    >
      <Head>
        <title>Digitl Alchemyst Steven Watkins</title>
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />

        <meta
          property='og:title'
          content='Digitl Alchemyst Steven Watkins'
          key='title'
        />
      </Head>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
}
