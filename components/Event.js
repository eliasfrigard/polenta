import Moment from 'react-moment'
import { IoMdGlobe, IoMdPin } from 'react-icons/io'
import { BsCalendar3 } from 'react-icons/bs'
import AnimateIn from './AnimateIn'

export default function Event({ venue, date, city, country, last = false, first = false, link }) {
  return (
    <>
      <AnimateIn
        classes={`${!first && 'mt-2'} ${
          !last && 'mb-2'
        } hidden lg:grid py-7 max-w-[1200px] w-full grid-flow-row grid-cols-4 gap-4 hover:bg-gray-200 rounded-lg tracking-wider text-secondary-500 bg-secondary-500 bg-opacity-[4%] shadow-md`}
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
          {!link ? (
            <button className='centerContent w-[180px] h-12 rounded-lg bg-accent-500 text-primary-500 cursor-default shadowselect-none tracking-widest uppercase font-medium text-sm opacity-30 shadow-md'>
              Event Link
            </button>
          ) : (
            <a href={link} target='_blank' rel='noopener noreferrer nofollow'>
              <button className='centerContent w-[180px] h-12 rounded-lg bg-accent-500 hover:bg-secondary-500 text-primary-500 hover:cursor-pointer active:scale-[0.97] shadow-md duration-100 select-none tracking-widest uppercase font-medium text-sm'>
                Event Link
              </button>
            </a>
          )}
        </div>
      </AnimateIn>

      {/**
       * Mobile view below.
       */}

      <AnimateIn
        classes={`mt-4 ${
          !last && 'mb-4'
        } lg:hidden centerContent py-12 max-w-[85vw] w-full flex flex-col gap-7 rounded-lg shadow-md bg-secondary-500 bg-opacity-[4%]`}
      >
        <BsCalendar3 className='text-4xl shadow-md text-accent-500'></BsCalendar3>
        <div className='centerContent flex-col gap-4'>
          <p className='text-4xl uppercase font-bold leading-none drop-shadow-sm'>
            <Moment format='HH:mm'>{date}</Moment>
          </p>
          <p className='text-lg font-medium leading-none uppercase drop-shadow-sm'>
            <Moment format='D MMMM YYYY'>{date}</Moment>
          </p>
        </div>
        <div className='centerContent flex flex-col gap-2 drop-shadow-sm font-medium'>
          <div className='centerContent flex gap-2 drop-shadow-sm'>
            <IoMdPin className='text-xl opacity-80 text-accent-500'></IoMdPin>
            {venue}
          </div>
          <div className='centerContent flex gap-2 drop-shadow-sm'>
            <IoMdGlobe className='text-xl opacity-80 text-accent-500'></IoMdGlobe>
            {city}, {country}
          </div>
        </div>
        <div className='centerContent w-full'>
          {!link ? (
            <button className='centerContent w-3/4 h-12 rounded-lg bg-accent-500 shadow-md text-primary-500 cursor-default select-none tracking-widest uppercase font-medium text-sm opacity-30'>
              Event Link
            </button>
          ) : (
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer nofollow'
              className='w-full flex justify-center items-center'
            >
              <button className='centerContent w-3/4 h-12 rounded-lg bg-accent-500 shadow-md text-primary-500 hover:cursor-pointer hover:bg-secondary-500 duration-150 select-none tracking-widest uppercase font-medium text-sm active:scale-[0.98]'>
                Event Link
              </button>
            </a>
          )}
        </div>
      </AnimateIn>
    </>
  )
}
