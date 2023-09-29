import React from 'react'

import Image from 'next/image'
import Layout from '../components/Layouts/Default'
import ContactForm from '../components/ContactForm'
import Event from '../components/Event'
import Title from '../components/Title'
import Video from '../components/Video'
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

  var gt = new Date().toISOString()

  const concertsRes = await contentful.getEntries({
    content_type: 'concert',
    order: 'fields.dateTime',
    'fields.dateTime[gte]': gt,
  })

  const pageRes = await contentful.getEntries({
    content_type: 'homePage',
  })

  const page = pageRes.items[0].fields

  return {
    props: {
      hero: page.pageImage,
      mobileHero: page.mobileHeroImage,
      logo: page.logo,
      heroPosition: page.heroPosition,
      introduction: page.introduction,
      videos: page.videos,
      concerts: concertsRes.items,
      pageTitle: page.name,
      pageDescription: page.description,
    },
  }
}

export default function Home({
  hero,
  mobileHero,
  heroPosition,
  logo,
  introduction,
  videos,
  concerts,
  pageTitle,
  pageDescription,
}) {
  const firstVideo = videos[0].fields
  const secondVideo = videos[1].fields
  const thirdVideo = videos[2].fields

  const [ratio, setRatio] = React.useState(1 / 1)

  const logoRef = React.useRef(null)

  React.useEffect(() => {
    if (!logoRef.current) return

    const resizeObserver = new ResizeObserver(() => {
      logoRef.current.parentElement.style.marginBottom = `${logoRef.current.offsetHeight / 2}px`
    })

    resizeObserver.observe(logoRef.current)

    return () => resizeObserver.disconnect()
  }, [logoRef])

  return (
    <Layout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      imageUrl={`https: + ${hero.fields.file.url}`}
      pageUrl='/'
    >
      <AnimateIn>
        <div
          id='hero'
          className={`relative h-screen -mt-[75px] md:h-[975px] shadow-xl flex items-center justify-center`}
        >
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
          <Image
            ref={logoRef}
            alt={logo.fields.title}
            src={'https:' + logo.fields.file.url}
            width={600}
            height={600 / ratio}
            className='absolute bottom-0 translate-y-1/2'
            onLoadingComplete={({ naturalWidth, naturalHeight }) =>
              setRatio(naturalWidth / naturalHeight)
            }
          />
        </div>
      </AnimateIn>

      <AnimateIn opacityDuration={1000}>
        <div className='px-8 lg:px-0 container flex justify-center mb-12 md:mb-32 pt-8 md:pt-16'>
          <div className='-translate-x-[2px] prose prose-lg max-w-5xl prose-img:rounded-xl prose-img:shadow-lg leading-[2.2rem] text-center'>
            {documentToReactComponents(introduction, options)}
          </div>
        </div>
      </AnimateIn>

      <div className='px-8 md:px-16 my-12 md:my-16 flex justify-center items-center flex-col'>
        <div className='container'>
          <Video
            title={firstVideo.title}
            description={firstVideo.description}
            link={firstVideo.youTubeLink}
            prominent
          />
        </div>
        <div className='container flex gap-8 xl:gap-12 mt-8 md:mt-16 flex-wrap lg:flex-nowrap'>
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
                  link={concert.fields.urlLink}
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
