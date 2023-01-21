import Menu from './Menu'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  return (
    <div className={`w-full flex justify-center fixed items-center z-10`}>
      <div
        className={`
          flex
          justify-between
          items-center 
          bg-white
          bg-opacity-80
          h-[70px]
          w-full
          p-10
          shadow-md 
          backdrop-blur-md
        `}
      >
        <div id='left'>
          <Link href='/'>
            <p className='hover:text-accent-500 cursor-pointer'>POLENTA</p>
          </Link>
        </div>
        <div id='center' className='flex gap-8 font-bold'>
          <Link href='/' className=''>
            HOME
          </Link>
          <Link href='/' className=''>
            ABOUT
          </Link>
          <Link href='/' className='mx-8'>
            CONCERTS
          </Link>
          <Link href='/' className='mx-8'>
            CONTACT
          </Link>
        </div>
        <div id='right'>Social Media</div>
      </div>
    </div>
  )
}
