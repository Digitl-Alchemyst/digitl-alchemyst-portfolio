import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from 'next/image';
import { BsArrowRight, BsYoutube } from 'react-icons/bs';
import SwiperNav from '@/c/SwiperNav';
import Link from 'next/link';
import { MdEmojiObjects } from 'react-icons/md';
import { TbLivePhoto } from 'react-icons/tb';
import { RiGithubLine } from 'react-icons/ri';

// data
export const workSlides = {
  slides: [
    {
      card: [
        {
          id: 1,
          title: 'Untelevised Media',
          img: '/projects/untelevisedmedia.png',
          path: `/projects/2`,
          description: 'Custom CMS News Site',
          demo: 'https://www.untelevised.media/',
          github: 'https://github.com/Digitl-Alchemyst/untelevised',
          yt: '',
        },
        {
          id: 2,
          title: 'Cloud Stash',
          img: '/projects/cloudstash.png',
          path: `/projects/2`,
          description: 'Cloud File Storage',
          demo: 'https://www.cloudstash.tech/',
          github: 'https://github.com/Digitl-Alchemyst/cloud-stash',
          yt: '',
        },
        {
          id: 3,
          title: 'Checkmate',
          img: '/projects/checkmate.png',
          path: `/projects/3`,
          description: 'AI Powered To-Do List & Planner',
          demo: 'https://checkmate-ai.vercel.app/',
          github: 'https://github.com/Digitl-Alchemyst/checkmate',
          yt: 'https://www.youtube.com/watch?v=L9NYGsUa5Gc',
        },
        {
          id: 4,
          title: 'Decima Tech Solution',
          img: '/projects/decima.png',
          path: `/projects/4`,
          description: 'Low Voltage Contractor',
          demo: 'http://decima-tech.dx.am/index.html',
          github: 'https://github.com/Digitl-Alchemyst/decima-tech',
          yt: '',
        },
      ],
    },
    {
      card: [
        {
          id: 5,
          title: 'Vagablog',
          img: '/projects/vagablog.png',
          path: `/projects/1`,
          description: 'AI Travel Blogger',
          demo: 'https://vagablog.vercel.app/',
          github: 'https://github.com/Digitl-Alchemyst/vagablog',
          yt: '',
        },
        {
          id: 6,
          title: 'Wander Lodge',
          img: '/projects/wanderlodge.png',
          path: `/projects/3`,
          description: 'Luxury Vacation Rentals',
          demo: 'https://wander-lodge.vercel.app/',
          github: 'https://github.com/Digitl-Alchemyst/wander-lodge',
          yt: 'https://www.youtube.com/watch?v=Ir8OFrlm4dc',
        },

        {
          id: 7,
          title: 'Mens Wearhouse',
          img: '/projects/menswearhouse.png',
          path: `/projects7`,
          description: 'Clone of Mens Wearhouse',
          demo: 'https://mens-wearhouse.vercel.app/',
          github: 'https://github.com/Digitl-Alchemyst/mens-wearhouse',
          yt: '',
        },
        {
          id: 8,
          title: 'Travel Pass',
          img: '/projects/travelpass.png',
          path: `/projects/8`,
          description: 'Travel Booking Scraper App',
          demo: 'https://travel-pass-beige.vercel.app/',
          github: 'https://github.com/Digitl-Alchemyst/travel-pass',
          yt: 'https://www.youtube.com/watch?v=ZtPs9kD9ExY',
        },
      ],
    },
    {
      card: [
        {
          id: 9,
          title: 'Town Square',
          img: '/projects/townsquare.png',
          path: `/projects/9`,
          description: 'Twitter/X/Threads Clone',
          demo: 'live link',
          github: 'https://github.com/Digitl-Alchemyst/town-square',
          yt: '',
        },
        {
          id: 10,
          title: 'Google-Shopping',
          img: '/projects/googleshop.png',
          path: `/projects/10`,
          description: 'Google Shopping Clone',
          demo: 'https://google-shopping.vercel.app/',
          github: 'https://github.com/Digitl-Alchemyst/google-shopping',
          yt: 'https://www.youtube.com/watch?v=L9NYGsUa5Gc&t=51s',
        },
        {
          id: 12,
          title: 'sw-photography',
          img: '/projects/swphoto.png',
          path: `/projects/12`,
          description: 'Next.js Photography Portfolio',
          demo: 'live link',
          github: 'github url',
          yt: '',
        },
        {
          id: 12,
          title: 'Gypsy',
          img: '/projects/gypsy.png',
          path: `/projects/12`,
          description: 'Chat GPT Clone',
          demo: 'live link',
          github: 'https://github.com/Digitl-Alchemyst/gypsy',
          yt: '',
        },
      ],
    },
    {
      card: [
        {
          id: 13,
          title: 'dashy',
          img: '/projects/dashy.png',
          path: `/projects/13`,
          description: 'React Front End Dashboard',
          demo: 'https://dashy-mauve-seven.vercel.app/',
          github: 'https://github.com/Digitl-Alchemyst/Dashy',
          yt: 'Youtube Link',
        },
        {
          id: 14,
          title: 'indigo',
          img: '/projects/indigo.png',
          path: `/projects/14`,
          description: 'MERN Stack Admin Dashboard',
          demo: 'live link',
          github: 'https://github.com/Digitl-Alchemyst/Project-Indigo',
          yt: 'Youtube Link',
        },
        {
          id: 15,
          title: 'dynamo',
          img: '/projects/dynamo.png',
          path: `/projects/15`,
          description: 'React Admin Dashboard',
          demo: 'live link',
          github: 'https://github.com/Digitl-Alchemyst/Dynamo',
          yt: 'https://www.youtube.com/watch?v=nbFMtd9wqmQ',
        },
        {
          id: 16,
          title: 'api-pretend-point',
          img: '/projects/apipretend.png',
          path: `/projects/16`,
          description: 'A mock API end-point server',
          demo: 'live link',
          github: 'https://github.com/Digitl-Alchemyst/API-PretEnd-Point',
          yt: '',
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
      className='mb-0 flex h-full w-[350px] items-center justify-center sm:w-[400px] md:w-[600px] lg:mb-0 lg:h-[500px] lg:w-[750px] xl:h-[775px] xl:w-[1200px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-1 grid-rows-4 gap-4 lg:grid-cols-2 lg:grid-rows-2'>
              {slide.card.map((card, index) => {
                return (
                  <div
                    className='group relative items-center justify-center overflow-hidden rounded-lg'
                    key={index}
                  >
                    <div className='group relative flex items-center justify-center overflow-hidden'>
                      {/* Images  */}
                      <Image
                        src={card.img}
                        alt=''
                        width={500}
                        height={300}
                        className='rounded-md'
                      />
                      {/* Overlay Gradient */}
                      <div className='absolute inset-0 left-11 right-6 rounded-lg bg-gradient-to-l from-transparent via-accent to-accent2 opacity-0 transition-all duration-700 group-hover:opacity-60' />
                      {/* Title */}
                      <div className='absolute bottom-0 translate-y-full transition-all duration-500 group-hover:-translate-y-10 group-hover:xl:-translate-y-30'>
                        <Link href={card.path}>
                          <div className='flex items-center justify-center gap-x-2 text-[13px] font-bold tracking-[0.2rem] text-primary lg:text-lg xl:text-xl'>
                            {/* Title pt1 */}
                            <div className='translate-y-[500%] text-lg transition-all delay-100 duration-500 group-hover:translate-y-0'>
                              {card.title}
                            </div>
                            {/* Title pt2 */}
                            <div className='translate-y-[500%] text-sm transition-all delay-150 duration-500 group-hover:translate-y-0'>
                              {card.description}
                            </div>
                            {/* Icon */}
                            <div className='translate-y-[500%] text-xl transition-all delay-200 duration-500 group-hover:translate-y-0'>
                              <BsArrowRight />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Project Links  */}
                    <div className='lg:text-md mt-4 flex items-center justify-center gap-x-2 text-[13px] text-sm font-semibold tracking-[0.2rem] text-slate-400 xl:text-base'>
                      <div className='flex items-center justify-center space-x-4'>
                        <Link
                          target='_blank'
                          href={card.demo}
                          className='flex gap-x-3'
                        >
                          <TbLivePhoto className='h-8 w-8' /> Live Demo
                        </Link>

                        <Link
                          target='_blank'
                          href={card.yt}
                          className='flex gap-x-3'
                        >
                          <BsYoutube className='h-8 w-8' /> Youtube Demo
                        </Link>

                        <Link
                          target='_blank'
                          href={card.github}
                          className='flex gap-x-3'
                        >
                          <RiGithubLine className='h-8 w-8' /> Github
                        </Link>
                      </div>
                    </div>
                    {/*  */}
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
