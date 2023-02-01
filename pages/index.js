import React from 'react'

import Layout from '../components/Layouts/Default'
import Image from 'next/image'
import ContactForm from '../components/ContactForm'
import Event from '../components/Event'
import Title from '../components/Title'

import md from 'markdown-it'
import axios from 'axios'

export default function Home() {
  const event = {
    date: Date.now(),
    venue: 'Teatro Salla Della Communita',
    city: 'Gothenburg',
    country: 'Sweden',
  }

  const [post, setPost] = React.useState('')

  React.useEffect(() => {
    const getPost = async () => {
      const { data: post } = await axios.get('/exampleContact.md')

      setPost(post)
    }

    getPost()
  }, [])

  return (
    <Layout>
      <div id='hero' className='relative h-screen md:h-[1050px] flex justify-center items-center shadow-xl'>
        <Image alt='Mountains' src='/polenta-hero.jpg' layout='fill' objectFit='cover' />
        <div className='hidden md:centerContent container md:my-16 md:h-[450px] absolute translate-y-[525px] my-32'>
          <Image
            alt='Mountains'
            src='/splash.png'
            layout='fill'
            objectFit='contain'
            className='absolute translate-y-5 drop-shadow opacity-95'
          />
          <h1 className='text-5xl md:text-[110px] z-10 font-bold md:-translate-y-2 drop-shadow-2xl text-primary-500'>
            POLENTA
          </h1>
        </div>
      </div>

      <div className='px-8 md:px-0 container flex justify-center mb-12 md:mb-32 md:mt-[225px] pt-12 md:pt-32 '>
        <div
          className='-translate-x-[2px] prose prose-lg md:prose-xl max-w-4xl prose-img:rounded-xl prose-img:shadow-lg prose-headings:underline leading-[2rem] text-center'
          dangerouslySetInnerHTML={{ __html: md().render(post) }}
        />
      </div>

      <div className='px-4 md:px-0 my-12 md:my-16 flex justify-center items-center flex-col'>
        <div className='container'>
          <div className='w-full centerContent flex-col'>
            <div className='centerContent text-center flex-col mb-6 gap-4'>
              <p className='text-2xl md:text-4xl text-center tracking-wide font-medium uppercase border-b border-secondary-500 border-opacity-20 pb-4 px-4'>
                Ykköspolska
              </p>
              <p className='italic opacity-70 tracking-wide font-medium'>
                Polenta Music - 2022 Festival Awards in Cambridge
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
        </div>
        <div className='container flex gap-12 md:gap-16 mt-12 md:mt-16 flex-wrap md:flex-nowrap'>
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
        </div>
      </div>

      <div className='md:my-32'>
        <Title title='upcoming concerts' />

        <div className='px-4 md:px-0 md:my-16 bg-primary-500 flex justify-center items-center flex-col'>
          <Event date={event.date} venue={event.venue} city={event.city} country={event.country} first />
          <Event date={event.date} venue={event.venue} city={event.city} country={event.country} />
          <Event date={event.date} venue={event.venue} city={event.city} country={event.country} />
          <Event date={event.date} venue={event.venue} city={event.city} country={event.country} />
          <Event date={event.date} venue={event.venue} city={event.city} country={event.country} last />
        </div>
      </div>

      <ContactForm></ContactForm>
    </Layout>
  )
}
