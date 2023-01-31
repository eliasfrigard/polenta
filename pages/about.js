import Layout from '../components/Layouts/Default'
import Image from 'next/image'
import React from 'react'

import Card from '../components/Card.js'

import axios from 'axios'
import md from 'markdown-it'

export default function Home() {
  const [post, setPost] = React.useState('')

  React.useEffect(() => {
    const getPost = async () => {
      const { data: post } = await axios.get('/examplePost.md')

      setPost(post)
    }

    getPost()
  }, [])

  return (
    <Layout>
      <div id='hero' className='relative h-screen md:h-[1050px] flex justify-center items-center shadow-2xl'>
        <Image alt='Mountains' src='/polenta-9.jpg' layout='fill' objectFit='cover' />
        <div className='hidden md:centerContent container md:my-16 md:h-[450px] absolute translate-y-[525px] '>
          <Image
            alt='Mountains'
            src='/splash.png'
            layout='fill'
            objectFit='contain'
            className='absolute translate-y-5 drop-shadow opacity-95'
          />
          <h1 className='text-5xl md:text-[110px] z-10 font-bold md:-translate-y-2 drop-shadow-2xl text-white'>
            POLENTA
          </h1>
        </div>
      </div>

      <div className='px-6 md:px-0 my-12 md:my-32 flex justify-center items-center flex-col'>
        <div
          className='-translate-x-[2px] prose prose-lg md:prose-xl max-w-4xl prose-img:rounded-xl prose-img:shadow-lg prose-headings:underline leading-[2rem] text-center'
          dangerouslySetInnerHTML={{ __html: md().render(post) }}
        />
      </div>

      <div className='container my-12 md:my-32 flex justify-center items-center gap-8 md:gap-16 flex-wrap'>
        <Card name='Veera Kuisma' instrument='5-string violin' />
        <Card name='Aino Kinnunen' instrument='Violin' />
        <Card name='Olli Sippola' instrument='Violin' />
        <Card name='Mikko Malmivaara' instrument='6-string guitar' />
      </div>
    </Layout>
  )
}
