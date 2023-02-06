import React from 'react'

import Layout from '../components/Layouts/Default'
import Image from 'next/image'
import Card from '../components/Card.js'
import Title from '../components/Title'
import DownloadItem from '../components/DownloadItem'
import ContactForm from '../components/ContactForm'
import AnimateIn from '../components/AnimateIn'

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

  const bandMembersRes = await contentful.getEntries({
    content_type: 'bandMembers',
  })

  const fileDownloadRes = await contentful.getEntries({
    content_type: 'fileDownload',
  })

  const page = pageRes.items[0].fields

  return {
    props: {
      hero: page.heroImage,
      heroPosition: page.heroPosition,
      text: page.contactInformation,
      contacts: bandMembersRes.items,
      files: fileDownloadRes.items
    },
  }
}

export default function Contact({ text, hero, heroPosition, contacts, files }) {
  return (
    <Layout>
      <AnimateIn opacityDuration={1000}>
        <div id='hero' className='relative h-screen centerContent shadow-xl'>
          <Image
            alt={hero.fields.title}
            src={'https:' + hero.fields.file.url}
            fill
            className={`object-cover object-${heroPosition}`}
          />
        </div>
      </AnimateIn>

      <AnimateIn opacityDuration={1000}>
        <div className='px-8 lg:px-0 my-12 md:my-32 container flex justify-center'>
          <div className='-translate-x-[2px] prose prose-lg max-w-4xl prose-img:rounded-xl prose-img:shadow-lg prose-headings:underline leading-[2rem] text-center'>
            {documentToReactComponents(text)}
          </div>
        </div>
      </AnimateIn>

      <AnimateIn opacityDuration={1000}>
        <div className='container px-8 my-12 md:my-32 grid grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-8 flex-wrap'>
          {contacts.map((contact) => (
            <Card
              key={contact.sys.id}
              name={contact.fields.name}
              phone={contact.fields.phoneNumber}
              email={contact.fields.email}
              image={`https:${contact.fields.image.fields.file.url}`}
            />
          ))}
        </div>
      </AnimateIn>

      <ContactForm></ContactForm>

      {
        files.length > 0 && (
          <div className='flex flex-col gap-12 md:gap-16 w-full bg-secondary-500 pt-12 md:pt-16 lg:pb-12 pb-4 md:pb-6 '>
            <Title title='Downloads' textColor='text-primary-500' borderColor='border-primary-500' />
            <div className={`container px-6 grid grid-flow-row gap-6 md:gap-8 ${files.length > 1 &&
              'md:grid-cols-2'}`}>
              {files.map((file) => (
                <DownloadItem key={file.sys.id} title={file.fields.description} filename={file.fields.file.fields.file.fileName} file={`https:${file.fields.file.fields.file.url}`} />
              ))}
            </div>
          </div>
        )
      }

    </Layout>
  )
}
