import TestimonialSlider from '@/c/TestimonialSlider';
import { motion } from 'framer-motion';
import { fadeIn } from '#/variants';
import Layout from '@/c/Layout'

const Testimonials = () => {
  return (
    <main className='h-[100vh] '>
      <Layout className='w-screen'>
        <div className=' mx-auto flex h-full flex-col justify-center items-center mt-18 lg:mt-4'>

        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 mb-8 xl:mb-0 mt-6'
        >
          What <span className='text-accent'>clients</span> are{' '}
          <span className='text-accent2'>saying.</span>
        </motion.h2>
        <motion.div
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='pb-20 xl:pr-22'
        >
          <TestimonialSlider />
        </motion.div>
        </div>
      </Layout>
    </main>
  );
};

export default Testimonials;
