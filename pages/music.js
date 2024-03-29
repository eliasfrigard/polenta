import Layout from '../components/Layouts/Default'
import Video from '../components/Video'
import Album from '../components/Album'
import AnimateIn from '../components/AnimateIn'

import Image from 'next/image'
import React from 'react'

import { createClient } from 'contentful'

export async function getStaticProps() {
  const contentful = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  })

  const videosRes = await contentful.getEntries({
    content_type: 'video',
  })

  const albumRes = await contentful.getEntries({
    content_type: 'album',
  })

  const pageRes = await contentful.getEntries({
    content_type: 'musicPage',
  })

  const page = pageRes.items[0].fields

  return {
    props: {
      hero: page.heroImage,
      mobileHero: page.mobileHeroImage,
      heroPosition: page.heroPosition,
      heroImageActive: page.heroImageActive,
      albums: albumRes.items,
      videos: videosRes.items,
      pageTitle: page.name,
      pageDescription: page.description,
    },
  }
}

export default function Music({
  hero,
  heroPosition,
  videos,
  albums,
  mobileHero,
  heroImageActive,
  pageTitle,
  pageDescription,
}) {
  return (
    <Layout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      imageUrl={`https: + ${hero.fields.file.url}`}
      pageUrl='/music'
    >
      {heroImageActive && (
        <AnimateIn opacityDuration={1000}>
          <div id='hero' className='relative heroHeight flex justify-center items-center shadow-xl'>
            <Image
              alt={hero.fields?.title}
              src={'https:' + hero.fields.file.url}
              fill
              className={`hidden lg:block object-cover object-${heroPosition}`}
            />
            <Image
              alt={mobileHero.fields?.title}
              src={'https:' + mobileHero.fields.file.url}
              fill
              className='lg:hidden object-cover object-bottom'
            />
          </div>
        </AnimateIn>
      )}

      <div className='container my-12 md:my-32 flex justify-center items-center gap-8 md:gap-20 flex-wrap'>
        <div className='container grid grid-flow-row lg:grid-cols-2 gap-8 md:gap-12 px-8'>
          {videos.map((video, index) => (
            <Video
              prominent={index === 0}
              key={video.sys.id}
              title={video.fields?.title}
              description={video.fields.description}
              link={video.fields.youTubeLink}
            />
          ))}
        </div>
      </div>

      {albums.map((album) => (
        <Album
          key={album.sys.id}
          title={album.fields?.title}
          description={album.fields.description}
          text={album.fields.text}
          cover={'https:' + album.fields.cover.fields.file.url}
          spotify={album.fields.spotify}
        />
      ))}
    </Layout>
  )
}
