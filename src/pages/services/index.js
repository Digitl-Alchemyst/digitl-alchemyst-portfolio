import ServiceSlider from '@/c/ServiceSlider';
import Bulb from '@/c/Bulb';
import Layout from '@/c/Layout';
import { motion } from 'framer-motion';
import { fadeIn } from '#/variants';

const Services = () => {
  return (
    <main className=''>
      <Layout className='mt-26 flex justify-center px-6 xl:px-0'>
        <div className='flex w-full flex-col items-center gap-x-8 xl:flex-row ml-2'>
          {/* Text  */}
          <div className='mb-4 flex w-full flex-col text-center lg:text-left xl:mb-0'>
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
              className='mx-auto mb-10 py-5 text-xs md:text-sm lg:mx-0 xl:mx-0 xl:text-lg'
            >
              I am a versatile freelance developer, committed to
              providing a diverse array of services aimed at turning your
              visionary concepts into tangible realities. With a keen artistic
              eye and a dedication to craftsmanship, I stand ready to breathe
              life into your projects, channeling my skills to transform your
              imaginative concepts into impactful and engaging digital
              experiences.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:mr-16'
          >
            {/* Slider  */}
            <ServiceSlider />
          </motion.div>
        </div>
      </Layout>

      <Bulb />
    </main>
  );
};

export default Services;
