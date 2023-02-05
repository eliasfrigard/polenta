import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'

import { BsFacebook, BsInstagram, BsYoutube, BsSpotify } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

import Hamburger from './Hamburger.js'

export default function Header() {
  const router = useRouter()

  const [mobileNavOpen, setMobileNavOpen] = React.useState(false)

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen)
  }

  const activeLinkStyling = (path) => {
    if (router.pathname == path) {
      return 'border-b-2 border-accent-500 border-opacity-70'
    }
  }

  return (
    <>
      <div
        className={`w-full backdrop-blur flex justify-start fixed items-center z-10 bg-secondary-500 bg-opacity-90
    `}
      >
        <div
          className={`
          hidden
          lg:grid
          grid-cols-3
          items-center
          h-[80px]
          w-full
          shadow-lg
          tracking-wide
          text-primary-500
          container
          px-8
        `}
        >
          <div id='left'>
            <Link className='cursor-pointer text-2xl font-bold tracking-widest' href='/'>
              POLENTA
            </Link>
          </div>
          <div id='center' className='flex gap-6 font-medium justify-center tracking-widest'>
            <Link href='/' className={`${activeLinkStyling('/')} desktopNavLink`}>
              HOME
            </Link>
            <Link href='/about' className={`${activeLinkStyling('/about')} desktopNavLink`}>
              ABOUT
            </Link>
            <Link href='/concerts' className={`${activeLinkStyling('/concerts')} desktopNavLink`}>
              CONCERTS
            </Link>
            <Link href='/music' className={`${activeLinkStyling('/music')} desktopNavLink`}>
              MUSIC
            </Link>
            <Link href='/contact' className={`${activeLinkStyling('/contact')} desktopNavLink`}>
              CONTACT
            </Link>
          </div>
          <div id='right' className='flex gap-6 justify-end items-center '>
            <AiOutlineMail className='text-[1.5rem] antialiased' />
            <BsFacebook className='text-xl' />
            <BsInstagram className='text-xl' />
            <BsSpotify className='text-xl' />
            <BsYoutube className='text-[1.5rem] translate-y-[1px]' />
          </div>
        </div>
      </div>

      <div className={`w-screen flex justify-start fixed items-center z-20 bg-secondary-500`}>
        <div
          className={`
          lg:hidden
          grid
          grid-cols-2
          items-center
          h-[80px]
          w-full
          tracking-wide
          text-primary-500
          container
          px-8
        `}
        >
          <div id='left'>
            <Link href='/'>
              <p className='cursor-pointer text-2xl font-bold tracking-widest'>POLENTA</p>
            </Link>
          </div>
          <div id='right' className='flex gap-6 justify-end items-center '>
            <Hamburger handleClick={toggleMobileNav} active={mobileNavOpen}></Hamburger>
          </div>
        </div>
      </div>

      <div
        className={`fixed flex flex-col justify-center items-center gap-24 pt-[80px] h-screen w-screen bg-secondary-500 z-10 duration-300 transform py-16 ${
          !mobileNavOpen && '-translate-y-[100vh]'
        }`}
      >
        <div className='container flex flex-col justify-center items-center gap-10'>
          <Link href='/'>
            <p className='mobileNavLink'>Home</p>
          </Link>
          <Link href='/about'>
            <p className='mobileNavLink'>About</p>
          </Link>
          <Link href='/concerts'>
            <p className='mobileNavLink'>Concerts</p>
          </Link>
          <Link href='/'>
            <p className='mobileNavLink'>Music</p>
          </Link>
          <Link href='/contact'>
            <p className='mobileNavLink'>Contact</p>
          </Link>
        </div>

        <div className='flex justify-center items-center gap-8 text-primary-500'>
          <AiOutlineMail className='text-[1.8rem] antialiased' />
          <BsFacebook className='text-2xl' />
          <BsInstagram className='text-2xl' />
          <BsSpotify className='text-2xl' />
          <BsYoutube className='text-[1.8rem] translate-y-[1px]' />
        </div>
      </div>
    </>
  )
}
