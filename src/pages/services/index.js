import ServiceSlider from '@/c/ServiceSlider';
import Bulb from '@/c/Bulb';
import Circles from '@/c/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '#/variants';

const Services = () => {
  return (
    <div className='flex h-[100vh] items-center bg-primary/30 py-36'>
      {/* <Circles /> */}
      <div className='container mx-auto'>
        <div className='flex flex-col gap-x-8 xl:flex-row'>
          {/* Text  */}
          <div className='mb-4 flex flex-col text-center lg:text-left xl:mb-0 xl:w-[30vw]'>
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
              className='mx-auto mb-4 max-w-[400px] lg:mx-0'
            >
              These are the services I offer and a paragraph about them.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'
          >
            {/* Slider  */}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
