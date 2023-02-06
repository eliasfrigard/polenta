import React from 'react'

import Image from 'next/image'
import Layout from '../components/Layouts/Default'
import ContactForm from '../components/ContactForm'
import Event from '../components/Event'
import Title from '../components/Title'
import Video from '../components/Video'
import AnimateIn from '../components/AnimateIn'

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
      <AnimateIn>
        <div id='hero' className='relative h-screen md:h-[1050px] flex justify-center items-center shadow-xl'>
          <Image
            alt={hero.fields.title}
            src={'https:' + hero.fields.file.url}
            fill
            className='object-cover'
          />
          <div className='hidden md:centerContent container md:my-16 md:h-[450px] absolute translate-y-[525px] my-32'>
            <Image
              alt='Mountains'
              src='/splash.png'
              fill
              className='object-contain absolute translate-y-5 drop-shadow opacity-95'
            />
            <h1 className='text-5xl md:text-[110px] z-10 font-bold md:-translate-y-2 drop-shadow-2xl text-primary-500'>
              POLENTA
            </h1>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn opacityDuration={1000}>
        <div className='px-8 lg:px-0 container flex justify-center mb-12 md:mb-32 md:mt-[225px] pt-12 md:pt-32 '>
          <div className='-translate-x-[2px] prose prose-lg max-w-4xl prose-img:rounded-xl prose-img:shadow-lg prose-headings:underline leading-[2rem] text-center'>
            {documentToReactComponents(introduction)}
          </div>
        </div>
      </AnimateIn>

      <div className='px-8 md:px-16 my-16 md:my-16 flex justify-center items-center flex-col'>
        <div className='container'>
          <Video
            title={firstVideo.title}
            description={firstVideo.description}
            link={firstVideo.youTubeLink}
          />
        </div>
        <div className='container flex gap-8 xl:gap-12 mt-12 md:mt-16 flex-wrap lg:flex-nowrap'>
          <Video
            title={secondVideo.title}
            description={secondVideo.description}
            link={secondVideo.youTubeLink}
          />
          <Video
            title={thirdVideo.title}
            description={thirdVideo.description}
            link={thirdVideo.youTubeLink}
          />
        </div>
      </div>

      <AnimateIn opacityDuration={1000}>
        {concerts.length > 0 && (
          <div className='my-12 md:my-32'>
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
      </AnimateIn>

      <ContactForm></ContactForm>
    </Layout>
  )
}
