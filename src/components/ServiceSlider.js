import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Link from 'next/link';

// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    path: '/branding',
    description:
      'Crafting distintive and unique brand identities tailored to your company or project that will captivate consumers.',
  },
  {
    icon: <RxDesktop />,
    title: 'Application Development',
    path: '/dev',
    description:
      'From idea to reality, I can bring your digital projects to life with efficient and innovative development solutions.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Graphical Design',
    path: '/design',
    description:
      'Experience the transformation of your creative visions into captivating visuals that leave a long lasting impact.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Video Editing',
    path: '/editing',
    description:
      'Elevate your content with expertly edited videos, where your imaginative ideas evolve into captivating visual stories.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    path: '/copywriting',
    description:
      'Crafting compelling narratives and persuasive content that captures attention and drives engagement for any project.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    path: '/seo',
    description:
      'Elevate your online presence and visibility through strategic SEO techniques that enhance your digital reach.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='max-h-[450px] sm:h-[420px] xl:w-[800px] h-full flex items-center justify-center'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Link href={item.path}>
              <div className='group flex h-max w-full cursor-pointer gap-x-6 rounded-lg bg-[rgba(65,47,123,0.15)] px-6 py-8 transition-all duration-300 hover:bg-[rgba(89,65,169,0.15)] sm:flex-col sm:gap-x-0'>
                {/* Icon */}
                <div className='mb-4 text-4xl text-accent'>{item.icon}</div>
                {/* Title & Description */}
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='lg:text-large min-h-max max-w-[350px] text-xs leading-normal md:text-base'>
                    {item.description}
                  </p>
                </div>
                {/* Arrow */}
                <div className='text-3xl'>
                  <RxArrowTopRight className='transition-all duration-300 group-hover:rotate-45 group-hover:text-accent2' />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
