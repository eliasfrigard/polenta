export default function Footer({ height }) {
  return (
    <div className='reverseBg w-full flex justify-center py-8 px-8 md:px-0'>
      <div className='container grid grid-flow-row rounded md:px-32 tracking-wide leading-loose'>
        <div className='text-center'>
          <p>Copyright 2023 © Polenta Music</p>
          <p className='text-sm mt-2'>Website by Elias Frigård</p>
        </div>
      </div>
    </div>
  )
}
