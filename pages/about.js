import Layout from '../components/Layouts/Default'
import Image from 'next/image'
import React from 'react'

import Card from '../components/Card.js'
import AnimateIn from '../components/AnimateIn'

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
      mobileHero: page.mobileHeroImage,
      heroPosition: page.heroPosition,
      biography: page.biography,
      bandMembers: bandMembersRes.items,
      heroImageActive: page.heroImageActive,
      pageTitle: page.name,
      pageDescription: page.description,
    },
  }
}

export default function About({
  biography,
  hero,
  heroPosition,
  bandMembers,
  heroImageActive,
  mobileHero,
  pageTitle,
  pageDescription,
}) {
  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription} imageUrl={`https: + ${hero.fields.file.url}`}>
      {
        heroImageActive &&
        <AnimateIn opacityDuration={1000}>
          <div id='hero' className='relative h-screen flex justify-center items-center shadow-xl'>
            <Image
              alt={hero.fields.title}
              src={'https:' + hero.fields.file.url}
              fill
              className={`hidden lg:block object-cover object-${heroPosition}`}
            />
            <Image
              alt={mobileHero.fields.title}
              src={'https:' + mobileHero.fields.file.url}
              fill
              className='lg:hidden object-cover object-bottom'
            />
          </div>
        </AnimateIn>
      }

      <AnimateIn opacityDuration={1000}>
        <div className='px-6 lg:px-0 my-12 md:my-32 flex justify-center items-center flex-col'>
          <div className='-translate-x-[2px] prose prose-lg max-w-2xl prose-img:rounded-xl prose-img:shadow-lg prose-headings:underline leading-[2rem] text-center'>
            {documentToReactComponents(biography)}
          </div>
        </div>
      </AnimateIn>

      <div className='container grid grid-flow-row md:grid-cols-2 px-8 my-12 md:my-32 gap-8 xl:gap-12'>
        {bandMembers.map((member) => (
          <Card
            key={member.sys.id}
            name={member.fields.name}
            instrument={member.fields.instrument}
            image={`https:${member.fields.image.fields.file.url}`}
            text={member.fields.text}
            textSize="lg"
          />
        ))}
      </div>
    </Layout>
  )
}
