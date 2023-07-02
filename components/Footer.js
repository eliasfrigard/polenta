import { useState, useEffect } from "react"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('')

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, [])

  return (
    <div className='reverseBg absolute w-full flex justify-center py-8 px-8 md:px-0'>
      <div className='container grid grid-flow-row rounded md:px-32 tracking-wide leading-loose'>
        <div className='text-center'>
          <p>Copyright {currentYear} © Polenta Music</p>
          <p className='text-xs mt-2'>Website by Elias Frigård</p>
        </div>
      </div>
    </div>
  )
}
