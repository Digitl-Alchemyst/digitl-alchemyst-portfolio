import ServiceSlider from '@/c/ServiceSlider';
import Bulb from '@/c/Bulb';
import Layout from '@/c/Layout';
import { motion } from 'framer-motion';
import { fadeIn } from '#/variants';

const Services = () => {
  return (
    <div className='flex h-[100vh] w-full items-center justify-center'>
      <Layout className='container mt-26 flex justify-center px-6 xl:px-0'>
        <div className='flex w-full flex-col items-center gap-x-8 xl:flex-row'>
          {/* Text  */}
          <div className='mb-4 flex w-full flex-col text-center lg:text-left xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-8'
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
              I am a versatile freelance developer, offering a diverse range of
              services to turn your visions into reality. As a creative expert,
              I am here to bring your projects to life, utilizing my skills and
              dedication to transform your creative ideas into impactful digital
              experiences.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full'
          >
            {/* Slider  */}
            <ServiceSlider />
          </motion.div>
        </div>
      </Layout>

      <Bulb />
    </div>
  );
};

export default Services;
