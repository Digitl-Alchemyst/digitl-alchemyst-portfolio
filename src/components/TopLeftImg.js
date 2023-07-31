import Image from 'next/image';

const TopLeftImg = () => {
  return (
    <div className='absolute left-o top-o mix-blend-color-dodge z-10 w-[200px] xl:w-[400px]'>
      <Image src='/top-left-img.png' alt='' width={400} height={400} />
    </div>
  );
};

export default TopLeftImg;
