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
    <li
      ref={ref}
      className='items-left mx-auto my-8 flex w-[60%] flex-col items-start justify-between first:mt-0 last:mb-0'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 75 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.75, type: 'spring' }}
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
        <div className='ml-2 w-full text-xs font-medium md:text-sm'>
          {dutyItems}
        </div>
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
    <div className='h-full w-full'>
      <h2 className='mb-32 w-full text-center text-6xl font-bold'>
        Experience
      </h2>
      <div ref={ref} className='relative mx-auto w-[85%] '>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 mt-1 h-full w-[4px] origin-top rounded-md bg-light'
        />

        <ul className='ml-4 flex w-full flex-col justify-between'>
          <WorkExp
            position='Full Stack Developer / Streaming Server Engineer'
            company='UnTelevised Media'
            companyLink='https://untelevised.media'
            time='2019 - Present'
            location='Denver, CO'
            duty={`
    • Orchestrated the seamless transition through three website iterations, showcasing proficiency in WordPress, designing a MongoDB-based blog-style site, and culminating in the development of the current site using Next.js & Sanity.
    • Led the creation of a customized CMS Interface and backend Schema, enhancing content production control and quality.
    • Innovated custom live streaming software, optimizing video production and elevating the streaming experience.
    • Engineered an advanced Live Stream server, enabling on-location broadcasts to the studio for superior composure and broadcast quality.
    • Innovated a dynamic News Ticker for live stream production, leveraging advanced technology to extract headlines directly from website content, enhancing real-time engagement and information delivery.
            `}
          />

          <WorkExp
            position='Web Developer / Social Media Manager'
            company='Decima Tech Solutions'
            companyLink='http://decima-tech.dx.am'
            time='2015 - Present'
            location='New Orleans, LA'
            duty={`
    • Designed and developed a comprehensive multi-page website, increasing online visibility and generating more leads.
    • Led the successful creation of the company's brand identity and logo, enhancing brand recognition and trust.
    • Created compelling advertisements using jobsite photos and videos, resulting in increased inquiries and conversions.
    • Produced engaging on-site video content, showcasing completed projects and strengthening the company's reputation.
    • Implemented SEO and digital marketing strategies, improving search engine rankings and establishing the company as a top competitor.
  `}
          />

          <WorkExp
            position='Web Developer / Editor'
            company='A.R. Media'
            time='November 2013 - March 2019'
            location='Washington, D.C.'
            duty={`
    • Create time-sensitive promotional and educational videos on specific subjects for the media outlet.
    • Design and manage multiple websites for the media group and partner organizations.
    • Develop brand logos, including images and animated motion graphics.
    • Establish distinctive brand identities and social media presence for 23 media outlets and organizations.
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
