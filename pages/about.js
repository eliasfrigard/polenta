import Layout from '../components/Layouts/Default'
import Image from 'next/image'
import React from 'react'

import Card from '../components/Card.js'

import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export async function getStaticProps() {
  const contentful = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  })

  const pageRes = await contentful.getEntries({
    content_type: 'aboutPage',
  })

  const page = pageRes.items[0].fields

  return {
    props: {
      hero: page.heroImage,
      biography: page.biography,
    },
  }
}

export default function About({ biography, hero }) {
  return (
    <Layout>
      <div id='hero' className='relative h-screen flex justify-center items-center shadow-xl'>
        <Image
          alt={hero.fields.title}
          src={'https:' + hero.fields.file.url}
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className='px-6 md:px-0 my-12 md:my-32 flex justify-center items-center flex-col'>
        <div className='-translate-x-[2px] prose prose-lg md:prose-xl max-w-4xl prose-img:rounded-xl prose-img:shadow-lg prose-headings:underline leading-[2rem] text-center'>
          {documentToReactComponents(biography)}
        </div>
      </div>

      <div className='container my-12 md:my-32 flex justify-center items-center gap-8 md:gap-16 flex-wrap'>
        <Card name='Veera Kuisma' instrument='5-string violin' />
        <Card name='Aino Kinnunen' instrument='Violin' />
        <Card name='Olli Sippola' instrument='Violin' />
        <Card name='Mikko Malmivaara' instrument='6-string guitar' />
      </div>
    </Layout>
  )
}
