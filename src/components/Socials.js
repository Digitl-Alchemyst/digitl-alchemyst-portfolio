import Link from 'next/link';
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
  RiLinkedinLine,
} from 'react-icons/ri';
import { easeInOut, motion } from 'framer-motion';


const MotionLink = motion(Link);

const Socials = () => {
  return (
    <div className='flex items-center gap-x-4 text-xl text-accent'>
      <MotionLink
        href='https://github.com/Digitl-Alchemyst'
        className='transition-all duration-300 hover:text-accent2'
        whileHover={{ y: -2 }}
      >
        <RiGithubLine />
      </MotionLink>
      <MotionLink
        href='https://www.linkedin.com/in/steven-watkins-02105b155/'
        className='transition-all duration-300 hover:text-accent2'
        whileHover={{ y: -2 }}
      >
        <RiLinkedinLine />
      </MotionLink>
      <MotionLink
        href='https://twitter.com/DigitlAlchemyst'
        className='transition-all duration-300 hover:text-accent2'
        whileHover={{ y: -2 }}
      >
        <RiTwitterLine />
      </MotionLink>
      <MotionLink
        href='https://www.youtube.com/@digitalalchemyst'
        className='transition-all duration-300 hover:text-accent2'
        whileHover={{ y: -2 }}
      >
        <RiYoutubeLine />
      </MotionLink>
      <MotionLink
        href='https://www.instagram.com/digital_alchemyst/'
        className='transition-all duration-300 hover:text-accent2'
        whileHover={{ y: -2 }}
      >
        <RiInstagramLine />
      </MotionLink>
      <MotionLink
        href='https://www.facebook.com/DigitalAlchemyst'
        className='transition-all duration-300 hover:text-accent2'
        whileHover={{ y: -2 }}
      >
        <RiFacebookLine />
      </MotionLink>
    </div>
  );
};

export default Socials;
