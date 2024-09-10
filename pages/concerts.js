import Layout from '../components/Layouts/Default'
import Event from '../components/Event'
import Image from 'next/image'
import Title from '../components/Title'
import AnimateIn from '../components/AnimateIn'
import sortConcerts from '../utils/sortConcerts'

import { createClient } from 'contentful'
import { useEffect, useState } from 'react'

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
    content_type: 'concertsPage',
  })

  const page = pageRes.items[0].fields

  return {
    props: {
      hero: page.heroImage,
      mobileHero: page.mobileHeroImage,
      heroPosition: page.heroPosition,
      heroImageActive: page.heroImageActive,
      pageTitle: page.name,
      pageDescription: page.description,
      concerts: concertsRes.items,
    },
  }
}

export default function Concerts({
  hero,
  heroPosition,
  concerts,
  mobileHero,
  heroImageActive,
  pageTitle,
  pageDescription,
}) {
  const [upcomingConcerts, setUpcomingConcerts] = useState([])
  const [previousConcerts, setPreviousConcerts] = useState([])

  useEffect(() => {
    const { upcoming, previous } = sortConcerts(concerts)

    setUpcomingConcerts(upcoming)
    setPreviousConcerts(previous)
  }, [concerts])

  return (
    <Layout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      imageUrl={`https: + ${hero.fields.file.url}`}
      pageUrl='/concerts'
    >
      {heroImageActive && (
        <AnimateIn opacityDuration={1000}>
          <div id='hero' className='relative h-screen -mt-[75px] flex justify-center items-center shadow-xl'>
            <Image
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

      <div className='flex flex-col gap-12 md:gap-32 my-12 md:my-32'>
        <div>
          <div className='flex flex-col md:gap-16'>
            <Title title='Upcoming Concerts' />
            {upcomingConcerts.length > 0 ? (
              <div className='bg-primary-500 centerContent flex-col'>
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
            ) : (
              <p className='text-xl leading-loose text-center tracking-wider font-medium mt-8 md:mt-0'>
                No upcoming concerts at this moment.
              </p>
            )}
          </div>
        </div>

        <div>
          {previousConcerts.length > 0 && (
            <div className='flex flex-col md:gap-16'>
              <Title title='Previous Concerts' />{' '}
              <div className='bg-primary-500 centerContent flex-col'>
                {previousConcerts.map((concert, index) => (
                  <Event
                    key={concert.sys.id}
                    date={concert.fields.dateTime}
                    venue={concert.fields.venue}
                    city={concert.fields.address}
                    country={concert.fields.country}
                    link={concert.fields.urlLink}
                    first={index === 0}
                    last={index + 1 === previousConcerts.length}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
