import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Edu = ({ type, time, location, info, index }) => {
  const ref = useRef(null);
  // Convert string items to array items
  const infoItems =
    typeof info === 'string'
      ? info.split('<br>').filter((item) => item.trim() !== '')
      : Array.isArray(info)
      ? info
      : [];

  return (
    <li
      ref={ref}
      className='items-left mx-auto my-8 flex w-[60%] flex-col items-start justify-between first:mt-0 last:mb-0'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 75 }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 0.85,
          type: 'spring',
          delay: index * 0.3, // Slower staggered delay
        }}
      >
        <h4 className='text-2xl font-bold capitalize text-accent'>{type}</h4>
        <span className='text-lg'>
          {time} | <span className='text-base text-accent2'>{location}</span>
        </span>
        <ul className='ml-4 mt-2 w-full list-disc space-y-1 text-xs font-medium md:text-sm'>
          {infoItems.map((item, i) => (
            <li key={i} className='pl-1'>
              {item.trim()}
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  const educationData = [
    {
      type: 'Hinds Community Collage',
      time: '2007 - 2009',
      location: 'Pearl, MS',
      info: [
        'Sociology / Welding',
        "Dean's Scholar and President's List",
        'Member of Alpha Kappa Alpha Beta',
      ],
    },
    {
      type: 'Fullsail University',
      time: '2018 - 2020',
      location: 'Winter Park, FL',
      info: [
        'Game Development Bachelors',
        'Application Development Fundamentals',
      ],
    },
    {
      type: 'Online Courses',
      time: '2023 - 2025',
      location: 'Internet',
      info: [
        'Full Stack Zero to Hero',
        'Full Stack Zero to Hero 2.0',
        'Hugging Face AI Agents Course',
        'Next JS & Open AI / GPT: Next-generation Next JS & AI apps',
        'Vector Databases for Embeddings with Pinecone',
        'Web Dev Simplified',
        'Next.js Bootcamp',
      ],
    },
  ];

  return (
    <div className='mt-28 h-full w-full'>
      <h2 className='mb-32 w-full text-center text-6xl font-bold'>Education</h2>
      <div ref={ref} className='relative mx-auto w-[85%] '>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 mt-1 h-full w-[4px] origin-top rounded-md bg-light'
          transition={{ duration: 1.5 }} // Slower line fill animation
        />

        <ul className='ml-4 flex w-full flex-col justify-between'>
          {educationData.map((education, index) => (
            <Edu
              key={index}
              type={education.type}
              time={education.time}
              location={education.location}
              info={education.info}
              index={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
