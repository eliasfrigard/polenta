import Layout from '../components/Layouts/Default'
import Video from '../components/Video'

import Image from 'next/image'
import React from 'react'

import getYoutubeID from 'get-youtube-id'
import { createClient } from 'contentful'

export async function getStaticProps() {
  const contentful = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  })

  const videosRes = await contentful.getEntries({
    content_type: 'video',
  })

  return {
    props: {
      videos: videosRes.items,
    },
  }
}

export default function Music({ videos }) {
  console.log(videos)
  return (
    <Layout>
      <div id='hero' className='relative h-screen flex justify-center items-center shadow-xl'>
        <Image alt='Mountains' src='/polenta-9.jpg' fill className='object-cover' />
      </div>

      <div className='container my-12 md:my-32 flex justify-center items-center gap-8 md:gap-16 flex-wrap'>
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
    </Layout>
  )
}
