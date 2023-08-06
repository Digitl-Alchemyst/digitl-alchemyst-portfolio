import Image from 'next/image';

const Bulb = () => {
  return (
    <div>
      <Image
        src="/bulb.png"
        width={260}
        height={200}
        alt=''
        className='absolute -bottom-12 -left-26 z-10 w-[200px] rotate-12 animate-pulse mix-blend-color-dodge duration-75 xl:w-[260px]'
      />
    </div>
  );
};

export default Bulb;
