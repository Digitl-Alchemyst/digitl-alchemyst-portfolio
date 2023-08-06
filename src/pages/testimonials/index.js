import TestimonialSlider from '@/c/TestimonialSlider';
import { motion } from 'framer-motion';
import { fadeIn } from '#/variants';

const Testimonials = () => {
  return (
    <div className='h-full bg-primary/30 py-32 text-center'>
      <div className='container mx-auto flex h-full flex-col justify-center'>
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
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
