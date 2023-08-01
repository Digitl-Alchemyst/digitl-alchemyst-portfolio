import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src='/avatar.png'
        alt=''
        width={537}
        height={478}
        className='translate-z-0 h-full w-full'
      />
    </div>
  );
};

export default Avatar;
