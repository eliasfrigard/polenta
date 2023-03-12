import Moment from 'react-moment'
import { IoMdGlobe, IoMdPin } from 'react-icons/io'
import { BsCalendar3 } from 'react-icons/bs'
import AnimateIn from './AnimateIn'

export default function Event({ venue, date, city, country, last = false, first = false }) {
  return (
    <>
      <AnimateIn
        classes={`${!first && 'mt-2'} ${!last && 'mb-2'
          } hidden lg:grid py-7 max-w-[1200px] w-full grid-flow-row grid-cols-4 gap-4 hover:bg-gray-200 rounded-lg tracking-wider text-secondary-500 bg-secondary-500 bg-opacity-[4%] shadow`}
      >
        <div className='centerContent flex-col gap-3'>
          <p className='text-2xl uppercase font-bold leading-none drop-shadow-sm'>
            <Moment format='HH:mm'>{date}</Moment>
          </p>
          <p className='text-base leading-none uppercase drop-shadow-sm'>
            <Moment format='D MMMM YYYY'>{date}</Moment>
          </p>
        </div>
        <div className='centerContent flex gap-2 drop-shadow-sm'>
          <IoMdPin className='text-xl opacity-80 text-accent-500'></IoMdPin>
          {venue}
        </div>
        <div className='centerContent flex gap-2 drop-shadow-sm'>
          <IoMdGlobe className='text-xl opacity-80 text-accent-500'></IoMdGlobe>
          {city}, {country}
        </div>
        <div className='centerContent'>
          <div className='centerContent w-[180px] h-12 rounded-lg bg-accent-500 hover:bg-secondary-500 text-primary-500 hover:cursor-pointer active:scale-[0.97] shadow duration-100 select-none'>
            <p className='tracking-widest uppercase font-medium text-sm '>Event Link</p>
          </div>
        </div>
      </AnimateIn>

      {/**
       * Mobile view below.
       */}

      <AnimateIn
        classes={`mt-4 ${!last && 'mb-4'
          } lg:hidden centerContent py-6 max-w-[1400px] w-full flex flex-col gap-8 rounded-lg`}
      >
        <BsCalendar3 className='text-6xl shadow'></BsCalendar3>
        <div className='centerContent flex-col gap-3'>
          <p className='text-xl leading-none font-medium tracking-wide drop-shadow-sm'>
            <Moment format='HH:mm dddd'>{date}</Moment>
          </p>
          <p className='text-2xl leading-none font-bold tracking-wide drop-shadow-sm'>
            <Moment format='D MMMM YYYY'>{date}</Moment>
          </p>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='centerContent tracking-wide leading-none font-medium italic flex gap-2 drop-shadow-sm'>
            <IoMdPin className='text-xl'></IoMdPin>
            {venue}
          </div>
          <div className='centerContent font-medium leading-none text-base tracking-wide flex gap-2 drop-shadow-sm'>
            <IoMdGlobe className='text-xl'></IoMdGlobe>
            {city}, {country}
          </div>
        </div>
        <div className='centerContent w-full'>
          <div className='centerContent w-3/4 h-12 rounded-lg bg-accent-500 shadow-lg text-primary-500 hover:cursor-pointer hover:bg-secondary-500 active:scale-[0.96] duration-150 select-none'>
            <p className='tracking-widest uppercase font-medium text-sm active:scale-[0.98]'>Event Link</p>
          </div>
        </div>
      </AnimateIn>

      {/**
       * Divider for both mobile and desktop.
       */}

      {/* {!last && (
        <div className='container w-3/4 h-[1px] rounded-full bg-black opacity-20 md:opacity-10'></div>
      )} */}
    </>
  )
}
