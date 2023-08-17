import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Edu = ({ type, time, location, info }) => {
  const ref = useRef(null);
  const infoItem = info.split('<br>').map((item, index) => (
    <p key={index} className=''>
      {item}
    </p>
  ));
  return (
    <li
      ref={ref}
      className='items-left mx-auto my-8 flex w-[60%] flex-col items-start justify-between first:mt-0 last:mb-0'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 75 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.75, type: 'spring' }}
      >
        <h4 className='text-2xl font-bold capitalize text-accent'>{type}</h4>
        <span className='text-lg'>
          {time} | <span className='text-base text-accent2'>{location}</span>
        </span>
        <div className='ml-2 w-full text-xs md:text-sm font-medium'>{infoItem}</div>
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
  return (
    <div className='w-full h-full mt-28'>
      <h2 className='mb-32 w-full text-center text-6xl font-bold'>Education</h2>
      <div ref={ref} className='relative mx-auto w-[85%] '>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 mt-1 h-full w-[4px] origin-top rounded-md bg-light'
        />

        <ul className='ml-4 flex w-full flex-col justify-between'>
          <Edu
            type='Hinds Community Collage'
            time='2007 - 2009'
            location='Pearl, MS'
            info={`
              Sociology / Welding <br>
              Dean’s Scholar and President’s List <br>
              Member of Alpha Kappa Alpha Beta `}
          />
          <Edu
            type='Fullsail University'
            time='2018 - 2020'
            location='Winter Park, FL'
            info={`
              Game Development Bachelors <br>
              Application Development Fundamentals `}
          />
          <Edu
            type='Online Courses'
            time='2023'
            location='Internet'
            info={`
              Full Stack Zero to Hero<br>
              Next JS & Open AI / GPT: Next-generation Next JS & AI apps <br>
              Web Dev Simplified<br>
              Next.js Bootcamp<br>
              `}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
