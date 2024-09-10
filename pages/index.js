import React from 'react'

import Image from 'next/image'
import Layout from '../components/Layouts/Default'
import ContactForm from '../components/ContactForm'
import Event from '../components/Event'
import Title from '../components/Title'
import Video from '../components/Video'
import AnimateIn from '../components/AnimateIn'
import { getPlaiceholder } from 'plaiceholder'

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

const getImageBuffer = async (src) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  )

  return buffer
}

export async function getStaticProps() {
  const contentful = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  })

  const concertsRes = await contentful.getEntries({
    content_type: 'concert',
    order: 'fields.dateTime',
  })

  const pageRes = await contentful.getEntries({
    content_type: 'homePage',
  })

  const page = pageRes.items[0].fields

  const logoUrl = 'https:' + page.logo.fields.file.url
  const heroUrl = 'https:' + page.pageImage.fields.file.url
  const mobileHeroUrl = 'https:' + page.mobileHeroImage.fields.file.url

  const logoBuffer = await getImageBuffer(logoUrl)
  const heroBuffer = await getImageBuffer(heroUrl)
  const mobileHeroBuffer = await getImageBuffer(mobileHeroUrl)

  const { base64: logoBlur } = await getPlaiceholder(logoBuffer)
  const { base64: heroBlur } = await getPlaiceholder(heroBuffer)
  const { base64: mobileHeroBlur } = await getPlaiceholder(mobileHeroBuffer)

  return {
    props: {
      hero: {
        altText: page.pageImage.fields.title,
        image: heroUrl,
        blur: heroBlur
      },
      mobileHero: {
        altText: page.mobileHeroImage.fields.title,
        image: mobileHeroUrl,
        blur: mobileHeroBlur
      },
      logo: {
        altText: page.logo.fields.title,
        image: logoUrl,
        blur: logoBlur
      },
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
  const [upcomingConcerts, setUpcomingConcerts] = React.useState([])

  const logoRef = React.useRef(null)

  React.useEffect(() => {
    if (!logoRef.current) return

    const resizeObserver = new ResizeObserver(() => {
      logoRef.current.parentElement.style.marginBottom = `${logoRef.current.offsetHeight / 2}px`
    })

    resizeObserver.observe(logoRef.current)

    return () => resizeObserver.disconnect()
  }, [logoRef])

  React.useEffect(() => {
    const currentDate = new Date()

    const upcoming = concerts.filter((concert) => new Date(concert.fields.dateTime) >= currentDate)

    setUpcomingConcerts(upcoming)
  }, [concerts])

  return (
    <Layout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      imageUrl={hero.image}
      pageUrl='/'
    >
      <AnimateIn>
        <div
          id='hero'
          className={`relative h-screen -mt-[75px] md:h-[975px] shadow-xl flex items-center justify-center`}
        >
          <Image
            alt={hero.altText}
            src={hero.image}
            placeholder={hero?.blur ? 'blur' : 'empty'}
            blurDataURL={hero?.blur}
            className={`hidden lg:block object-cover object-${heroPosition}`}
            fill
          />
          <Image
            alt={mobileHero.altText}
            src={mobileHero.image}
            placeholder={mobileHero?.blur ? 'blur' : 'empty'}
            blurDataURL={mobileHero?.blur}
            className='lg:hidden object-cover object-bottom'
            fill
          />
          <Image
            ref={logoRef}
            alt={logo.altText}
            src={logo.image}
            placeholder={logo?.blur ? 'blur' : 'empty'}
            blurDataURL={logo?.blur}
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
        {upcomingConcerts.length > 0 && (
          <div className='my-12 md:my-32'>
            <Title title='upcoming concerts' />

            <div className='px-4 md:px-0 md:my-16 bg-primary-500 flex justify-center items-center flex-col'>
              {upcomingConcerts.map((concert, index) => (
                <Event
                  key={concert.sys.id}
                  date={concert.fields.dateTime}
                  venue={concert.fields.venue}
                  city={concert.fields.address}
                  country={concert.fields.country}
                  link={concert.fields.urlLink}
                  first={index === 0}
                  last={index + 1 === upcomingConcerts.length}
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
