/* eslint-disable import/no-named-as-default-member */
'use client';

import {
  BsArrowRight,
  BsFillChatLeftTextFill,
  BsSignal,
  BsTelephoneFill,
  BsWhatsapp,
} from 'react-icons/bs';
import { ImEnvelop } from 'react-icons/im';
import { motion } from 'framer-motion';
import { fadeIn } from '#/variants';
import Socials from '@/c/Socials';
import { TbBrandLinktree } from 'react-icons/tb';
import Link from 'next/link';
import Layout from '@/c/Layout';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Head from 'next/head';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Button Click Confirmed');

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    e.target.reset();
  };

  return (
    <>
      <Head>
        <title>Steven Watkins | Contact Me</title>
      </Head>
      <main className='h-[100vh] bg-primary/30'>
        <Layout className='pt-50 xl:pt-4'>
          <div className='h-[100vh] xl:pl-8 xl:pr-24'>
            <div className='container mx-auto flex h-full items-center justify-center py-32 text-center  xl:text-left'>
              <div className='flex w-full flex-col '>
                {/* Text */}
                <motion.h1
                  variants={fadeIn('up', 0.2)}
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  className='h1 mb-12 text-center'
                >
                  Let&apos;s <span className='text-accent'>connect</span>
                </motion.h1>
                <div className='flex flex-col items-center xl:flex-row xl:gap-x-16'>
                  {/* Info & Buttons */}
                  <motion.div
                    className='mx-auto mb-6 flex w-full flex-1 flex-col items-start gap-y-4 xl:mb-0 xl:mr-4'
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                  >
                    <h3 className='text-2xl font-bold'>
                      My <span className='text-accent2'>Contact</span> Info
                    </h3>
                    <p className='text-left'>
                      I am always open to discuss new projects, creative ideas,
                      collaborations or other opportunities. Please feel free to
                      to reach out to me through your preferred mode of
                      communication.
                    </p>
                    <div className='flex items-center space-x-4'>
                      <TbBrandLinktree className='h-8 w-8 text-accent' />
                      <Link
                        href='https://www.flowcode.com/page/digitalalchemyst'
                        className='font-semibold underline hover:text-accent'
                      >
                        <span className='text-accent2'>Visit my Link Tree</span>{' '}
                        for a full scope of my projects
                      </Link>
                    </div>
                    <div className='flex items-center space-x-4'>
                      <ImEnvelop className='h-8 w-8 text-accent' />
                      <div className='flex flex-col items-start'>
                        <Link
                          href='mailto:digitalalchemiststudios@gmail.com'
                          target='_blank'
                          className='cursor-pointer hover:text-accent2'
                        >
                          StevenRWatkins86@gmail.com
                        </Link>
                        <Link
                          href='mailto:digitalalchemiststudios@gmail.com'
                          target='_blank'
                          className='cursor-pointer hover:text-accent2'
                        >
                          DigialAlchemistStudios@gmail.com
                        </Link>
                      </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                      <BsTelephoneFill className='h-8 w-8 text-accent' />
                      <div className='flex flex-col'>
                        <Link
                          href='tel:7204513767'
                          target='_blank'
                          className='cursor-pointer hover:text-accent2'
                        >
                          +1 (720) 451-3767
                        </Link>
                        <Link
                          href='tel:7209303876'
                          target='_blank'
                          className='cursor-pointer hover:text-accent2'
                        >
                          +1 (720) 930-3876
                        </Link>
                      </div>
                    </div>
                    <div className='mb-4 flex items-center gap-x-6 text-lg'>
                      <Link href='sms:7204513767'>
                        <BsFillChatLeftTextFill className='h-7 w-7 cursor-pointer text-accent hover:text-accent2' />
                      </Link>
                      <Link
                        href='https://signal.group/#CjQKIFmG5VRvMOLW8RsrO9Fo5C9nrJCfxV9TMKkW9qaexiVxEhBgwsiG6RorUJenFSjbISHI'
                        target='_blank'
                      >
                        <BsSignal className='h-7 w-7 cursor-pointer text-accent hover:text-accent2' />
                      </Link>
                      <Link
                        href='https://wa.me/7204513767?text=Hello'
                        target='_blank'
                      >
                        <BsWhatsapp className='h-7 w-7 cursor-pointer text-accent hover:text-accent2' />
                      </Link>
                    </div>

                    <Socials />
                  </motion.div>

                  {/* Form  */}
                  <motion.form
                    onSubmit={sendEmail}
                    ref={form}
                    className='mx-auto flex w-full flex-1 flex-col gap-y-4'
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                  >
                    {/* Group */}
                    <div className='flex gap-x-6'>
                      <input
                        type='text'
                        name='name'
                        placeholder='name'
                        className='input'
                      />
                      <input
                        type='text'
                        name='email'
                        placeholder='email'
                        className='input'
                      />
                    </div>
                    <input
                      type='text'
                      name='subject'
                      placeholder='subject'
                      className='input'
                    />
                    <textarea
                      name='message'
                      placeholder='message'
                      className='textarea'
                    />
                    <button
                      type='submit'
                      value='Send'
                      className='btn group flex max-w-[170px] items-center justify-center overflow-hidden rounded-xl border border-accent px-8 transition-all duration-300 hover:border-accent2'
                    >
                      <span className='transition-all duration-500 group-hover:-translate-x-[120%] group-hover:opacity-0'>
                        Let&apos;s Talk
                      </span>
                      <BsArrowRight className='absolute translate-x-[120%] text-[22px] opacity-0 transition-all delay-75 duration-500 group-hover:flex group-hover:-translate-x-0 group-hover:opacity-100' />
                    </button>
                  </motion.form>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
