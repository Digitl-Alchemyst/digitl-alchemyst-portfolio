/* eslint-disable react/jsx-key */
import Avatar from '@/c/Avatar';

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
  FaInvision,
  FaUnity,
  FaWindows,
  FaFedora,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiAffinityphoto,
  SiAdobeaftereffects,
  SiAdobelightroomclassic,
  SiDependabot,
  SiTypescript,
  SiAdobepremierepro,
  SiDevexpress,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiHeadlessui,
  SiOpenai,
  SiGimp,
  SiUnrealengine,
  SiProtodotio,
  SiAutodesk,
  SiAppwrite,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiPrisma,
  SiPlanetscale,
  SiGooglecloud,
  SiVercel,
  SiAxios,
  SiMongoose,
  SiElectron,
  SiUbuntu,
  SiLinux,
  SiLinuxmint,
  SiOpensuse,
  SiKalilinux,
  SiCentos,
} from 'react-icons/si';
import { TbBrandGithubFilled } from 'react-icons/tb';
import CountUp from 'react-countup';
import Head from 'next/head';
import Layout from '@/c/Layout';
import { RiBlenderLine } from 'react-icons/ri';
import { GrAndroid, GrArchlinux } from 'react-icons/gr';
import { AiOutlineCloud, AiOutlineSketch } from 'react-icons/ai';

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
          <SiTypescript />,
          <FaReact />,
          <SiNextdotjs />,
          <SiDevexpress />,
          <SiRedux />,
          <SiElectron />,
          <FaWordpress />,
          <TbBrandGithubFilled />,
          <SiDependabot />,
          <SiVercel />,
        ],
      },
      {
        title: 'Middleware & Databases',
        icons: [
          <SiAppwrite />,
          <SiMongodb />,
          <SiMongoose />,
          <SiFirebase />,
          <SiPrisma />,
          <SiPlanetscale />,
          <SiMysql />,
          <SiGooglecloud />,
          <SiAxios />,
        ],
      },
      {
        title: 'JS Libraries & Plugins',
        icons: [
          <SiTailwindcss />,
          <SiMui />,
          <SiHeadlessui />,
          <SiOpenai />,
          <SiFramer />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma />,
          <SiAdobexd />,
          <SiAdobephotoshop />,
          <AiOutlineSketch />,
          <FaInvision />,
          <SiProtodotio />,
        ],
      },
      {
        title: 'Graphic Design',
        icons: [
          <SiAdobephotoshop />,
          <SiAffinityphoto />,
          <SiAdobeaftereffects />,
          <SiAdobelightroomclassic />,
          <SiGimp />,
        ],
      },
      {
        title: 'Video Editing',
        icons: [<SiAdobepremierepro />, <SiAdobeaftereffects />],
      },
      {
        title: '3D Design',
        icons: [
          <SiAutodesk />,
          <RiBlenderLine />,
          <SiUnrealengine />,
          <FaUnity />,
        ],
      },
      {
        title: 'OS Proficiency',
        icons: [
          <FaWindows />,
          <SiLinux />,
          <SiUbuntu />,
          <SiLinuxmint />,
          <FaFedora />,
          <SiOpensuse />,
          <SiKalilinux />,
          <GrArchlinux />,
          <SiCentos />,
          <GrAndroid />,
        ],
      },
    ],
  },
  {
    title: 'Contributions',
    info: [
      {
        title: 'Streamwall',
        stage: 'UI Design',
      },
      {
        title: 'inShorts',
        stage: 'News Cards',
      },
      {
        title: 'Block-Crosser',
        stage: 'Auth Modal',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title:
          'Full Stack Developer / Streaming Server Engineer - UnTelevised Media',
        stage: '2018 - 2021',
      },
      {
        title: 'Web Developer - Decima Tech Solutions ',
        stage: '2012 - Current',
      },
      {
        title: 'UX/UI Designer - A.R. Media',
        stage: '2013 - 2018',
      },
      {
        title: 'Game Developer - Digital Alchemyst Studios',
        stage: '2016 - 2019',
      },
      {
        title: 'Web Developer / Social Media Manager - Hemp Sector',
        stage: '2013 - 2018',
      },
    ],
  },
  {
    title: 'certifications',
    info: [
      {
        title: 'Full Stack Zero to Hero',
        stage: '2023',
      },
      {
        title: 'Next JS & Open AI / GPT: Next-generation Next JS & AI Apps',
        stage: '2023',
      },
      {
        title: 'Web Dev Simplified',
        stage: '2023',
      },
      {
        title: 'Next.js Bootcamp',
        stage: '2023',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Head>
        <title>Steven Watkins | My Skills</title>
      </Head>

      <main className=''>
        <Layout className='pt-32 xl:pt-2'>

          {/* Avatar  */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='absolute bottom-0 left-0 hidden h-full max-h-[50%] w-full max-w-[50%] xl:flex'
          >
            <Avatar />
          </motion.div>

          {/* Page Content  */}
          <div className='mx-auto flex h-full w-full flex-col items-center gap-x-6 xl:flex-row xl:justify-center'>

            {/* Text & Counters */}
            <div className='flex flex-col justify-center xl:ml-80 '>
              <motion.h2
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2'
              >
                Crafting unique{' '}
                <span className='text-accent'>digital experiences</span>{' '}
                captivating users through{' '}
                <span className='text-accent2'>alchemical designs</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('right', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='mx-auto  mb-10 max-w-[500px] rounded-lg border border-solid border-accent2/30 bg-slate-700/80 px-3 py-5 text-xs text-sky-300 md:text-sm xl:text-base xl:mx-0 xl:mb-10 xl:max-w-[850px] xl:px-4'
              >
                Throughout my life, I&apos;ve been drawn to the world of
                technology, and it was in web application development that I
                found my true passion. Starting with humble experiments in HTML
                and CSS, I steadily honed my skills, delving into JavaScript and
                its frameworks to create dynamic and interactive web
                applications. Late nights were spent tirelessly coding, driven
                by an unyielding ambition to excel in my craft. As the years
                passed, I encountered various challenges and learned from both
                successes and failures. My journey as a web application
                developer has been one of continuous growth and adaptation. I
                embraced the ever-changing landscape of technology, staying
                updated with the latest trends and tools to ensure my work
                remained innovative and cutting-edge. Sharing my knowledge and
                contributing to the community became second nature, and I found
                immense satisfaction in helping aspiring developers along their
                paths. The projects I&apos;ve undertaken, ranging from startups
                to established companies, have provided me with valuable
                experiences that have shaped me into the developer I am today.
                As I stand at this juncture, I am filled with a profound sense
                of purpose, ready to face new challenges and create impactful
                solutions that push the boundaries of web application
                development.
              </motion.p>

              {/* Counters  */}
              <motion.div
                variants={fadeIn('right', 0.6)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='mx-auto md:max-w-2xl xl:mx-0 xl:max-w-3xl'
              >
                <div className='flex gap-x-2 xl:gap-x-3 '>
                  {/* Years of Experience  */}
                  <div className='relative flex flex-1 flex-col items-center after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-accent2'>
                    <div className='text-2xl font-extrabold text-accent xl:text-4xl'>
                      <CountUp start={0} end={13} duration={5} /> +
                    </div>
                    <div className='mr-2 max-w-[100px] text-xs capitalize leading-[1.4] tracking-[1px] md:text-sm'>
                      Years of experience
                    </div>
                  </div>
                  {/* Satisfied Clients */}
                  <div className='relative flex flex-1 flex-col items-center after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-accent2'>
                    <div className='text-2xl font-extrabold text-accent xl:text-4xl'>
                      <CountUp start={0} end={42} duration={5} /> +
                    </div>
                    <div className='mr-2 max-w-[100px] text-xs capitalize leading-[1.4] tracking-[1px] md:text-sm'>
                      Satisfied Clients
                    </div>
                  </div>
                  {/* Completed Projects */}
                  <div className='relative flex flex-1 flex-col items-center after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-accent2'>
                    <div className='text-2xl font-extrabold text-accent xl:text-4xl'>
                      <CountUp start={0} end={28} duration={5} /> +
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

            {/* Info  */}
            <motion.div
              variants={fadeIn('left', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='flex h-[480px] w-full flex-col sm:mb-10 md:mb-0 xl:max-w-[48%] '
            >
              <div className='mx-auto mb-6 flex flex-wrap gap-x-4 gap-y-4 xl:mx-0 xl:gap-x-8'>
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
              <div className='gap-y2 flex flex-col items-center rounded-xl border border-sky-400/20 bg-lime-400/20 py-2 xl:mr-16 xl:items-start xl:gap-y-4 xl:px-2 xl:py-6'>
                {aboutData[index].info.map((item, itemIndex) => {
                  return (
                    <div
                      key={itemIndex}
                      className='flex max-w-max flex-1 flex-col items-center gap-x-2 px-2 text-accent2 md:flex-row'
                    >
                      {/* Title  */}
                      <div className='mb-2 font-light md:mb-1'>
                        {item.title}
                      </div>
                      <div className='hidden md:flex'>-</div>
                      <div className='mb-2 md:mb-1'>{item.stage}</div>
                      <div className='flex flex-wrap gap-x-4'>
                        {/* Icons */}
                        {item.icons?.map((icon, itemIndex) => {
                          return (
                            <div className='text-2xl text-accent'>{icon}</div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className='flex min-h-[200px] sm:hidden' />
            </motion.div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;
