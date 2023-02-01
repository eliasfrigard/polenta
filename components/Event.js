import Moment from 'react-moment'
import { IoMdGlobe, IoMdPin } from 'react-icons/io'
import { BsCalendar3 } from 'react-icons/bs'

export default function Event({ venue, date, city, country, last = false, first = false }) {
  return (
    <>
      <div
        className={`${!first && 'mt-4'} ${
          !last && 'mb-4'
        } hidden md:grid p-4 max-w-[1400px] w-full grid-flow-row grid-cols-4 gap-4 hover:bg-gray-200 rounded-lg`}
      >
        <div className='centerContent flex-col gap-3'>
          <p className='text leading-none font-medium tracking-wider drop-shadow-sm'>
            <Moment format='DD MMMM YYYY'>{date}</Moment>
          </p>
          <p className='text-xl leading-none font-medium tracking-wide drop-shadow-sm'>
            <Moment format='dddd HH:mm'>{date}</Moment>
          </p>
        </div>
        <div className='centerContent tracking-wider font-bold flex gap-2 drop-shadow-sm'>
          <IoMdPin className='text-xl'></IoMdPin>
          {venue}
        </div>
        <div className='centerContent font-medium text-base tracking-wider flex gap-2 drop-shadow-sm'>
          <IoMdGlobe className='text-xl'></IoMdGlobe>
          {city}, {country}
        </div>
        <div className='centerContent'>
          <div className='centerContent w-[150px] h-12 rounded-lg bg-accent-500 hover:bg-secondary-500 text-primary-500 hover:cursor-pointer shadow duration-150'>
            <p className='tracking-widest uppercase font-medium text-sm'>Event Link</p>
          </div>
        </div>
      </div>

      {/**
       * Mobile view below.
       */}

      <div
        className={`mt-4 ${
          !last && 'mb-4'
        } md:hidden centerContent py-6 max-w-[1400px] w-full flex flex-col gap-8 rounded-lg`}
      >
        <BsCalendar3 className='text-6xl shadow'></BsCalendar3>
        <div className='centerContent flex-col gap-3'>
          <p className='text-xl leading-none font-medium tracking-wide drop-shadow-sm'>
            <Moment format='HH:mm dddd'>{date}</Moment>
          </p>
          <p className='text-2xl leading-none font-bold tracking-wide drop-shadow-sm'>
            <Moment format='DD MMMM YYYY'>{date}</Moment>
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
          <div className='centerContent w-3/4 h-12 rounded-lg bg-accent-500 shadow-lg text-primary-500 hover:cursor-pointer hover:bg-secondary-500 duration-150'>
            <p className='tracking-widest uppercase font-medium text-sm'>Event Link</p>
          </div>
        </div>
      </div>

      {/**
       * Divider for both mobile and desktop.
       */}

      {!last && (
        <div className='container w-3/4 h-[1px] rounded-full bg-black opacity-20 md:opacity-10'></div>
      )}
    </>
  )
}
