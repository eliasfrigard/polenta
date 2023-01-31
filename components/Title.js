export default function Title({ title, subtitle, size = 'lg', color = '[#010D00]' }) {
  if (!title) return ''

  const textColor = `text-${color}`
  const borderColor = `border-${color}`

  return (
    <div className='px-4 w-3/4 md:w-full md:px-0 container flex flex-col justify-center items-center'>
      <p className={`text-center text-3xl md:text-5xl md:text-[3.6em] border-b border-opacity-20 pb-3 font-bold tracking-wide leading-tight md:leading-none uppercase ${textColor} ${borderColor}`}>
        {title}
      </p>
      {subtitle && <p className='mt-4 text-xl'>{subtitle}</p>}
    </div>
  )
}
