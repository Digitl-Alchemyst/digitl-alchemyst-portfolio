/* eslint-disable react/function-component-definition */
import ParticlesContainer from '@/c/ParticlesContainer';
import { easeInOut, motion } from 'framer-motion';
import { fadeIn } from '#/variants';
import Profile from '@/c/Profile';
import Layout from '@/c/Layout';
import Link from 'next/link';
import { LinkArrow } from '@/c/Icons';
import ProjectsBtn from '@/components/ProjectsBtn';

const Home = () => {
  return (
    <main className='max-h-screen'>
      {/* BG Image Layers */}
      <div className='translate-z-0 absolute h-full w-full bg-none mix-blend-color-dodge xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat' />
      <div className='translate-z-0 absolute h-full w-full animate-pulse bg-none mix-blend-color-dodge xl:bg-alchemy xl:bg-cover xl:bg-bottom  xl:bg-no-repeat' />
      <ParticlesContainer />

      <Layout className=''>
        {/* Page Content */}
        <div className='flex w-full items-center justify-between'>
          {/* Left Side Content */}
          <div className='flex w-auto flex-col items-center xl:w-1/2 xl:pt-36'>
            {/* Title */}
            <motion.h1
              variants={fadeIn('down', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h1 z-40 md:mt-20 xl:mt-0'
            >
              <span className='text-accent'> Digitl Alchemyst</span>{' '}
              <span className='text-3xl'>Steven Watkins</span>
            </motion.h1>
            <motion.h2
              variants={fadeIn('down', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 z-40 mb-15'
            >
              Transforming Ideas Into{' '}
              <span className='text-accent2'> Digital Reality</span>{' '}
            </motion.h2>

            {/* Bio  */}
            <motion.p
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              // Removed max-w-xl lg:max-w-lg xl:max-w-xl
              className='z-40 mx-auto my-2 mb-10 rounded-lg border border-solid border-accent2/30 bg-slate-700/80 px-3 py-5 text-xs text-sky-300 md:text-sm xl:mx-0 xl:text-lg'
            >
              An accomplished and versatile technology entrepreneur and artist,
              I have honed my skills through self-guided exploration and
              hands-on experience. My deep knowledge spans a wide array of
              programming and development software, allowing me to tackle
              diverse challenges and deliver innovative solutions. With a
              passion for both technology and artistic expression, I bring a
              unique perspective to every project I undertake. Through my
              entrepreneurial journey, I have demonstrated the ability to adapt
              to rapidly evolving technologies and leverage them to create
              impactful and visually captivating experiences. Whether it&apos;s
              developing cutting-edge applications or crafting visually stunning
              designs, I thrive on pushing boundaries and exploring new
              possibilities. With my combination of technical proficiency,
              artistic vision, and entrepreneurial spirit, I am poised to make a
              significant impact in the ever-evolving landscape of technology
              and art.
            </motion.p>

            {/* CTA Buttons */}
            <div className='mt-2 flex items-center gap-8 self-center'>
              <motion.div
                variants={fadeIn('down', 0.5)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='justify-centerflex'
              >
                <Link
                  href='/Steven-Watkins-Dev-Resume.pdf'
                  target='_blank'
                  className='button py-4 text-xs sm:py-3 sm:text-lg'
                  download={true}
                >
                  My Resume
                  <LinkArrow className='ml-2 w-4 sm:w-6' />
                </Link>
              </motion.div>

              <motion.div
                variants={fadeIn('down', 0.5)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='flex justify-center'
              >
                <Link
                  href='mailto:digitalalchemiststudios@gmail.com'
                  target='_blank'
                  className='button py-4 text-xs sm:py-3 sm:text-lg'
                >
                  Let&apos;s Connect
                </Link>
              </motion.div>
            </div>

            {/* Animated Buttons */}
            {/* <motion.div
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='hidden justify-center xl:flex mt-4 pb-2'
            >
              <ProjectsBtn />
            </motion.div> */}

          </div>

          {/* Avatar Image  */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{ duration: 1, ease: easeInOut }}
            // removed xl:max-w-none added w-1/2
            className='absolute right-[15%] top-[40%] hidden max-h-[25%] w-full  max-w-[25%] items-center xl:mr-12 xl:flex'
          >
            <Profile />
          </motion.div>
        </div>
      </Layout>
    </main>
  );
};

export default Home;
