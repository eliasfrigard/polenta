import Moment from 'react-moment'

export default function Event({ venue, date, city, country, last = false, first = false }) {
  return (
    <>
      <div
        className={`${
          !first && 'mt-4'
        } p-4 max-w-[1200px] w-full grid grid-flow-row grid-cols-4 gap-4 hover:bg-gray-200 hover:cursor-pointer rounded-lg`}
      >
        <div className='centerContent flex-col gap-3'>
          <p className='text leading-none font-medium tracking-wide'>
            <Moment format='DD MMMM YYYY'>{date}</Moment>
          </p>
          <p className='text-xl leading-none font-medium tracking-wide'>
            <Moment format='HH:mm dddd'>{date}</Moment>
          </p>
        </div>
        <div className='centerContent tracking-wide font-medium'>{venue}</div>
        <div className='centerContent font-medium text-lg tracking-wide'>
          {city}, {country}
        </div>
        <div className='centerContent'>
          <div className='centerContent w-[150px] h-12 rounded-lg bg-[#011C26] shadow text-white'>
            <p className='tracking-widest uppercase font-medium text-sm'>Event Link</p>
          </div>
        </div>
      </div>
      {!last && <div className='container w-full h-[1px] rounded-full bg-black mt-4 opacity-10'></div>}
    </>
  )
}
