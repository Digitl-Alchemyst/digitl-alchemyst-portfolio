import Link from 'next/link';
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
  RiLinkedinLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-4 text-xl text-accent'>
      <Link
        href='https://github.com/Digitl-Alchemyst'
        className='transition-all duration-300 hover:text-accent2'
      >
        <RiGithubLine />
      </Link>
      <Link
        href='https://www.linkedin.com/in/steven-watkins-02105b155/'
        className='transition-all duration-300 hover:text-accent2'
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href='https://twitter.com/DigitlAlchemyst'
        className='transition-all duration-300 hover:text-accent2'
      >
        <RiTwitterLine />
      </Link>
      <Link
        href='https://www.youtube.com/@digitalalchemyst'
        className='transition-all duration-300 hover:text-accent2'
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href='https://www.instagram.com/digital_alchemyst/'
        className='transition-all duration-300 hover:text-accent2'
      >
        <RiInstagramLine />
      </Link>
      <Link
        href='https://www.facebook.com/DigitalAlchemyst'
        className='transition-all duration-300 hover:text-accent2'
      >
        <RiFacebookLine />
      </Link>
    </div>
  );
};

export default Socials;
