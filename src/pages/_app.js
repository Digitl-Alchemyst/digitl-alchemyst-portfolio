import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { Sora } from 'next/font/google';

// Metadata
export const metadata = {
  title: 'Digitl Alchemyst Steven Watkins',
  description:
    'Web Application Development Portfolio, for Steven Watkins aka Digitl Alchemyst',
};

// Font Configuration
const sora = Sora({
  subsets: ['latin'],
  variable: '--fonts-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

 const App = ({ Component, pageProps }) => {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}
 export default App;