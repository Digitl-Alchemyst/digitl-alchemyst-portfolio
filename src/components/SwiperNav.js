import React from 'react';
import { useSwiper } from 'swiper/react';

const SwiperNav = () => {
  const swiper = useSwiper();

  return (
    <div className='justify-between flex cursor-pointer items-center mx-5 mt-10 gap-x-16'>
      <button onClick={() => swiper.slidePrev()} className='button'>
        Prev
      </button>
      <button onClick={() => swiper.slideNext()} className='button'>
        Next
      </button>
    </div>
  );
};

export default SwiperNav;