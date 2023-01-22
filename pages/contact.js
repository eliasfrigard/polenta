import Layout from '../components/Layouts/Default'
import Image from 'next/image'
import ContactForm from '../components/ContactForm'
import Card from '../components/Card.js'

import { BsDownload } from 'react-icons/bs'

export default function Contact() {
  return (
    <Layout>
      <div id='hero' className='h-[100vh] flex justify-center items-center text-white '>
        <Image alt='Mountains' src='/polenta-14.jpg' layout='fill' objectFit='cover' />
      </div>
      <div className='container mt-16 flex justify-center items-center gap-16 flex-wrap'>
        <Card name='Veera Kuisma' email='example@polentamusic.net' phone='+358(0)-451107182' />
        <Card name='Aino Kinnunen' email='example@polentamusic.net' phone='+358(0)-451107182' />
        <Card name='Olli Sippola' email='example@polentamusic.net' phone='+358(0)-451107182' />
        <Card name='Mikko Malmivaara' email='example@polentamusic.net' phone='+358(0)-451107182' />
      </div>
      <div className='container grid m-16 grid-flow-col gap-8 grid-cols-2 grid-rows-2'>
        <div
          id='download'
          className='flex items-center justify-between gap-8 p-8 pr-10 h-[100px] cursor-pointer w-full border-l-8 border-[#011C26] rounded-lg bg-gray-100 shadow-md hover:bg-[#011C26] hover:text-white duration-100'
        >
          <div className='flex flex-col justify-between gap-1'>
            <p className='text font-medium tracking-wide'>Download our presskit from here.</p>
            <p className='text italic tracking-wide'>polenta-presskit.zip</p>
          </div>

          <BsDownload className='text-2xl'></BsDownload>
        </div>
        <div
          id='download'
          className='flex items-center justify-between gap-8 p-8 pr-10 h-[100px] cursor-pointer w-full border-l-8 border-[#011C26] rounded-lg bg-gray-100 shadow-md hover:bg-[#011C26] hover:text-white duration-100'
        >
          <div className='flex flex-col justify-between gap-1'>
            <p className='text font-medium tracking-wide'>Download our technical rider from here.</p>
            <p className='text italic tracking-wide'>polenta-technical-rider.pdf</p>
          </div>

          <BsDownload className='text-2xl'></BsDownload>
        </div>
        <div
          id='download'
          className='flex items-center justify-between gap-8 p-8 pr-10 h-[100px] cursor-pointer w-full border-l-8 border-[#011C26] rounded-lg bg-gray-100 shadow-md hover:bg-[#011C26] hover:text-white duration-100'
        >
          <div className='flex flex-col justify-between gap-1'>
            <p className='text font-medium tracking-wide'>Download our hospitality rider from here.</p>
            <p className='text italic tracking-wide'>polenta-hospitality-rider.pdf</p>
          </div>

          <BsDownload className='text-2xl'></BsDownload>
        </div>
      </div>
      <ContactForm></ContactForm>
    </Layout>
  )
}
