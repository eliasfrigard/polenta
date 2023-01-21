import Layout from '../components/Layouts/Default'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <div id='hero' className='relative h-[1050px] flex justify-center items-center text-white '>
        <Image alt='Mountains' src='/polenta-hero.jpg' layout='fill' objectFit='cover' />
        <div className='container h-[450px] absolute translate-y-[525px] flex justify-center items-center '>
          <Image
            alt='Mountains'
            src='/splash.png'
            layout='fill'
            objectFit='contain'
            className='absolute translate-y-5 drop-shadow opacity-95'
          />
          <h1 className='text-[110px] z-10 font-bold -translate-y-2 drop-shadow-2xl'>POLENTA</h1>
        </div>
      </div>
      <div className='py-16 pt-[289px] flex justify-center items-center flex-col'>
        <div className='container'>
          <iframe
            className='video'
            src='https://www.youtube.com/embed/UpaJ4JEoxy8'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            loading='lazy'
          ></iframe>
        </div>
        <div className='container flex gap-16 mt-16 flex-wrap md:flex-nowrap'>
          <iframe
            className='video'
            src='https://www.youtube.com/embed/F0Xzzrm_n_w'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            loading='lazy'
          ></iframe>
          <iframe
            className='video'
            src='https://www.youtube.com/embed/bklW0v_nf60'
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
