import Layout from '../components/Layouts/Default'
import Image from 'next/image'

import { BsDownload } from 'react-icons/bs'

export default function Contact() {
  return (
    <Layout>
      <div id='hero' className='h-[100vh] flex justify-center items-center text-white '>
        <Image alt='Mountains' src='/polenta-14.jpg' layout='fill' objectFit='cover' />
      </div>
      <div className='container grid m-16 grid-flow-col gap-8 grid-cols-2 grid-rows-2'>
        <div
          id='download'
          className='flex items-center justify-between gap-8 p-6 pr-10 h-[100px] cursor-pointer w-full border-l-8 border-[#011C26] rounded-lg bg-gray-100 shadow-md hover:bg-[#011C26] hover:text-white duration-150'
        >
          <div className='flex flex-col justify-between'>
            <p className='text-lg font-medium tracking-wide'>Download our presskit from here.</p>
            <p className='text-lg italic tracking-wide'>polenta-presskit.zip</p>
          </div>

          <BsDownload className='text-3xl'></BsDownload>
        </div>
      </div>
    </Layout>
  )
}
