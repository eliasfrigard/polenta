import AnimateIn from './AnimateIn'

export default function Title({
  title,
  subtitle,
  textColor = 'text-secondary-500',
  borderColor = 'border-black',
}) {
  if (!title) return ''

  return (
    <AnimateIn classes='px-4 w-3/4 md:w-full md:px-0 container flex flex-col justify-center items-center'>
      <p
        className={`text-center text-3xl md:text-5xl md:text-[3em] pb-4 md:pb-0 font-bold tracking-wide leading-tight md:leading-none uppercase ${textColor} ${borderColor} border-opacity-20 px-4`}
      >
        {title}
      </p>
      {subtitle && <p className='mt-4 text-xl text-center'>{subtitle}</p>}
    </AnimateIn>
  )
}
