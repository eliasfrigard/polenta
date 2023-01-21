import Layout from '../components/Layouts/Default'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <div id='hero' className='relative h-[1050px] bg-red-500 flex justify-center items-center text-white '>
        <Image alt='Mountains' src='/polenta-hero.jpg' layout='fill' objectFit='cover' />
        <div className='container h-[400px] bg-black absolute translate-y-[525px]'></div>
      </div>
      <div className='py-16 pt-[264px] bg-green-500 flex justify-center items-center flex-col'>
        <div className='container'>
          <iframe
            className='w-full aspect-video'
            src='https://www.youtube.com/embed/UpaJ4JEoxy8'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            loading='lazy'
          ></iframe>
        </div>
        <div className='container flex gap-16 mt-16 flex-wrap md:flex-nowrap'>
          <iframe
            className='w-full aspect-video'
            src='https://www.youtube.com/embed/UpaJ4JEoxy8'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            loading='lazy'
          ></iframe>
          <iframe
            className='w-full aspect-video'
            src='https://www.youtube.com/embed/UpaJ4JEoxy8'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}
