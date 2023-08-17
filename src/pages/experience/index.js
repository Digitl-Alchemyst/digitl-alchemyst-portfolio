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
      <main className='min-h-screen'>
        <Bulb className='sticky' />
        <ParticlesContainer />
        <Layout className=''>
          <div className='items-left mx-auto flex h-full w-full flex-col justify-center'>
            <div className='mb-2 flex-1 flex-col justify-center'>
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2 pb-8 pt-22 xl:pt-12'
              >
                My Education & Work Experience{' '}
                <span className='text-accent'>.</span>
              </motion.h2>
              <WorkExperience />
              <Education />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Experience;
