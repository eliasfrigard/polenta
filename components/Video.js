import React from 'react'
import getYoutubeID from 'get-youtube-id'
import AnimateIn from './AnimateIn.js'

export default function Video({ title, description, link }) {
  return (
    <AnimateIn classes='w-full centerContent flex-col'>
      {/* <div className='centerContent text-center flex-col mb-6 gap-4'>
        <p className='text-2xl md:text-3xl text-center tracking-wide font-medium uppercase border-b border-secondary-500 border-opacity-20 pb-4 px-4'>
          {title}
        </p>
        <p className='italic opacity-70 tracking-wide font-medium'>{description}</p>
      </div> */}
      <iframe
        title={title}
        src={`https://www.youtube.com/embed/${getYoutubeID(link)}`}
        className='video'
        allowFullScreen
        loading='lazy'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      ></iframe>
    </AnimateIn>
  )
}
