import WorkSlider from '@/components/ProjectsSlider';
import Bulb from '@/c/Bulb';
import { motion } from 'framer-motion';
import { fadeIn } from '#/variants';
import WorkExperience from '@/c/Experience';
import Head from 'next/head';
import Layout from '@/c/Layout';
import Education from '@/c/Education';
import ParticlesContainer from '@/c/ParticlesContainer';

const Experience = () => {
  return (
    <>
      <Head>
        <title>Experience & Education</title>
      </Head>
        <ParticlesContainer />
      <main className='h-full w-screen'>
        <Layout className=''>
        <Bulb className='' />
          <div className='mx-auto flex h-full w-full flex-col items-center gap-x-6 mb-80'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 pb-8 pt-22 xl:pt-18'
            >
              My Education & Work Experience{' '}
              <span className='text-accent'>.</span>
            </motion.h2>
            <WorkExperience />
            <Education />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Experience;
