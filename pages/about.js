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

  const bandMembersRes = await contentful.getEntries({
    content_type: 'bandMembers',
  })

  const pageRes = await contentful.getEntries({
    content_type: 'aboutPage',
  })

  const page = pageRes.items[0].fields

  return {
    props: {
      hero: page.heroImage,
      biography: page.biography,
      bandMembers: bandMembersRes.items,
    },
  }
}

export default function About({ biography, hero, bandMembers }) {
  return (
    <Layout>
      <div id='hero' className='relative h-screen flex justify-center items-center shadow-xl'>
        <Image alt={hero.fields.title} src={'https:' + hero.fields.file.url} fill className='object-cover' />
      </div>

      <div className='px-6 lg:px-0 my-12 md:my-32 flex justify-center items-center flex-col'>
        <div className='-translate-x-[2px] prose prose-lg md:prose-xl max-w-4xl prose-img:rounded-xl prose-img:shadow-lg prose-headings:underline leading-[2rem] text-center'>
          {documentToReactComponents(biography)}
        </div>
      </div>

      <div className='container grid grid-flow-row md:grid-cols-2 px-8 my-12 md:my-32 gap-8 xl:gap-12'>
        {bandMembers.map((member) => (
          <Card
            key={member.sys.id}
            name={member.fields.name}
            instrument={member.fields.instrument}
            image={`https:${member.fields.image.fields.file.url}`}
          />
        ))}
      </div>
    </Layout>
  )
}
