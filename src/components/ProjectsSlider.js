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
        {
          title: 'title',
          path: '/thumb5.jpg',
        },
        {
          title: 'title',
          path: '/thumb6.jpg',
        },
        {
          title: 'title',
          path: '/thumb7.jpg',
        },
        {
          title: 'title',
          path: '/thumb8.jpg',
        },
        {
          title: 'title',
          path: '/thumb9.jpg',
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
      className='flex w-[750px] items-center justify-center sm:h-[420px] lg:max-w-[750px] xl:w-[800px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid cursor-pointer grid-cols-3 grid-rows-3 gap-4'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className='group relative items-center justify-center overflow-hidden rounded-lg'
                    key={index}
                  >
                    <div className='group relative flex items-center justify-center overflow-hidden'>
                      {/* Images  */}
                      <Image src={image.path} alt='' width={500} height={300} />
                      {/* Overlay Gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 transition-all duration-700 group-hover:opacity-60' />
                      {/* Title */}
                      <div className='absolute bottom-0 translate-y-full transition-all duration-300 group-hover:-translate-y-10 group-hover:xl:-translate-y-20'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2rem]'>
                          {/* Title pt1 */}
                          <div className='translate-y-[500%] transition-all delay-100 duration-300 group-hover:translate-y-0'>
                            LIVE
                          </div>
                          {/* Title pt2 */}
                          <div className='translate-y-[500%] transition-all delay-150 duration-300 group-hover:translate-y-0'>
                            PROJECT
                          </div>
                          {/* Icon */}
                          <div className='translate-y-[500%] text-xl transition-all delay-200 duration-300 group-hover:translate-y-0'>
                            <BsArrowRight />
                          </div>
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
