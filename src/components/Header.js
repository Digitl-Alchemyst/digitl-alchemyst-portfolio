import Image from 'next/image';
import Link from 'next/link';
import Socials from './Socials';

const Header = () => {
  return (
    <header className='absolute z-30 flex w-full items-center px-16 xl:h-[90px] xl:px-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between gap-y-2 py-6 lg:flex-row'>
          {/* Logo */}
          <Link href='/'>
            <Image
              src='/logo.svg'
              alt=''
              width={420}
              height={69}
              priority={true}
            />
          </Link>
          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
