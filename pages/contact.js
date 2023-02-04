import React from 'react'

import Layout from '../components/Layouts/Default'
import Image from 'next/image'
import Card from '../components/Card.js'
import Title from '../components/Title'
import DownloadItem from '../components/DownloadItem'
import ContactForm from '../components/ContactForm'

import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export async function getStaticProps() {
  const contentful = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  })

  const pageRes = await contentful.getEntries({
    content_type: 'contactPage',
  })

  const page = pageRes.items[0].fields

  return {
    props: {
      hero: page.heroImage,
      text: page.contactInformation,
    },
  }
}

export default function Contact({ text, hero }) {
  return (
    <Layout>
      <div id='hero' className='relative h-screen centerContent shadow-xl'>
        <Image
          alt={hero.fields.title}
          src={'https:' + hero.fields.file.url}
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className='px-8 md:px-0 my-12 md:my-32 container flex justify-center'>
        <div className='-translate-x-[2px] prose prose-lg md:prose-xl max-w-4xl prose-img:rounded-xl prose-img:shadow-lg prose-headings:underline leading-[2rem] text-center'>
          {documentToReactComponents(text)}
        </div>
      </div>

      <div className='container my-12 md:my-32 flex justify-center items-center gap-8 md:gap-16 flex-wrap'>
        <Card name='Veera Kuisma' email='example@polentamusic.net' phone='+358(0)-451107182' />
        <Card name='Aino Kinnunen' email='example@polentamusic.net' phone='+358(0)-451107182' />
        <Card name='Olli Sippola' email='example@polentamusic.net' phone='+358(0)-451107182' />
        <Card name='Mikko Malmivaara' email='example@polentamusic.net' phone='+358(0)-451107182' />
      </div>

      <ContactForm></ContactForm>

      <div className='flex flex-col gap-12 md:gap-16 w-full bg-secondary-500 pt-12 md:pt-16 md:pb-16'>
        <Title title='Downloads' textColor='text-primary-500' borderColor='border-primary-500' />
        <div className='container px-4 md:px-0 grid grid-flow-row gap-6 md:gap-8 md:grid-cols-2'>
          <DownloadItem title='Download our presskit from here.' filename='polenta-presskit.zip' />
          <DownloadItem
            title='Download our technical rider from here if you dare to do it.'
            filename='polenta-technical-rider.pdf'
            link=''
          />
          <DownloadItem
            title='Download our hospitality rider.'
            filename='polenta-hospitality-rider.pdf'
            link=''
          />
          <DownloadItem
            title='Download our hospitality rider.'
            filename='polenta-hospitality-rider.pdf'
            link=''
          />
        </div>
      </div>
    </Layout>
  )
}
