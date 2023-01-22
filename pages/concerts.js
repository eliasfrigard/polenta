import Layout from '../components/Layouts/Default'
import Event from '../components/Event'
import Image from 'next/image'

export default function Home() {
  const event = {
    date: Date.now(),
    venue: 'Teatro Salla Della Communita',
    city: 'Gothenburg',
    country: 'Sweden',
  }

  return (
    <Layout>
      <div id='hero' className='h-[100vh] flex justify-center items-center text-white '>
        <Image alt='Mountains' src='/polenta-5.jpg' layout='fill' objectFit='cover' />
      </div>
      <div className='py-16 bg-[#F2F2F2] flex justify-center items-center flex-col'>
        <Event date={event.date} venue={event.venue} city={event.city} country={event.country} />
        <Event date={event.date} venue={event.venue} city={event.city} country={event.country} />
        <Event date={event.date} venue={event.venue} city={event.city} country={event.country} />
        <Event date={event.date} venue={event.venue} city={event.city} country={event.country} />
        <Event date={event.date} venue={event.venue} city={event.city} country={event.country} />
        <Event date={event.date} venue={event.venue} city={event.city} country={event.country} />
        <Event date={event.date} venue={event.venue} city={event.city} country={event.country} />
        <Event date={event.date} venue={event.venue} city={event.city} country={event.country} last={true} />
      </div>
    </Layout>
  )
}
