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
      const { data: post } = await axios.get('http://localhost:3000/examplePost.md')

      setPost(post)
    }

    getPost()
  }, [])

  return (
    <Layout>
      <div id='hero' className='h-[100vh] flex justify-center items-center text-white'>
        <Image alt='Mountains' src='/polenta-9.jpg' layout='fill' objectFit='cover' />
      </div>
      <div className='px-8 md:px-0 pt-16 container flex justify-center'>
        <div
          className='prose prose-xl max-w-4xl prose-img:rounded-xl prose-headings:underline leading-[2rem] text-center'
          dangerouslySetInnerHTML={{ __html: md().render(post) }}
        />
      </div>
      <div className='container py-16 md:py-32 flex justify-center items-center gap-8 md:gap-16 flex-wrap'>
        <Card name='Veera Kuisma' instrument='5-string violin' />
        <Card name='Aino Kinnunen' instrument='Violin' />
        <Card name='Olli Sippola' instrument='Violin' />
        <Card name='Mikko Malmivaara' instrument='6-string guitar' />
      </div>
    </Layout>
  )
}
