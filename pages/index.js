import React from 'react'

import Image from 'next/image'
import Layout from '../components/Layouts/Default'
import ContactForm from '../components/ContactForm'
import Event from '../components/Event'
import Title from '../components/Title'

import getYoutubeID from 'get-youtube-id'
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export async function getStaticProps() {
  const contentful = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  })

  var gt = new Date().toISOString()

  const concertsRes = await contentful.getEntries({
    content_type: 'concert',
    order: 'fields.dateTime',
    'fields.dateTime[gte]': gt,
  })

  const homePageRes = await contentful.getEntries({
    content_type: 'homePage',
  })

  const homePage = homePageRes.items[0].fields

  return {
    props: {
      hero: homePage.pageImage,
      introduction: homePage.introduction,
      videos: homePage.videos,
      concerts: concertsRes.items,
    },
  }
}

export default function Home({ hero, introduction, videos, concerts }) {
  const firstVideo = videos[0].fields
  const secondVideo = videos[1].fields
  const thirdVideo = videos[2].fields

  return (
    <Layout>
      <div id='hero' className='relative h-screen md:h-[1050px] flex justify-center items-center shadow-xl'>
        <Image alt={hero.fields.title} src={'https:' + hero.fields.file.url} fill />
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
        <div className='-translate-x-[2px] prose prose-lg md:prose-xl max-w-4xl prose-img:rounded-xl prose-img:shadow-lg prose-headings:underline leading-[2rem] text-center'>
          {documentToReactComponents(introduction)}
        </div>
      </div>

      <div className='px-4 md:px-0 my-12 md:my-16 flex justify-center items-center flex-col'>
        <div className='container'>
          <div className='w-full centerContent flex-col'>
            <div className='centerContent text-center flex-col mb-6 gap-4'>
              <p className='text-2xl md:text-4xl text-center tracking-wide font-medium uppercase border-b border-secondary-500 border-opacity-20 pb-4 px-4'>
                {firstVideo.title}
              </p>
              <p className='italic opacity-70 tracking-wide font-medium'>{firstVideo?.description}</p>
            </div>
            <iframe
              className='video'
              src={`https://www.youtube.com/embed/${getYoutubeID(firstVideo.youTubeLink)}`}
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
                {secondVideo.title}
              </p>
              <p className='italic opacity-70 tracking-wide font-medium'>{secondVideo?.description}</p>
            </div>
            <iframe
              className='video'
              src={`https://www.youtube.com/embed/${getYoutubeID(secondVideo.youTubeLink)}`}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              loading='lazy'
            ></iframe>
          </div>
          <div className='w-full centerContent flex-col'>
            <div className='centerContent text-center flex-col mb-6 gap-4'>
              <p className='text-2xl md:text-3xl text-center tracking-wide font-medium uppercase border-b border-secondary-500 border-opacity-20 pb-4 px-4'>
                {thirdVideo.title}
              </p>
              <p className='italic opacity-70 tracking-wide font-medium'>{thirdVideo?.description}</p>
            </div>
            <iframe
              className='video'
              src={`https://www.youtube.com/embed/${getYoutubeID(thirdVideo.youTubeLink)}`}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </div>

      {concerts.length > 0 && (
        <div className='md:my-32'>
          <Title title='upcoming concerts' />

          <div className='px-4 md:px-0 md:my-16 bg-primary-500 flex justify-center items-center flex-col'>
            {concerts.map((concert, index) => (
              <Event
                key={concert.sys.id}
                date={concert.fields.dateTime}
                venue={concert.fields.venue}
                city={concert.fields.address}
                country={concert.fields.country}
                first={index === 0}
                last={index + 1 === concerts.length}
              />
            ))}
          </div>
        </div>
      )}

      <ContactForm></ContactForm>
    </Layout>
  )
}
