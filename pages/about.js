import Layout from '../components/Layouts/Default'
import Image from 'next/image'
import Title from '../components/Title'
import React from 'react'

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
      <div className='pt-16 container flex justify-center'>
        <div
          className='prose prose-xl max-w-4xl prose-img:rounded-xl prose-headings:underline leading-[2rem] text-center'
          dangerouslySetInnerHTML={{ __html: md().render(post) }}
        />
      </div>
      <div className='container py-32 flex justify-center items-center gap-16 flex-wrap'>
        <div className='bg-[#011C26] w-[320px] h-[400px]'></div>
        <div className='bg-[#011C26] w-[320px] min-w-[300px] h-[400px]'></div>
        <div className='bg-[#011C26] w-[320px] min-w-[300px] h-[400px]'></div>
        <div className='bg-[#011C26] w-[320px] min-w-[300px] h-[400px]'></div>
      </div>
    </Layout>
  )
}
