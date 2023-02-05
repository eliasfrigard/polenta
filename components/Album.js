import Image from 'next/image'
import Title from './Title'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function Album({ title, description, text, cover, spotify }) {
  return (
    <div className='w-full flex flex-col centerContent gap-8 md:gap-12 px-8 md:px-12 my-16 lg:my-32'>
      <Title title={title} subtitle={description}></Title>

      <div className={`container grid grid-flow-row mx-12 gap-8 md:gap-12 ${spotify && 'lg:grid-cols-2'}`}>
        <div className='overflow-hidden rounded-xl shadow-lg w-full aspect-square relative'>
          <Image
            alt={title}
            src={cover}
            fill
            className='object-cover rounded-xl aspect-square overflow-hidden'
          />
          {text && (
            <div className='imageOverlay p-10 md:p-16 overflow-y-scroll scrollbarHide'>
              <div className='prose tracking-wide leading-loose prose-img:rounded-xl prose-invert'>
                {documentToReactComponents(text)}
              </div>
            </div>
          )}
        </div>
        {spotify && (
          <iframe
            className='shadow-lg aspect-square'
            src={`https://open.spotify.com/embed/album/${spotify.split('/').pop()}`}
            width='100%'
            height='100%'
            allowfullscreen
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
            border
          ></iframe>
        )}
      </div>
    </div>
  )
}
