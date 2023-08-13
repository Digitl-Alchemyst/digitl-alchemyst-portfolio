import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialData.map((name, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex h-full flex-col items-center gap-x-8 md:flex-row'>
              {/* Reviewer Info */}
              <div className='relative mx-auto flex w-full max-w-[350px] flex-col items-center xl:mx-0 xl:justify-center '>
                <div className='flex flex-col justify-center text-center '>
                  {/* Avatar */}
                  <div className='mx-auto mb-2'>
                    <Image src={name.image} alt='' width={100} height={100} />
                  </div>
                  {/* Name */}
                  <div className='text-lg'>{name.name}</div>
                  {/* Position  */}
                  <div className='text-[12px] font-light capitalize tracking-widest'>
                    {name.position}
                  </div>
                </div>
              </div>
              {/* Quote */}

              <div className='relative flex flex-1 flex-col justify-center before:w-[1px] xl:pl-10  xl:before:absolute xl:before:left-0 xl:before:h-[200px] xl:before:bg-white/20'>
                {/* Quotes "" */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4-xl mx-auto text-white/20 md:mx-0 xl:text-6xl' />
                </div>
                {/* Message  */}
                <div className='text-center md:pr-14 md:text-left lg:pr-12 xl:pr-10 xl:text-lg text-sm sm:text-base'>
                  {name.message}
                </div>
                {/* Quotes "" */}
                <div className='mt-4 flex justify-end'>
                  <FaQuoteRight className='text-4-xl mx-auto text-white/20 md:mx-0 xl:text-6xl' />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
