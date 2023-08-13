'use client';

import Circles from '@/c/Circles';
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
import { FormEvent, useState } from 'react';
import Layout from '@/c/Layout'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Button Click Confirmed')

    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          location,
          phone,
          subject,
          message,
        }),
        headers: {
          'content-type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <Layout className='pt-16 xl:pt-4'>
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
          <div className='flex flex-col xl:flex-row xl:gap-x-16'>
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
                collaborations or other opportunities. Please feel free to to
                reach out to me through your preferred mode of communication.
              </p>
              <div className='flex items-center space-x-4'>
                <TbBrandLinktree className='h-8 w-8 text-accent' />
                <Link
                  href='https://www.flowcode.com/page/digitalalchemyst'
                  className='font-semibold underline'
                >
                  <span className='text-accent2'>Visit my Link Tree</span> for a
                  full scope of my projects
                </Link>
              </div>
              <div className='flex items-center space-x-4'>
                <ImEnvelop className='h-8 w-8 text-accent' />
                <div className='flex flex-col items-start'>
                  <p>StevenRWatkins86@gmail.com</p>
                  <p>DigialAlchemistStudios@gmail.com</p>
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <BsTelephoneFill className='h-8 w-8 text-accent' />
                <div className='flex flex-col'>
                  <p>+1 (720) 451-3767</p>
                  <p>+1 (720) 930-3876</p>
                </div>
              </div>
              <div className='mb-4 flex items-center gap-x-6 text-lg'>
                <BsFillChatLeftTextFill className='h-7 w-7 text-accent' />
                <BsSignal className='h-7 w-7 text-accent' />
                <BsWhatsapp className='h-7 w-7 text-accent' />
              </div>

              <Socials />
            </motion.div>

            {/* Form  */}
            <motion.form
              // ref={form}
              onSubmit={onSubmit}
              // action=''
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='name'
                  className='input'
                />
                <input
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='email'
                  className='input'
                />
              </div>
              <div className='flex gap-x-6'>
                <input
                  type='text'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder='location'
                  className='input'
                />
                <input
                  type='text'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='phone'
                  className='input'
                />
              </div>
              <input
                type='text'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder='subject'
                className='input'
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='message'
                className='textarea'
              />

              <button
                type='submit'
                onSubmit={onSubmit}
                // value='Send'
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
  );
};

export default Contact;
