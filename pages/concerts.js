import Layout from '../components/Layouts/Default'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <div id='hero' className='h-[100vh] flex justify-center items-center text-white '>
        <Image alt='Mountains' src='/polenta-12.jpg' layout='fill' objectFit='cover' />
      </div>
      <div className='py-16 bg-[#F2F2F2] flex justify-center items-center flex-col'>
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
