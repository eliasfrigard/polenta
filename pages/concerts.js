import Layout from '../components/Layouts/Default'
import Event from '../components/Event'
import Image from 'next/image'
import Title from '../components/Title'
import AnimateIn from '../components/AnimateIn'

import { createClient } from 'contentful'

export async function getServerSideProps() {
  const contentful = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  })

  var currentDate = new Date().toISOString()

  const upcomingConcertsRes = await contentful.getEntries({
    content_type: 'concert',
    order: 'fields.dateTime',
    'fields.dateTime[gte]': currentDate,
  })

  const previousConcertsRes = await contentful.getEntries({
    content_type: 'concert',
    order: '-fields.dateTime',
    'fields.dateTime[lte]': currentDate,
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
      concerts: {
        upcoming: upcomingConcertsRes.items,
        previous: previousConcertsRes.items,
      },
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
            {concerts.upcoming.length > 0 ? (
              <div className='bg-primary-500 centerContent flex-col'>
                {concerts.upcoming.map((concert, index) => (
                  <Event
                    key={concert.sys.id}
                    date={concert.fields.dateTime}
                    venue={concert.fields.venue}
                    city={concert.fields.address}
                    country={concert.fields.country}
                    link={concert.fields.urlLink}
                    first={index === 0}
                    last={index + 1 === concerts.upcoming.length}
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
          {concerts.previous.length > 0 && (
            <div className='flex flex-col md:gap-16'>
              <Title title='Previous Concerts' />{' '}
              <div className='bg-primary-500 centerContent flex-col'>
                {concerts.previous.map((concert, index) => (
                  <Event
                    key={concert.sys.id}
                    date={concert.fields.dateTime}
                    venue={concert.fields.venue}
                    city={concert.fields.address}
                    country={concert.fields.country}
                    link={concert.fields.urlLink}
                    first={index === 0}
                    last={index + 1 === concerts.previous.length}
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
