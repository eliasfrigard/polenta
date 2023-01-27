export default function Title({ title, subtitle, size = 'lg' }) {
  if (!title) return ''

  return (
    <div className='px-4 md:px-0 container flex flex-col justify-center items-center'>
      <p className='text-center text-5xl md:text-[4em] border-b-2 border-[#010D00] border-opacity-10 pb-3 font-bold tracking-wide leading-tight md:leading-none uppercase text-[#010D00]'>
        {title}
      </p>
      {subtitle && <p className='mt-4 text-xl'>{subtitle}</p>}
    </div>
  )
}
