import Circles from '@/components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '#/variants';

const Contact = () => {
  return (
    <div className='h-[100vh] bg-primary/30'>
      <div className='container mx-auto flex h-full items-center justify-center py-32 text-center xl:text-left'>
        <div className='flex w-full max-w-[700px] flex-col'>
          {/* Text */}
          <motion.h1
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1 mb-12 text-center'
          >
            Let&apos;s <span className='text-accent'>connect</span>
          </motion.h1>
          {/* Form  */}
          <motion.form
            action=''
            className='mx-auto flex w-full flex-1 flex-col gap-y-4'
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            {/* Group */}
            <div className='flex gap-x-6'>
              <input type='text' placeholder='name' className='input' />
              <input type='text' placeholder='email' className='input' />
            </div>
            <div className='flex gap-x-6'>
              <input type='text' placeholder='location' className='input' />
              <input type='text' placeholder='phone' className='input' />
            </div>
            <input type='text' placeholder='subject' className='input' />
            <textarea placeholder='message' className='textarea' />
            <button className='btn group flex max-w-[170px] items-center justify-center overflow-hidden rounded-xl border border-accent px-8 transition-all duration-300 hover:border-accent2'>
              <span className='transition-all duration-500 group-hover:-translate-x-[120%] group-hover:opacity-0'>
                Let&apos;s Talk
              </span>
              <BsArrowRight className='absolute translate-x-[120%] text-[22px] opacity-0 transition-all delay-75 duration-500 group-hover:flex group-hover:-translate-x-0 group-hover:opacity-100' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
