import ServiceSlider from '@/c/ServiceSlider';
import Bulb from '@/c/Bulb';
import Layout from '@/c/Layout';
import { motion } from 'framer-motion';
import { fadeIn } from '#/variants';
import Head from 'next/head';

const Services = () => {
  return (
    <>
      <Head>
        <title>Steven Watkins | My Services</title>
      </Head>

      <main className=''>
        <Layout className='w-screen'>
          <Bulb />

          {/* Page Content */}
          <div className='flex h-full flex-col items-center gap-x-6 lg:flex-row xl:justify-center'>
            {/* Text  */}
            <div className='flex flex-col justify-center'>
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2'
              >
                My Services <span className='text-accent'>.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='mx-auto mb-10 max-w-[500px] rounded-lg border border-solid border-accent2/30 bg-slate-700/80 px-3 py-5 text-xs text-sky-300 md:text-sm xl:mx-0 xl:mb-10 xl:max-w-[850px] xl:px-4 xl:text-base'
              >
                I am a versatile freelance developer, committed to providing a
                diverse array of services aimed at turning your visionary
                concepts into tangible realities. With a keen artistic eye and a
                dedication to craftsmanship, I stand ready to breathe life into
                your projects, channeling my skills to transform your
                imaginative concepts into impactful and engaging digital
                experiences.
              </motion.p>
            </div>

            {/* Slider  */}
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='flex w-full xl:max-w-none'
            >
              <ServiceSlider />
            </motion.div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Services;
