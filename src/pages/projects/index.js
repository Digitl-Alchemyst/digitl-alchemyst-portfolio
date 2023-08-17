import ProjectsSlider from '@/components/ProjectsSlider';
import Bulb from '@/c/Bulb';
import Layout from '@/c/Layout'
import { motion } from 'framer-motion';
import { fadeIn } from '#/variants';

const Projects = () => {
  return (
    <main className=''>
      <Layout className='pt-22'>
        <div className=''>
          <div className='flex flex-col gap-x-8 xl:flex-row max-w-fit '>
            {/* Text  */}
            <div className='mb-4 flex flex-col text-center lg:text-left xl:mb-0 xl:min-w-fit xl:max-w-[400px]'>
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
                This assortment of completed projects serves as a testament to
                my expertise in the JavaScript framework and its interconnected
                ecosystem. These endeavors exemplify my skillful navigation of
                diverse challenges within the realm of JavaScript, showcasing
                both technical prowess and innovative problem-solving.
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='w-full xl:max-w-max'
            >
              {/* Slider  */}
              <ProjectsSlider />
            </motion.div>
          </div>
        </div>
      </Layout>
      <Bulb />
    </main>
  );
};

export default Projects;
