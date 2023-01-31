export default function Title({ title, subtitle, size = 'lg', color = '[#010D00]' }) {
  if (!title) return ''

  const textColor = `text-${color}`
  const borderColor = `border-${color}`

  return (
    <div className='px-4 md:px-0 container flex flex-col justify-center items-center'>
      <p className={`text-center text-5xl md:text-[3.6em] border-b-2 border-opacity-10 pb-3 font-bold tracking-wide leading-tight md:leading-none uppercase ${textColor} ${borderColor}`}>
        {title}
      </p>
      {subtitle && <p className='mt-4 text-xl'>{subtitle}</p>}
    </div>
  )
}
