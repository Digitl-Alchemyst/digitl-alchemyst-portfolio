import '@/styles/globals.css';
import Layout from '@/components/Layout';
import Transition from '@/components/Transition';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import Nav from '@/components/Nav';
import Header from '@/components/Header';
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

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Digitl Alchemyst | Steven Watkins</title>
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
          name='description'
          content='Developer portfolio for Steven Watkins aka Digitl Alchemyst'
        />
        <meta
          property='og:title'
          content='Digitl Alchemyst Steven Watkins'
          key='title'
        />
      </Head>


      <main className={`${montserrat.variable} page font-mont `}>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route}>
            <Transition />
            <Nav />
            <Header />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </main>

    </>
  );
};
export default App;
