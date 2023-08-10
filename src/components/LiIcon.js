import React from 'react';
import { motion, useScroll } from 'framer-motion';

const LiIcon = ({reference}) => {

      const { scrollYProgress } = useScroll({
        target: reference,
        offset: ['center end', 'center center']
      });
  return (
    <figure className='absolute left-0 stroke-accent2'>
      <svg className='-rotate-90' width='75' height='75' viewBox='0 0 100 100 '>
        <circle cx='75' cy='50' r='25' className='fill-slate-700 stroke-slate-100/70 stroke-1' />
        <motion.circle cx='75' cy='50' r='20' 
            style={{
                pathLength: scrollYProgress
            }}
            className='fill-slate-700 stroke-[6px]' />
        <circle cx='75' cy='50' r='10' className='fill-slate-200 stroke-0 animate-pulse' />
      </svg>
    </figure>
  );
};

export default LiIcon;
