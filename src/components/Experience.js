import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const WorkExp = ({
  position,
  company,
  companyLink,
  time,
  location,
  duties,
  index,
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className='items-left mx-auto my-8 flex w-[60%] flex-col items-start justify-between first:mt-0 last:mb-0'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 75 }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 0.85,
          type: 'spring',
          delay: index * 0.3, // Slower staggered delay
        }}
      >
        <h4 className='text-2xl font-bold capitalize'>
          {position}&nbsp;{' '}
          <span className='font-semibold'>
            <a
              href={companyLink || '#'}
              className={`cursor-pointer ${
                companyLink ? 'text-accent' : 'text-accent opacity-80'
              }`}
            >
              @{company}
            </a>
          </span>
        </h4>
        <span className='text-lg'>
          {time} | <span className='text-base text-accent2'>{location}</span>
        </span>
        <ul className='ml-4 mt-2 w-full list-disc space-y-1 text-xs font-medium md:text-sm'>
          {duties.map((duty, i) => (
            <li key={i} className='pl-1'>
              {duty}
            </li>
          ))}
        </ul>
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

  const experienceData = [
    {
      position:
        'Sr. Full-Stack Next.JS Developer / Cryptography Engineer / Chief Technology Officer',
      company: 'Access Vault',
      companyLink: 'https://accessvault.app/',
      time: 'March 2025 - May 2025',
      location: 'Remote',
      duties: [
        'Engineered a comprehensive credential management system with military-grade encryption including CRYSTALS-Kyber and Dilithium post-quantum cryptography implementation, protecting sensitive business credentials against future quantum computing attacks',
        'Implemented zero-knowledge encryption architecture with secure memory management for best-in-class protection of sensitive business credentials',
        'Built a multi-business credential system with permission controls and intuitive drag-and-drop organization interface',
        'Integrated Stripe payment processing with custom subscription tiers, enabling seamless billing management and feature entitlements',
        'Created a responsive UI framework using Tailwind CSS and ShadCN with custom animations for an exceptional user experience',
        'Implemented secure session management with cross-tab synchronization, automatic timeouts, and protection against common web vulnerabilities',
        'Built a scalable database schema with Supabase (PostgreSQL) featuring efficient data structures, indexing, and relational integrity for optimal performance and data consistency',
        'Created an audit logging system for comprehensive user action tracking, enabling advanced monitoring and compliance with data protection regulations',
      ],
    },
    {
      position:
        'Full-Stack Next.JS Developer / AI Integration Specialist / Chief Product Innovator',
      company: 'Bot Forge',
      companyLink: 'https://bot-forge-psi.vercel.app/',
      time: 'February 2025 - Present',
      location: 'Remote',
      duties: [
        'Architected and developed a full-stack application for creating and managing AI chatbots with custom knowledge bases',
        'Implemented a comprehensive subscription system with Stripe integration, supporting multiple pricing tiers and usage limits',
        'Built a responsive dashboard with real-time analytics, allowing users to monitor chatbot performance metrics',
        'Created an embeddable widget system enabling customers to easily integrate chatbots into any website with a single line of code',
        'Designed and implemented a scalable database schema using PostgreSQL with GraphQL for efficient data fetching',
        'Developed a secure authentication system with role-based access control using Clerk',
        'Integrated with OpenAI and Claude APIs to enable natural language processing and contextual responses',
        'Implemented comprehensive testing with Jest to ensure application reliability',
        'Optimized performance for mobile and desktop devices with responsive design principles',
        'Followed accessibility best practices to ensure the application is usable by everyone',
        'Built a complete SaaS solution from concept to deployment within 3 months',
      ],
    },
    {
      position:
        'Full-Stack Next.JS Developer / AI Integration Specialist / Chief Product Innovator',
      company: 'Content Pilot',
      companyLink: 'https://content-pilot.ai/',
      time: 'March 2025 - Present',
      location: 'Remote',
      duties: [
        'Developed a sophisticated AI content transformation platform in just 3 days as part of a competitive hackathon with over 6,000 initial participants, where fewer than 250 completed their projects for final judging',
        'Engineered an intelligent AI agent system integrating multiple models (Claude, GPT, Gemini) with specialized tools for generating blogs, transcripts, metadata, and thumbnails from video content',
        'Implemented model-switching capabilities allowing users to toggle between AI models for different content generation tasks',
        'Built a robust backend with Convex DB for efficient data management and Clerk for authentication and Schematic for payment and feature entitlements',
        'Created an intuitive, fully responsive UI using Tailwind CSS and Shadcn with a focus on accessibility, ensuring a seamless experience across all devices',
        'Recognized as the most significant community contributor during the hackathon, providing extensive support and troubleshooting assistance to fellow developers facing technical challenges with their projects',
        'Architected a YouTube integration system that extracts, analyzes, and processes video content, including automatic transcript generation',
        'Designed and implemented a usage system for AI features, incorporating sophisticated quota management and clear visualization of entitlements',
        'Extended base requirements with additional features, demonstrating exceptional problem-solving skills',
      ],
    },
    {
      position: 'React Native Architect / Chief Product Innovator',
      company: 'Catch Lunch',
      companyLink: 'https://catch-lunch.com/',
      time: 'December 2024 - Present',
      location: 'Remote',
      duties: [
        'Completed a month-long hackathon with 98 final entries from 2,600+ participants by building a group dining coordination app—despite having no prior mobile development experience',
        'Engineered a sophisticated React Native mobile application leveraging Supabase real-time features to enable live collaborative features including instant group voting updates, dynamic bill calculations, and synchronized ride coordination',
        'Implemented comprehensive functionalities including restaurant discovery and voting system, smart bill splitting algorithms, and an integrated ride-sharing platform to create a seamless group dining experience',
        'Led the entire product development life-cycle as both technical architect and product innovator, resulting in a highly-rated application that transforms lunch coordination for teams and friend groups',
        'Created an intuitive user interface focused on solving common group dining pain points, including eliminating email chains, simplifying payment calculations, and streamlining transportation logistics',
      ],
    },
    {
      position:
        'Chief Technology Officer / Sr Automation Engineer / Stake Holder',
      company: 'Information Affiliates',
      companyLink: 'https://exbankerstoolkit.com/',
      time: 'October 2024 - February 2025',
      location: 'Remote',
      duties: [
        'Architected and implemented a sophisticated automation ecosystem using n8n, developing custom nodes and workflows that streamlined content management, client outreach, and business operations across multiple web properties',
        'Engineered an innovative integration between n8n and Sanity CMS using clean architecture principles, enabling seamless content delivery and dynamic updates for financial tools including mortgage calculators and investment analysis features',
        'Designed and deployed advanced client discovery automation systems using custom n8n workflows, incorporating AI-driven lead qualification and automated outreach sequences that increased client engagement by streamlining the consultation process',
        'Built scalable technical infrastructure connecting multiple platforms and services, implementing clean architecture patterns to ensure maintainable, testable code while enabling rapid feature development and platform expansion',
        'Led the development of interactive financial tools and calculators, integrating them seamlessly with the content management system to provide valuable resources for navigating the vast financial world',
      ],
    },
    {
      position: 'DevOps Architect / Core Contributor',
      company: 'bolt.diy',
      companyLink: 'https://github.com/bolt-diy',
      time: 'November 2024 - Present',
      location: 'Remote',
      duties: [
        "Serve as a core maintainer for bolt.diy's GitHub repository, managing pull requests, code reviews, and repository maintenance while ensuring code quality and project standards across multiple contributors",
        "Led the implementation of several key features including terminal integration for LLM command outputs, Git clone functionality, and automated package detection for imports, significantly enhancing the platform's development capabilities",
        'Architect and maintain DevOps pipelines incorporating Docker containerization, streamlining the deployment process and enabling consistent development environments across the contributor base',
        'Guide agile development practices as Scrum Master, coordinating with a global team of open-source contributors to prioritize and implement high-impact features such as error detection, terminal integration, and starter template options',
        'Spearhead repository organization initiatives including documentation improvements, issue tracking refinement, and PR template standardization to facilitate smoother contributor onboarding and project scaling',
      ],
    },
    {
      position: 'Chief Technology Officer / Scrum Master / Founder',
      company: 'RFD',
      companyLink: '#',
      time: 'September 2024 - Present',
      location: 'Remote',
      duties: [
        'Lead strategic technical vision and execution for a stealth-mode project, managing a diverse team of 6 senior developers across 5 countries, effectively bridging 13-hour time zone differences and 4 native languages to deliver cohesive product development',
        'Orchestrate complex international development operations by implementing asynchronous communication frameworks, cultural-aware collaboration strategies, and timezone-optimized agile ceremonies to maintain high team productivity and engagement',
        'Drive architectural decision-making and technical strategy while mentoring team members, fostering a culture of innovation and excellence across distributed development teams',
        'Partner with CEO to establish corporate structure and governance, balancing technical objectives with business goals while maintaining strict confidentiality requirements',
        'Design and implement scalable agile methodologies tailored for a globally distributed team, ensuring clear communication channels, efficient knowledge sharing, and consistent project momentum across multiple time zones',
      ],
    },
    {
      position:
        'Sr. Next.js Architect / AI Integration Specialist & Prompt Architect / Chief Product Innovator',
      company: 'DocuBot',
      companyLink: 'https://docubot.app/',
      time: 'July 2024 - Present',
      location: 'Remote',
      duties: [
        'Developed an AI-powered document reader chatbot in 3 days, competing against 4,000 contestants',
        'Won second place in the competition, demonstrating exceptional skills in AI and SaaS development',
        'Implemented document vectorization using Pinecone and LangChain for efficient information retrieval',
        'Implemented robust rate limiting system for AI conversations, optimizing resource usage and ensuring fair access while maintaining high performance',
        'Integrated Google Firebase/Firestore for backend operations and Stripe for subscription payments',
        'Recognized as the most helpful participant for assisting fellow developers with bug resolution',
        'Showcased ability to work under pressure, completing a complex project within a tight deadline',
        'Implemented markdown styling and code markup with syntax highlighting for AI responses, enhancing readability and user experience',
        'Demonstrated proficiency in rapidly learning and applying cutting-edge AI technologies working with a fresh update to Langchain',
      ],
    },
    {
      position: 'Next.js Specialist / Front-End Developer (UI/UX)',
      company: "Men's Wearhouse",
      companyLink: 'https://menswearhouse.com/',
      time: 'January 2024 - May 2024',
      location: 'Remote',
      duties: [
        "Led front-end UI refresh of menswearhouse.com, enhancing user experience and modernizing the site's aesthetic while maintaining brand consistency",
        'Executed the migration from React to Next.js, leveraging server-side rendering and advanced caching features to significantly improve page load times and overall performance',
        'Optimized data fetching processes by implementing Next.js server-side rendering, resulting in faster initial page loads and improved SEO',
        "Utilized Next.js's built-in caching capabilities to reduce server load and further enhance site speed, particularly for frequently accessed product pages and categories",
        'Collaborated with the back-end team to ensure smooth integration of the new front-end architecture with existing systems and databases',
        'Implemented performance monitoring tools to quantify improvements, demonstrating a 92% reduction in average page load time and 90% increase in Google Core Web Vitals scores',
      ],
    },
    {
      position: 'Next.js 14.2 / Typescript / Tailwind CSS / Sanity Studio',
      company: 'Steven Watkins Photography',
      companyLink: 'https://stevenwatkinsphotography.com/',
      time: 'May 2023',
      location: 'Remote',
      duties: [
        'Developed a comprehensive Next.js application for a professional photography portfolio, leveraging modern web technologies such as TypeScript, Tailwind CSS, and React',
        'Implemented SEO friendly metadata generation for both blog posts and gallery pages, ensuring high visibility on search engines like Google',
        'Integrated third-party services including Google Tag Manager, Vercel Analytics, and EmailJS for enhanced functionality and analytics capabilities',
        'Utilized Sanity.io for content management, enabling dynamic rendering of blog posts and gallery pages based on real-time data fetched from the Sanity back-end',
        'Employed responsive design techniques to ensure the website provides an optimal viewing experience across a wide range of devices, from desktops to mobile phones',
        'Incorporated accessibility features throughout the application, making it accessible to users with disabilities',
        'Set up a deployment pipeline using Vercel, automating the build and deployment process for seamless updates and roll-outs',
        'Optimized image loading and performance using Next.js Image component and lazy-loading strategies, significantly improving page load times and overall user experience',
      ],
    },
    {
      position:
        'Sr. Next.js Developer / Infrastructure DevOps Engineer (NGINX)',
      company: 'UnTelevised Media',
      companyLink: 'https://untelevised.media',
      time: 'January 2019 - March 2024',
      location: 'Denver, CO',
      duties: [
        'Spearheaded website evolution through three iterations, progressing from WordPress to a MERN Stack based blog, and finally to a Next.js & Sanity-powered platform, demonstrating versatility and continuous improvement',
        'Designed and implemented a custom CMS interface and back-end schema using Next Sanity, significantly enhancing content management capabilities and editorial control',
        'Engineered and deployed custom NGINX based live streaming infrastructure, enabling high-quality field-to-studio broadcasts and revolutionizing video production workflows, resulting in elevated broadcast quality and improved overall production value',
        'Innovated a versatile dynamic News Ticker using GROK query language, automating real-time headline extraction from website content. This single instance seamlessly integrates with both live broadcasts and the news site header, enhancing viewer engagement across platforms while demonstrating efficient code reuse',
        'Optimized server caching through Next.js App Router features, resulting in dramatically improved site speed and content delivery performance',
        "Consistently leveraged cutting-edge web technologies to enhance user experience, streamline operations, and maintain UnTelevised Media's competitive edge in digital news delivery",
      ],
    },
    {
      position: 'Web Developer / Social Media Manager',
      company: 'Decima Tech Solutions',
      companyLink: 'http://decima-tech.dx.am',
      time: '2015 - Present',
      location: 'New Orleans, LA',
      duties: [
        'Designed and developed a comprehensive multi-page website, increasing online visibility and generating more leads',
        "Led the successful creation of the company's brand identity and logo, enhancing brand recognition and trust",
        'Created compelling advertisements using jobsite photos and videos, resulting in increased inquiries and conversions',
        "Produced engaging on-site video content, showcasing completed projects and strengthening the company's reputation",
        'Implemented SEO and digital marketing strategies, improving search engine rankings and establishing the company as a top competitor',
      ],
    },
    {
      position: 'Web Developer / Editor',
      company: 'A.R. Media',
      companyLink: '',
      time: 'November 2013 - March 2019',
      location: 'Washington, D.C.',
      duties: [
        'Create time-sensitive promotional and educational videos on specific subjects for the media outlet',
        'Design and manage multiple websites for the media group and partner organizations',
        'Develop brand logos, including images and animated motion graphics',
        'Establish distinctive brand identities and social media presence for 23 media outlets and organizations',
      ],
    },
    {
      position: 'Graphic Designer / Motion Graphic Animator / Game Designer',
      company: 'Digital Alchemyst Studios',
      companyLink: '',
      time: 'June 2016 - May 2019',
      location: 'Jackson, MS',
      duties: [
        'Developed a streamlined Auto-Terrain Texturing system in Unreal Engine 4, ensuring efficiency and functionality',
        'Designed a Photo to PBR graph in Substance Designer for rapid rendering of PBR texture maps from photos, optimizing workflow speeds',
        'Crafted expansive 3D environments and assets for open-world scenarios based on concept art and reference photography',
        'Executed PBR texture rendering from photos or from scratch using Substance Designer',
        'Utilized the Blueprint scripting system in Unreal Engine to program backend game functionality, enhancing the overall gaming experience',
      ],
    },
    {
      position: 'Web Developer / Social Media Manager',
      company: 'Hemp Sector',
      companyLink: '',
      time: 'February 2013 - August 2018',
      location: 'Internet',
      duties: [
        'Manage website content creation, ensuring engaging and informative material for visitors',
        'Develop compelling social media content to generate interest and awareness for the hemp activist brand',
        'Regularly update and maintain a multi-page HTML CSS-based website for seamless user experience',
        'Stay informed about hemp and cannabis news, legislation, industry advancements, and technology',
        'Thoroughly research and verify all website information for accuracy and credibility',
        'Capture captivating photographs of hemp and cannabis-related products for effective presentation on social media platforms',
      ],
    },
  ];

  return (
    <div className='h-full w-full'>
      <h2 className='mb-32 w-full text-center text-6xl font-bold'>
        Experience
      </h2>
      <div ref={ref} className='relative mx-auto w-[85%] '>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 mt-1 h-full w-[4px] origin-top rounded-md bg-light'
          transition={{ duration: 1.5 }} // Slower line fill animation
        />

        <ul className='ml-4 flex w-full flex-col justify-between'>
          {experienceData.map((experience, index) => (
            <WorkExp
              key={index}
              position={experience.position}
              company={experience.company}
              companyLink={experience.companyLink}
              time={experience.time}
              location={experience.location}
              duties={experience.duties}
              index={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
