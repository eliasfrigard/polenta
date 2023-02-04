import Layout from '../components/Layouts/Default'
import Image from 'next/image'
import React from 'react'

import Card from '../components/Card.js'

import md from 'markdown-it'

export default function Music() {
  return (
    <Layout>
      <div id='hero' className='relative h-screen flex justify-center items-center shadow-xl'>
        <Image alt='Mountains' src='/polenta-9.jpg' fill className='object-cover' />
      </div>

      <div className='container my-12 md:my-32 flex justify-center items-center gap-8 md:gap-16 flex-wrap'>
        <div className='container grid grid-flow-row grid-cols-3 gap-12 md:gap-16'>
          <div className='w-full centerContent flex-col'>
            <div className='centerContent text-center flex-col mb-6 gap-4'>
              <p className='text-2xl md:text-3xl text-center tracking-wide font-medium uppercase border-b border-secondary-500 border-opacity-20 pb-4 px-4'>
                Kesän Tullessa
              </p>
              <p className='italic opacity-70 tracking-wide font-medium'>Polenta Music - 2019</p>
            </div>
            <iframe
              className='video'
              src='https://www.youtube.com/embed/F0Xzzrm_n_w'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              loading='lazy'
            ></iframe>
          </div>
          <div className='w-full centerContent flex-col'>
            <div className='centerContent text-center flex-col mb-6 gap-4'>
              <p className='text-2xl md:text-3xl text-center tracking-wide font-medium uppercase border-b border-secondary-500 border-opacity-20 pb-4 px-4'>
                Konstan Parempi Valssi
              </p>
              <p className='italic opacity-70 tracking-wide font-medium'>
                Polenta Music - 2022 Festival Awards Bla Bla Bla
              </p>
            </div>
            <iframe
              className='video'
              src='https://www.youtube.com/embed/bklW0v_nf60'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              loading='lazy'
            ></iframe>
          </div>
          <div className='w-full centerContent flex-col'>
            <div className='centerContent text-center flex-col mb-6 gap-4'>
              <p className='text-2xl md:text-3xl text-center tracking-wide font-medium uppercase border-b border-secondary-500 border-opacity-20 pb-4 px-4'>
                Konstan Parempi Valssi
              </p>
              <p className='italic opacity-70 tracking-wide font-medium'>
                Polenta Music - 2022 Festival Awards Bla Bla Bla
              </p>
            </div>
            <iframe
              className='video'
              src='https://www.youtube.com/embed/xchqRkMxl2c'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              loading='lazy'
            ></iframe>
          </div>
          <div className='w-full centerContent flex-col'>
            <div className='centerContent text-center flex-col mb-6 gap-4'>
              <p className='text-2xl md:text-3xl text-center tracking-wide font-medium uppercase border-b border-secondary-500 border-opacity-20 pb-4 px-4'>
                Konstan Parempi Valssi
              </p>
              <p className='italic opacity-70 tracking-wide font-medium'>
                Polenta Music - 2022 Festival Awards Bla Bla Bla
              </p>
            </div>
            <iframe
              className='video'
              src='https://www.youtube.com/embed/UpaJ4JEoxy8'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              loading='lazy'
            ></iframe>
          </div>
          <div className='w-full centerContent flex-col'>
            <div className='centerContent text-center flex-col mb-6 gap-4'>
              <p className='text-2xl md:text-3xl text-center tracking-wide font-medium uppercase border-b border-secondary-500 border-opacity-20 pb-4 px-4'>
                Konstan Parempi Valssi
              </p>
              <p className='italic opacity-70 tracking-wide font-medium'>
                Polenta Music - 2022 Festival Awards Bla Bla Bla
              </p>
            </div>
            <iframe
              className='video'
              src='https://www.youtube.com/embed/bklW0v_nf60'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              loading='lazy'
            ></iframe>
          </div>
          <div className='w-full centerContent flex-col'>
            <div className='centerContent text-center flex-col mb-6 gap-4'>
              <p className='text-2xl md:text-3xl text-center tracking-wide font-medium uppercase border-b border-secondary-500 border-opacity-20 pb-4 px-4'>
                Konstan Parempi Valssi
              </p>
              <p className='italic opacity-70 tracking-wide font-medium'>
                Polenta Music - 2022 Festival Awards Bla Bla Bla
              </p>
            </div>
            <iframe
              className='video'
              src='https://www.youtube.com/embed/bklW0v_nf60'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}
