import Image from 'next/image'

export default function Hamburger({ name, instrument, email, phone, image, description }) {
  return (
    <div className='flex flex-col centerContent'>
      <div className='aspect-[3/4] w-full min-w-[200px] relative'>
        <Image alt={name} src={image} fill className='object-cover roundedShadow' />
        {!description && (
          <div className='imageOverlay'>
            <div className='centerContent flex-col min-w-full mt-4 md:mt-8 gap-2 text-primary-500'>
              <p className='text-lg md:text-xl tracking-wider font uppercase'>{name}</p>
              <div className='h-[1px] w-2/3 bg-primary-500 opacity-20'></div>
            </div>
          </div>
        )}
      </div>
      <div className='centerContent flex-col w-full mt-4 md:mt-8 gap-2'>
        <p className='text-lg md:text-xl tracking-wide font-medium'>{name}</p>
        <div className='h-[1px] w-2/3 bg-black opacity-20'></div>
        <div className='centerContent flex-col md:text-base'>
          {instrument && <p className=' mt-1 italic tracking-wide'>{instrument}</p>}
          {phone && <p className='mt-1 tracking-wide font-medium'>{phone}</p>}
          {email && <p className='mt-1 italic tracking-wide'>{email}</p>}
        </div>
      </div>
    </div>
  )
}
