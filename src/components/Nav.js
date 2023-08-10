import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';
import Link from 'next/link';
import { useRouter } from 'next/router';

//  Navigation Menu Links
const navLinks = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'experience', path: '/experience', icon: <HiViewColumns /> },
  { name: 'projects', path: '/projects', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className='fixed bottom-0 top-0 z-30 mt-auto flex h-max w-full flex-col items-center gap-y-4 xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-md xl:justify-center'>
      {/* inner  */}
      <div className='flex h-[80px] w-full items-center justify-between gap-y-10 bg-white/10 px-4 py-8 text-3xl backdrop-blur-sm md:px-40 xl:h-max xl:flex-col xl:justify-center xl:rounded-full xl:px-0 xl:text-xl'>
        {navLinks.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && 'text-accent'
              } group relative flex items-center transition-all duration-300 hover:text-accent2`}
              href={link.path}
              key={index}
            >
              {/* ToolTip */}
              <div className='absolute right-0 hidden pr-14 xl:group-hover:flex'>
                <div className='relative flex items-center rounded-sm bg-white p-[6px] text-primary'>
                  <div className='text-[12px] font-semibold capitalize leading-none'>
                    {link.name}
                  </div>
                  {/* Triangle */}
                  <div className='absolute -right-2 border-y-[6px] border-l-8 border-r-0 border-solid border-y-transparent border-l-white' />
                </div>
              </div>
              {/* Icons  */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
