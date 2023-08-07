import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px] xl:h-[640px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid cursor-pointer grid-cols-2 grid-rows-2 gap-4'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className='group relative items-center justify-center overflow-hidden rounded-lg'
                    key={index}
                  >
                    <div className='relative flex items-center justify-center overflow-hidden group'>
                      {/* Images  */}
                      <Image src={image.path} alt='' width={500} height={300} />
                      {/* Overlay Gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 transition-all duration-700 group-hover:opacity-60' />
                      {/* Title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2rem]'>
                          {/* Title pt1 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-100'>LIVE</div>
                          {/* Title pt2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                          {/* Icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 duration-300 delay-200 transition-all'><BsArrowRight /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
