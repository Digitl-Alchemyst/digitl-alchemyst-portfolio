/* eslint-disable react/function-component-definition */
import Image from 'next/image';
import ParticlesContainer from '@/c/ParticlesContainer';
import ProjectsBtn from '@/c/ProjectsBtn';
import Avatar from '@/c/Avatar';
import { easeInOut, motion } from 'framer-motion';
import { fadeIn } from '#/variants';
const Home = () => {
  return (
    <div className='h-full bg-primary/60 pt-62'>
      {/* Text */}
      <div className='h-full w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='container mx-auto  flex h-full flex-col justify-center text-center xl:pt-10 xl:text-left '>
          {/* Title */}
          <motion.h1
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1 z-40'
          >
            <span className='text-accent'> Digitl Alchemyst</span>{' '}
            <span className='text-3xl'>Steven Watkins</span>
          </motion.h1>
          <motion.h2
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 z-40'
          >
            Transforming Ideas Into{' '}
            <span className='text-accent'> Digital Reality</span>{' '}
          </motion.h2>
          <motion.p
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='z-40 mx-auto mb-10 max-w-xl rounded-lg bg-slate-700/80 p-3 text-sm text-sky-300 lg:max-w-lg xl:mx-0 xl:max-w-xl'
          >
            An accomplished and versatile technology entrepreneur and artist, I
            have honed my skills through self-guided exploration and hands-on
            experience. My deep knowledge spans a wide array of programming and
            development software, allowing me to tackle diverse challenges and
            deliver innovative solutions. With a passion for both technology and
            artistic expression, I bring a unique perspective to every project I
            undertake. Through my entrepreneurial journey, I have demonstrated
            the ability to adapt to rapidly evolving technologies and leverage
            them to create impactful and visually captivating experiences.
            Whether it&apos;s developing cutting-edge applications or crafting
            visually stunning designs, I thrive on pushing boundaries and
            exploring new possibilities. With my combination of technical
            proficiency, artistic vision, and entrepreneurial spirit, I am
            poised to make a significant impact in the ever-evolving landscape
            of technology and art.
          </motion.p>
          {/* Button */}
          <div className='relative flex justify-center xl:hidden'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* Image */}
      <div className='absolute bottom-0 right-0 h-full w-[1200px]'>
        {/* BG Image */}
        <div className='translate-z-0 absolute h-full w-full bg-none mix-blend-color-dodge xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat' />

        <div className='translate-z-0 absolute h-full w-full animate-pulse animate-spin-slow bg-none mix-blend-color-dodge xl:bg-alchemy xl:bg-cover xl:bg-right xl:bg-no-repeat' />

        {/* Particles  */}
        <ParticlesContainer />
        {/* Avatar Image  */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: easeInOut }}
          className='translate-z-0 absolute h-full max-h-[476px] w-full max-w-[437px] lg:bottom-40 lg:right-[25%]'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
