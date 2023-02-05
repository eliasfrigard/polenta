import Layout from '../components/Layouts/Default'
import Event from '../components/Event'
import Image from 'next/image'
import Title from '../components/Title'
import AnimateIn from '../components/AnimateIn'

import { createClient } from 'contentful'

export async function getStaticProps() {
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
    order: 'fields.dateTime',
    'fields.dateTime[lte]': currentDate,
  })

  const concertsPageRes = await contentful.getEntries({
    content_type: 'concertsPage',
  })

  const concertsPage = concertsPageRes.items[0].fields

  return {
    props: {
      hero: concertsPage.heroImage,
      concerts: {
        upcoming: upcomingConcertsRes.items,
        previous: previousConcertsRes.items,
      },
    },
  }
}

export default function Concerts({ hero, concerts }) {
  return (
    <Layout>
      <AnimateIn opacityDuration={1000}>
        <div id='hero' className='relative h-screen centerContent shadow-xl'>
          <Image
            alt={hero.fields.title}
            src={'https:' + hero.fields.file.url}
            fill
            className='object-cover'
          />
        </div>
      </AnimateIn>

      <div className='flex flex-col gap-12 md:gap-32 my-12 md:my-32'>
        <AnimateIn opacityDuration={1000}>
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
        </AnimateIn>

        <AnimateIn opacityDuration={1000}>
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
                    first={index === 0}
                    last={index + 1 === concerts.previous.length}
                  />
                ))}
              </div>
            </div>
          )}
        </AnimateIn>
      </div>
    </Layout>
  )
}
