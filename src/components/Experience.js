import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const WorkExp = ({ position, company, companyLink, time, location, duty }) => {
    const ref = useRef(null);
  const dutyItems = duty.split('<br>').map((item, index) => (
    <p key={index} className=''>
      {item}
    </p>
  ));
  return (
      <li ref={ref} className='items-left mx-auto my-8 flex w-[60%] flex-col justify-between first:mt-0 last:mb-0 items-start'>
        <LiIcon reference={ref}/>
      <motion.div
      initial={{y:75}}
      whileInView={{y:0}}
      transition={{duration:0.75, type:'spring'}}
      >
        <h4 className='text-2xl font-bold capitalize'>
          {position}&nbsp;{' '}
          <span className='font-semibold'>
            <a href={companyLink} className='cursor-pointer text-accent'>
              @{company}
            </a>
          </span>
        </h4>
        <span className='text-lg'>
          {time} | <span className='text-base text-accent2'>{location}</span>
        </span>
        <div className='ml-2 w-full text-sm font-medium'>{dutyItems}</div>
      </motion.div>
    </li>
  );
};

const WorkExperience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className='my-64'>
      <h2 className='mb-32 w-full text-center text-6xl font-bold'>
        Experience
      </h2>
      <div ref={ref} className='relative mx-auto w-[85%] '>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 h-full w-[4px] origin-top rounded-md bg-light mt-1'
        />

        <ul className='ml-4 flex w-full flex-col justify-between'>
          <WorkExp
            position='Full Stack Developer / Streaming Server Engineer'
            company='UnTelevised Media'
            companyLink='https://www.youtube.com/c/UnTelevisedMedia'
            time='2018 - 2021'
            location='Denver, CO'
            duty={`
    • Demonstrated ability to produce high-quality videos and articles on specific subjects, delivering outstanding results in time-sensitive situations.<br>
    • Successfully led rebranding, creating captivating logos and a compelling social media presence, significantly enhancing company visibility.<br>
    • Excelled as a frontline field reporter and photo/video journalist, providing unparalleled coverage of breaking high-profile events .<br>
    • Received accolades for fearless reporting from dangerous situations, displaying unwavering dedication to impactful news coverage.<br>
    • Excelled in news writing, editing, fact-checking, and captivating video content for breaking news, bolstering reputation as a trustworthy source.<br>
    • Regular freelance work for Ruptly & AJ+
            `}
          />

          <WorkExp
            position='Web Developer / Social Media Manager'
            company='Decima Tech Solutions'
            time='2015 - Present'
            location='New Orleans, LA'
            duty={`
    • Designed and developed a comprehensive multi-page website, increasing online visibility and generating more leads.<br>
    • Led the successful creation of the company's brand identity and logo, enhancing brand recognition and trust.<br>
    • Created compelling advertisements using jobsite photos and videos, resulting in increased inquiries and conversions.<br>
    • Produced engaging on-site video content, showcasing completed projects and strengthening the company's reputation.<br>
    • Implemented SEO and digital marketing strategies, improving search engine rankings and establishing the company as a top competitor.
  `}
          />

          <WorkExp
            position='Web Developer / Editor'
            company='A.R. Media'
            time='November 2013 - March 2019'
            location='Washington, D.C.'
            duty={`
    • Create time-sensitive promotional and educational videos on specific subjects for the media outlet.<br>
    • Design and manage multiple websites for the media group and partner organizations.<br>
    • Develop brand logos, including images and animated motion graphics.<br>
    • Establish distinctive brand identities and social media presence for 23 media outlets and organizations.<br>
    • Serve as a frontline field reporter and photo/video journalist covering breaking high-profile events.<br>
    • Earn recognition from peers for courageous coverage in hazardous situations.<br>
    • Write, edit, fact-check, publish news articles, and produce video content for over 20 independent news outlets and educational publications.
  `}
          />

          <WorkExp
            position='Graphic Designer / Motion Graphic Animator / Game Designer'
            company='Digital Alchemyst Studios'
            time='June 2016 - May 2019'
            location='Jackson, MS'
            duty={`
    • Developed a streamlined Auto-Terrain Texturing system in Unreal Engine 4, ensuring efficiency and functionality.<br>
    • Designed a Photo to PBR graph in Substance Designer for rapid rendering of PBR texture maps from photos, optimizing workflow speeds.<br>
    • Crafted expansive 3D environments and assets for open-world scenarios based on concept art and reference photography.<br>
    • Executed PBR texture rendering from photos or from scratch using Substance Designer.<br>
    • Utilized the Blueprint scripting system in Unreal Engine to program backend game functionality, enhancing the overall gaming experience.
  `}
          />

          <WorkExp
            position='Web Developer / Social Media Manager'
            company='Hemp Sector'
            time='February 2013 - August 2018'
            location='Internet'
            duty={`
    • Manage website content creation, ensuring engaging and informative material for visitors.<br>
    • Develop compelling social media content to generate interest and awareness for the hemp activist brand.<br>
    • Regularly update and maintain a multi-page HTML CSS-based website for seamless user experience.<br>
    • Stay informed about hemp and cannabis news, legislation, industry advancements, and technology.<br>
    • Thoroughly research and verify all website information for accuracy and credibility.<br>
    • Capture captivating photographs of hemp and cannabis-related products for effective presentation on social media platforms.
  `}
          />
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
