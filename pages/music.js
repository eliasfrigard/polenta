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
      albums: albumRes.items,
      videos: videosRes.items,
    },
  }
}

export default function Music({ hero, videos, albums }) {
  return (
    <Layout>
      <AnimateIn opacityDuration={1000}>
        <div id='hero' className='relative h-screen centerContent shadow-xl'>
          <Image
            alt={hero.fields.title}
            src={'https:' + hero.fields.file.url}
            fill
            className='object-cover'
          />{' '}
        </div>
      </AnimateIn>

      <div className='container my-12 md:my-32 flex justify-center items-center gap-8 md:gap-20 flex-wrap'>
        <div className='container grid grid-flow-row lg:grid-cols-2 gap-8 md:gap-12 px-8'>
          {videos.map((video) => (
            <Video
              key={video.sys.id}
              title={video.fields.title}
              description={video.fields.description}
              link={video.fields.youTubeLink}
            />
          ))}
        </div>
      </div>

      {albums.map((album) => (
        <Album
          key={album.sys.id}
          title={album.fields.title}
          description={album.fields.description}
          text={album.fields.text}
          cover={'https:' + album.fields.cover.fields.file.url}
          spotify={album.fields.spotify}
        />
      ))}
    </Layout>
  )
}
