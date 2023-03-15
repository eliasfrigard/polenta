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
      return 'text-accent-500'
    }
  }

  return (
    <>
      <div
        className={`w-full backdrop-blur flex justify-start fixed top-0 items-center z-10 bg-secondary-500 bg-opacity-90
    `}
      >
        <div
          className={`
          hidden
          lg:gap-16
          lg:flex
          xl:grid
          xl:grid-cols-3
          items-center
          h-[75px]
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
          <div id='center' className='flex gap-4 font-medium justify-center tracking-[2px]'>
            <Link href='/' className={`${activeLinkStyling('/')} desktopNavLink drop-shadow-sm`}>
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
            <a href='mailto:polentamusic@gmail.com?subject=Polenta Music Website'>
              <AiOutlineMail className='soMeIcon text-[1.5rem] antialiased' />
            </a>

            <a href='https://www.facebook.com/Polentamusic' target='_blank' rel='noopener noreferrer'>
              <BsFacebook className='soMeIcon text-xl' />
            </a>

            <a href='https://www.instagram.com/polentamusic/' target='_blank' rel='noopener noreferrer'>
              <BsInstagram className='soMeIcon text-xl' />
            </a>

            <a
              href='https://open.spotify.com/artist/6LCSzEXMsFKhWkOAp1wP4E?si=SunHecGiSISfPt1Zmv2W3A'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsSpotify className='soMeIcon text-xl' />
            </a>

            <a href='https://www.youtube.com/@polentamusic650' target='_blank' rel='noopener noreferrer'>
              <BsYoutube className='soMeIcon text-[1.5rem] translate-y-[1px]' />
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE */}

      <div className={`w-screen flex justify-start fixed items-center z-20 bg-secondary-500`}>
        <div
          className={`
          lg:hidden
          grid
          grid-cols-2
          items-center
          h-[75px]
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
        className={`lg:hidden fixed flex flex-col justify-evenly items-center pt-[75px] h-screen w-screen bg-secondary-500 z-10 duration-300 transform ${
          !mobileNavOpen && '-translate-y-[100vh]'
        }`}
      >
        <div className='container flex flex-col justify-center items-center gap-10'>
          <Link href='/'>
            <p className={`${activeLinkStyling('/')} mobileNavLink`}>Home</p>
          </Link>

          <Link href='/about'>
            <p className={`${activeLinkStyling('/about')} mobileNavLink`}>About</p>
          </Link>

          <Link href='/concerts'>
            <p className={`${activeLinkStyling('/concerts')} mobileNavLink`}>Concerts</p>
          </Link>

          <Link href='/music'>
            <p className={`${activeLinkStyling('/music')} mobileNavLink`}>Music</p>
          </Link>

          <Link href='/contact'>
            <p className={`${activeLinkStyling('/contact')} mobileNavLink`}>Contact</p>
          </Link>
        </div>

        <div className='flex justify-center items-center gap-8 text-primary-500'>
          <a href='mailto:someone@yoursite.com?subject=Polenta Music Website'>
            <AiOutlineMail className='soMeIcon text-[1.6rem] antialiased' />
          </a>

          <a href='https://www.facebook.com/Polentamusic' target='_blank' rel='noopener noreferrer'>
            <BsFacebook className='soMeIcon text-2xl' />
          </a>

          <a href='https://www.instagram.com/polentamusic/' target='_blank' rel='noopener noreferrer'>
            <BsInstagram className='soMeIcon text-2xl' />
          </a>

          <a
            href='https://open.spotify.com/artist/6LCSzEXMsFKhWkOAp1wP4E?si=SunHecGiSISfPt1Zmv2W3A'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsSpotify className='soMeIcon text-2xl' />
          </a>

          <a href='https://www.youtube.com/@polentamusic650' target='_blank' rel='noopener noreferrer'>
            <BsYoutube className='soMeIcon text-[1.8rem] translate-y-[1px]' />
          </a>
        </div>
        <div className='text-primary-500 tracking-wide text-center'>
          <p className='text-s mb-2'>Copyright 2023 © Polenta Music</p>
          <a href='mailto:' className='text-xs underline'>
            polentamusiikki@gmail.com
          </a>
          {/* <p className='text-xs mt-2'>Website by Elias Frigård</p> */}
        </div>
      </div>
    </>
  )
}
