import ProjectsSlider from '@/components/ProjectsSlider';
import Bulb from '@/c/Bulb';
import Layout from '@/c/Layout'
import { motion } from 'framer-motion';
import { fadeIn } from '#/variants';

const Projects = () => {
  return (
    <main className='h-[100vh]'>
      <Layout className='w-screen h-full'>
        {/* Page Content */}
        <div className='flex h-full flex-col items-center gap-x-6 lg:flex-row xl:justify-center'>
          {/* Text  */}
          <div className='flex flex-col justify-center'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-12'
            >
              My Work <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mx-auto mb-4 max-w-[400px] lg:mx-0 xl:max-w-[500px]'
            >
              This assortment of completed projects serves as a testament to my
              expertise in the JavaScript framework and its interconnected
              ecosystem. These endeavors exemplify my skillful navigation of
              diverse challenges within the realm of JavaScript, showcasing both
              technical prowess and innovative problem-solving.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex w-full xl:max-w-none xl:max-h-none'
          >
            {/* Slider  */}
            <ProjectsSlider />
          </motion.div>
        </div>
      </Layout>
      <Bulb />
    </main>
  );
};

export default Projects;
