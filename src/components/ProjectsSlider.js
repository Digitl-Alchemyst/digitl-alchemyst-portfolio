import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import SwiperNav from '@/c/SwiperNav';
import Link from 'next/link';

// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          id: 1,
          title: 'dashy',
          img: '/projects/dashy.png',
          path: 'projects/${id}',
          tech: 'React, Material UI, Formik, Nivo Charts, MUI X Data Grid, React Pro Sidebar, Full Calendar',
          concepts: 'API, Dark Light Mode, Mapping, Plugins',
          description:
            'Admin Dashboard providing an overview of tracked data through charts, events management through calendar, and contact management & invoice tracking through data grids',
          demo: 'https://dashy-mauve-seven.vercel.app/',
          github: 'https://github.com/Digitl-Alchemyst/Dashy',
          yt: 'Youtube Link',
        },
        {
          id: 2,
          title: 'indigo',
          img: '/projects/indigo.png',
          path: 'projects/[id]',
          tech: 'React, MongoDB, Express, NodeJS, Material UI, Formik, Nivo Charts, MUI X Data Grid',
          concepts:
            'API, Mapping, Plugins, Database, NodeJS Server, Routes, Controllers',
          description: 'React Admin Dashboard',
          demo: 'live link',
          github: 'https://github.com/Digitl-Alchemyst/Project-Indigo',
        },
        {
          id: 3,
          title: 'dynamo',
          img: '/projects/dynamo.png',
          path: 'projects/[id]',
          tech: 'React, Sass, Tanstack React Query, Material UI, Recharts, MUI X Data Grid',
          concepts: 'API, Mapping, Plugins, Query',
          description: 'React Admin Dashboard',
          demo: 'live link',
          github: 'https://github.com/Digitl-Alchemyst/Dynamo',
        },
        {
          id: 4,
          title: 'api-pretend-point',
          img: '/projects/apipretend.png',
          path: 'projects/[id]',
          tech: 'NodeJS, Express, Cors, Helmet, Morgan, Typescript',
          concepts: 'API, Mapping, Plugins',
          description:
            'A mock API end-point server with mock data files for use with front end react projects with typescript.',
          demo: 'live link',
          github: 'https://github.com/Digitl-Alchemyst/API-PretEnd-Point',
        },
      ],
    },
    {
      images: [
        {
          id: 1,
          title: 'gypsy',
          img: '/projects/thumb3.jpg',
          path: 'projects/[id]',
          tech: 'React, Material UI, Formik, Nivo Charts, MUI X Data Grid',
          concepts: 'API, Mapping, Plugins',
          description: 'React Admin Dashboard',
          demo: 'live link',
          github: 'github url',
        },
        {
          id: 2,
          title: 'sw-photography',
          img: '/projects/thumb9.jpg',
          path: 'projects/[id]',
          tech: 'React, Material UI, Formik, Nivo Charts, MUI X Data Grid',
          concepts: 'API, Mapping, Plugins',
          description: 'React Admin Dashboard',
          demo: 'live link',
          github: 'github url',
        },
        {
          id: 3,
          title: 'google-shopping',
          img: '/projects/thumb4.jpg',
          path: 'projects/[id]',
          tech: 'React, Material UI, Formik, Nivo Charts, MUI X Data Grid',
          concepts: 'API, Mapping, Plugins',
          description: 'React Admin Dashboard',
          demo: 'live link',
          github: 'github url',
        },
        {
          id: 4,
          title: 'vagablog',
          img: '/projects/thumb6.jpg',
          path: 'projects/[id]',
          tech: 'React, Material UI, Formik, Nivo Charts, MUI X Data Grid',
          concepts: 'API, Mapping, Plugins',
          description: 'React Admin Dashboard',
          demo: 'live link',
          github: 'github url',
        },
      ],
    },
    {
      images: [
        {
          id: 1,
          title: 'checkmate',
          img: '/projects/thumb7.jpg',
          path: 'projects/[id]',
          tech: 'React, Material UI, Formik, Nivo Charts, MUI X Data Grid',
          concepts: 'API, Mapping, Plugins',
          description: 'React Admin Dashboard',
          demo: 'live link',
          github: 'github url',
        },
        {
          id: 2,
          title: 'untelevised',
          img: '/projects/thumb2.jpg',
          path: 'projects/[id]',
          tech: 'React, Material UI, Formik, Nivo Charts, MUI X Data Grid',
          concepts: 'API, Mapping, Plugins',
          description: 'React Admin Dashboard',
          demo: 'live link',
          github: 'github url',
        },
        {
          id: 3,
          title: 'wander-lodge',
          img: '/projects/thumb0.jpg',
          path: 'projects/[id]',
          tech: 'React, Material UI, Formik, Nivo Charts, MUI X Data Grid',
          concepts: 'API, Mapping, Plugins',
          description: 'React Admin Dashboard',
          demo: 'live link',
          github: 'github url',
        },
        {
          id: 4,
          title: 'dreadit',
          img: '/projects/thumb7.jpg',
          path: 'projects/[id]',
          tech: 'React, Material UI, Formik, Nivo Charts, MUI X Data Grid',
          concepts: 'API, Mapping, Plugins',
          description: 'React Admin Dashboard',
          demo: 'live link',
          github: 'github url',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='flex h-[300px] w-[350px] items-center justify-center sm:w-[400px] md:h-[425px] md:w-[600px] lg:h-[500px] lg:w-[750px] xl:h-[725px] xl:w-[1200px]'
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
                      <Link href={image.path}>
                    <div className='group relative flex items-center justify-center overflow-hidden'>
                      {/* Images  */}
                      <Image src={image.img} alt='' width={500} height={300} className='rounded-md' />
                      {/* Overlay Gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-accent to-accent2 opacity-0 transition-all duration-700 group-hover:opacity-60' />
                      {/* Title */}
                      <div className='absolute bottom-0 translate-y-full transition-all duration-500 group-hover:-translate-y-10 group-hover:xl:-translate-y-20'>
                        <div className='flex items-center gap-x-2 text-[13px] font-bold tracking-[0.2rem] text-primary lg:text-lg xl:text-xl'>
                          {/* Title pt1 */}
                          <div className='translate-y-[500%] transition-all delay-100 duration-500 group-hover:translate-y-0'>
                            PROJECT
                          </div>
                          {/* Title pt2 */}
                          <div className='translate-y-[500%] transition-all delay-150 duration-500 group-hover:translate-y-0'>
                            INFO
                          </div>
                          {/* Icon */}
                          <div className='translate-y-[500%] text-xl transition-all delay-200 duration-500 group-hover:translate-y-0'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                      </Link>
                  </div>
                );
              })}

            </div>
            <SwiperNav />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
