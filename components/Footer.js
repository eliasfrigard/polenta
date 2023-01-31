export default function Footer({ height }) {
  return (
    <div className='w-full bg-secondary-500 flex justify-center py-8 px-8 md:px-0 text-primary-500'>
      <div className='container grid grid-flow-row h-full rounded px-32 tracking-wide leading-loose'>
        <div className='text-center'>
          <p>Copyright 2023 © Polenta Music</p>
          <p className='text-sm mt-2'>Website by Elias Frigård</p>
        </div>
      </div>
    </div>
  )
}
