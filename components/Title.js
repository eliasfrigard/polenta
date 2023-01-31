export default function Title({ title, subtitle, textColor = 'text-black', borderColor = 'border-black' }) {
  if (!title) return ''

  return (
    <div className='px-4 w-3/4 md:w-full md:px-0 container flex flex-col justify-center items-center'>
      <p
        className={`text-center text-3xl md:text-5xl md:text-[3.6em] border-b border-opacity-20 pb-4 font-bold tracking-wide leading-tight md:leading-none uppercase ${textColor} ${borderColor} border-opacity-20`}
      >
        {title}
      </p>
      {subtitle && <p className='mt-4 text-xl'>{subtitle}</p>}
    </div>
  )
}
