import { motion } from 'framer-motion';

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className='fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-[#189934]/40'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      />
      <motion.div
        className='fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-[#1e82e0]/40'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
      />
      <motion.div
        className='fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-[#1c92ff]/40'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
      />
    </>
  );
};

export default Transition;
