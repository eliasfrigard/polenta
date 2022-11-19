import Layout from '../components/Layouts/Default'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <div id='hero' className='w-full h-screen'>
        <Image alt='Mountains' src='/polenta-hero.jpg' layout='fill' objectFit='cover' />
      </div>
      <div id='hero' className='w-full h-screen bg-blue-100'></div>
    </Layout>
  )
}
