import Link from 'next/link'

import { BsFacebook, BsInstagram, BsYoutube, BsSpotify } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export default function Header() {
  return (
    <div className={`w-full flex justify-start fixed items-center z-10`}>
      <div
        className={`
          grid
          grid-cols-3
          items-center
          bg-[#011C26]
          bg-opacity-90
          h-[80px]
          w-full
          shadow-lg
          backdrop-blur-md 
          tracking-wide
          px-48
          text-[#F2F2F2]
        `}
      >
        <div id='left'>
          <Link href='/'>
            <p className='hover:text-accent-500 cursor-pointer text-2xl font-bold tracking-widest'>POLENTA</p>
          </Link>
        </div>
        <div id='center' className='flex gap-8 font-medium justify-center tracking-widest'>
          <Link href='/' className=''>
            HOME
          </Link>
          <Link href='/about' className=''>
            ABOUT
          </Link>
          <Link href='/concerts' className='mx-8'>
            CONCERTS
          </Link>
          <Link href='/contact' className='mx-8'>
            CONTACT
          </Link>
        </div>
        <div id='right' className='flex gap-6 justify-end items-center '>
          <AiOutlineMail className='text-[1.8rem] antialiased' />
          <BsFacebook className='text-2xl' />
          <BsInstagram className='text-2xl' />
          <BsSpotify className='text-2xl' />
          <BsYoutube className='text-[1.8rem]' />
        </div>
      </div>
    </div>
  )
}
