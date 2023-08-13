import TestimonialSlider from '@/c/TestimonialSlider';
import { motion } from 'framer-motion';
import { fadeIn } from '#/variants';
import Layout from '@/c/Layout'

const Testimonials = () => {
  return (
    <div className='h-[100vh] bg-primary/30 py-32 text-center'>
      <div className=' mx-auto flex h-full flex-col justify-center'>
        <Layout className=''>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 mb-8 xl:mb-0'
          >
            What <span className='text-accent'>clients</span> are{' '}
            <span className='text-accent2'>saying.</span>
          </motion.h2>
          <motion.div
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='xl:pr-22 pb-20'
          >
            <TestimonialSlider />
          </motion.div>
        </Layout>
      </div>
    </div>
  );
};

export default Testimonials;
