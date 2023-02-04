import Image from 'next/image'

export default function Hamburger({ name, instrument, email, phone, image }) {
  return (
    <div className='flex flex-col centerContent'>
      <div className='aspect-[5/6] w-full min-w-[300px] relative'>
        <Image alt={name} src={image} fill className='object-cover roundedShadow' />
      </div>
      <div className='centerContent flex-col w-full mt-4 md:mt-8 gap-2'>
        <p className='text-lg md:text-xl tracking-wide font-medium'>{name}</p>
        <div className='h-[1px] w-2/3 bg-black opacity-20'></div>
        <div className='centerContent flex-col md:text-lg'>
          {instrument && <p className=' mt-1 italic tracking-wide'>{instrument}</p>}
          {phone && <p className='mt-1 tracking-wide font-medium'>{phone}</p>}
          {email && <p className='mt-1 italic tracking-wide'>{email}</p>}
        </div>
      </div>
    </div>
  )
}
