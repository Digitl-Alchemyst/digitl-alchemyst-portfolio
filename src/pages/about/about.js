/* eslint-disable react/jsx-key */
import Avatar from '@/c/Avatar';
import Circles from '@/components/Circles';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '#/variants';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si';
import CountUp from 'react-countup';
//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='h-[100vh] bg-slate-700/30  pt-40 text-center md:pt-36 lg:pt-24 xl:text-left'>
      {/* Page Theme Elements  */}
      <Circles />
      {/* Avatar  */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='absolute bottom-0 hidden h-full max-h-[547px] w-full max-w-[437px] xl:flex xxl:max-h-[547px] xxl:max-w-[437px]'
      >
        <Avatar />
      </motion.div>

      {/* Page Content  */}
      {/* Purple  */}
      <div className='container mx-auto flex h-full flex-col items-center gap-x-6 xl:flex-row'>
        {/* Text */}
        {/* Blue */}
        <div className='mb-8 flex-1 flex-col justify-center xl:mb-0 xxl:ml-80'>
          <motion.h2
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Crafting unique{' '}
            <span className='text-accent'>digital experiences</span> captivating
            users through{' '}
            <span className='text-accent2'>alchemical designs</span>
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mx-auto mb-6 max-w-[500px] px-2 xl:mx-0 xl:mb-12 xl:max-w-[700px] xl:px-0 xxl:max-w-[900px]'
          >
            {/* Red  */}
            Throughout my life, I&apos;ve been drawn to the world of technology,
            and it was in web application development that I found my true
            passion. Starting with humble experiments in HTML and CSS, I
            steadily honed my skills, delving into JavaScript and its frameworks
            to create dynamic and interactive web applications. Late nights were
            spent tirelessly coding, driven by an unyielding ambition to excel
            in my craft. As the years passed, I encountered various challenges
            and learned from both successes and failures. My journey as a web
            application developer has been one of continuous growth and
            adaptation. I embraced the ever-changing landscape of technology,
            staying updated with the latest trends and tools to ensure my work
            remained innovative and cutting-edge. Sharing my knowledge and
            contributing to the community became second nature, and I found
            immense satisfaction in helping aspiring developers along their
            paths. The projects I&apos;ve undertaken, ranging from startups to
            established companies, have provided me with valuable experiences
            that have shaped me into the developer I am today. As I stand at
            this juncture, I am filled with a profound sense of purpose, ready
            to face new challenges and create impactful solutions that push the
            boundaries of web application development.
          </motion.p>

          {/* Counters  */}
          {/* Counters  */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mx-auto md:max-w-2xl xl:mx-0 xl:max-w-4xl'
          >
            <div className='flex gap-x-2 xl:gap-x-3 '>
              {/* Years of Experience  */}
              <div className='relative flex flex-1 flex-col items-center after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-accent2'>
                <div className='text-2xl font-extrabold text-accent xl:text-4xl'>
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className='mr-2 max-w-[100px] text-xs capitalize leading-[1.4] tracking-[1px] md:text-sm'>
                  Years of experience
                </div>
              </div>
              {/* Satisfied Clients */}
              <div className='relative flex flex-1 flex-col items-center after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-accent2'>
                <div className='text-2xl font-extrabold text-accent xl:text-4xl'>
                  <CountUp start={0} end={84} duration={5} /> +
                </div>
                <div className='mr-2 max-w-[100px] text-xs capitalize leading-[1.4] tracking-[1px] md:text-sm'>
                  Satisfied Clients
                </div>
              </div>
              {/* Completed Projects */}
              <div className='relative flex flex-1 flex-col items-center after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-accent2'>
                <div className='text-2xl font-extrabold text-accent xl:text-4xl'>
                  <CountUp start={0} end={132} duration={5} /> +
                </div>
                <div className='mr-2 max-w-[100px] text-xs capitalize leading-[1.4] tracking-[1px] md:text-sm'>
                  Projects Completed
                </div>
              </div>
              {/* Open Source Contributions */}
              <div className='relative flex flex-1 flex-col items-center after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-accent2'>
                <div className='text-2xl font-extrabold text-accent xl:text-4xl'>
                  <CountUp start={0} end={64} duration={5} /> +
                </div>
                <div className='mr-2 max-w-[100px] text-xs capitalize leading-[1.4] tracking-[1px] md:text-sm'>
                  Open Source Contributions
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Blue  */}
        {/* Info  */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex h-[480px] w-full flex-col pb-32 xl:max-w-[48%] xl:pb-0 xxl:max-w-[38%]'
        >
          <div className='mx-auto mb-4 flex gap-x-4 xl:mx-0 xl:gap-x-8'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={item.index}
                  onClick={() => setIndex(itemIndex)}
                  className={`${
                    index === itemIndex &&
                    'text-accent2 after:w-[100%] after:bg-accent2 after:transition-all after:duration-300'
                  } relative cursor-pointer capitalize after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-8 after:bg-white xl:text-lg`}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='gap-y2 flex flex-col items-center rounded-xl border border-sky-400/20 bg-lime-400/20 py-2 xl:items-start xl:gap-y-4 xl:px-2 xl:py-6'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex max-w-max flex-1 flex-col items-center gap-x-2 text-accent2 md:flex-row'
                >
                  {/* Title  */}
                  <div className='mb-2 font-light md:mb-1'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div className='mb-2 md:mb-1'>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* Icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className='text-2xl text-accent'>{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
