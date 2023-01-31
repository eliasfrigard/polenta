export default function Hamburger({ name, instrument, email, phone }) {
  return (
    <div className='flex flex-col flex-1 centerContent'>
      <div className='roundedShadow bg-[#011C26] aspect-[5/6] min-w-[300px]'></div>
      <div className='centerContent flex-col w-full mt-4 gap-2'>
        <p className='text-lg tracking-wide font-medium'>{name}</p>
        <div className='h-[1px] w-2/3 bg-black opacity-20'></div>
        <div className='centerContent flex-col'>
          {instrument && <p className='text mt-1 italic tracking-wide'>{instrument}</p>}
          {phone && <p className='text mt-1 tracking-wide font-medium'>{phone}</p>}
          {email && <p className='text mt-1 italic tracking-wide'>{email}</p>}
        </div>
      </div>
    </div>
  )
}
