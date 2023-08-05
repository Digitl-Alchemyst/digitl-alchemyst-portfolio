import Image from 'next/image';

const Circles = () => {
  return (
    <div className='-bottom-2 absolute -right-16 w-[200px] xl:w-[300px] animate-pulse duration-75 z-10 mix-blend-saturation'>
      <Image
        src='/circles.png'
        width={260}
        height={200}
        alt=''
        className='h-full w-full'
      />
    </div>
  );
};

export default Circles;
