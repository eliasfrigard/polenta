import Image from 'next/image'
import Title from './Title'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import AnimateIn from './AnimateIn'

export default function Album({ title, description, text, cover, spotify }) {
  return (
    <AnimateIn classes='w-full flex flex-col centerContent gap-8 md:gap-12 px-8 md:px-12 my-12 lg:my-32'>
      <Title title={title} subtitle={description}></Title>

      <div className={`container grid grid-flow-row mx-12 gap-8 md:gap-12 ${spotify && 'lg:grid-cols-2'}`}>
        <div className='overflow-hidden rounded-xl shadow-lg w-full md:h-full aspect-square relative'>
          <Image
            alt={title}
            src={cover}
            fill
            className='object-cover rounded-xl aspect-square overflow-hidden'
          />
          {text && text.length > 0 && (
            <div className='imageOverlay p-10 md:p-16 overflow-y-scroll scrollbarHide'>
              <div className='prose tracking-wide leading-loose prose-img:rounded-xl prose-invert'>
                {documentToReactComponents(text)}
              </div>
            </div>
          )}
        </div>
        {spotify && (
          <iframe
            className='md:shadow-lg min-h-300px h-[450px] md:h-full md:aspect-square w-full'
            src={`https://open.spotify.com/embed/album/${spotify.split('/').pop()}`}
            allowFullScreen
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe>
        )}
      </div>
    </AnimateIn>
  )
}
