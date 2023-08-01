import Image from 'next/image';

const TopLeftImg = () => {
  return (
    <div className='left-o top-o absolute z-10 w-[200px] mix-blend-color-dodge xl:w-[400px]'>
      <Image src='/top-left-img.png' alt='' width={400} height={400} />
    </div>
  );
};

export default TopLeftImg;
