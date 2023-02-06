import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import AnimateIn from './AnimateIn'

export default function Hamburger({ name, instrument, email, phone, image, text }) {
  return (
    <AnimateIn classes='flex flex-col centerContent'>
      <div className='aspect-[3/4] w-full min-w-[200px] relative'>
        <Image alt={name} src={image} fill className='object-cover roundedShadow' />

        {text && (
          <div className='imageOverlay p-10 md:p-16 overflow-y-scroll scrollbarHide'>
            <div className='prose tracking-wide leading-loose prose-img:rounded-xl prose-invert'>
              {documentToReactComponents(text)}
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
    </AnimateIn>
  )
}
