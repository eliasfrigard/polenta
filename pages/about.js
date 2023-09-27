import Layout from '../components/Layouts/Default'
import Image from 'next/image'
import React from 'react'

import Card from '../components/Card.js'
import AnimateIn from '../components/AnimateIn'

import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { url, fileName, contentType } = node.data.target.fields.file
      return (
        <Image
          src={`https:${url}`}
          alt={fileName}
          width={node.data.target.fields.file.details.image.width}
          height={node.data.target.fields.file.details.image.height}
          layout='responsive'
        />
      )
    },
  },
}

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
    <Layout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      imageUrl={`https: + ${hero.fields.file.url}`}
      pageUrl='/about'
    >
      {heroImageActive && (
        <AnimateIn opacityDuration={1000}>
          <div id='hero' className='relative heroHeight flex justify-center items-center shadow-xl'>
            <Image
              // Safe navigation.
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

      <AnimateIn opacityDuration={1000}>
        <div className='px-8 lg:px-0 my-12 md:my-32 container flex justify-center'>
          <div className='-translate-x-[2px] prose prose-lg max-w-4xl prose-img:roundedShadow prose-img:shadow-md leading-[2rem] text-center'>
            {documentToReactComponents(biography, options)}
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
            textSize='lg'
          />
        ))}
      </div>
    </Layout>
  )
}
