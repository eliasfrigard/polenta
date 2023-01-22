import React from 'react'

export default function ContactForm() {
  const [emailIsValid, setEmailValid] = React.useState(true)
  const [nameIsValid, setNameIsValid] = React.useState(true)
  const [phoneIsValid, setPhoneIsValid] = React.useState(true)
  const [messageIsValid, setMessageIdValid] = React.useState(true)

  return (
    <>
      <div className={`centerContent contactForm w-full`}>
        <div className='flex-col p-12 container max-w-4xl roundedShadow bg-[#F2F2F2] h-full border border-opacity-50 border-[#011C26]'>
          <form className='w-full'>
            <div className='flex flex-wrap -mx-3 mb-5'>
              <div className='w-full px-3 mb-6 md:mb-0'>
                <label className='formLabel' for='grid-first-name'>
                  Full Name
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                    !nameIsValid && 'border-red-500'
                  }`}
                  id='grid-first-name'
                  type='text'
                  placeholder='Jane'
                />
                {!nameIsValid && <p className='text-red-500 text-xs italic'>Please fill out this field.</p>}
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-5'>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label className='formLabel' for='grid-first-name'>
                  Email Address
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                    !emailIsValid && 'border-red-500'
                  }`}
                  id='grid-first-name'
                  type='text'
                  placeholder='Jane'
                />
                {!emailIsValid && <p className='text-red-500 text-xs italic'>Please fill out this field.</p>}
              </div>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label className='formLabel' for='grid-first-name'>
                  Phone Number
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                    !phoneIsValid && 'border-red-500'
                  }`}
                  id='grid-first-name'
                  type='text'
                  placeholder='Jane'
                />
                {!phoneIsValid && <p className='text-red-500 text-xs italic'>Please fill out this field.</p>}
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full px-3 mb-5 md:mb-0'>
                <label className='formLabel' for='grid-first-name'>
                  Message
                </label>
                <textarea
                  rows='7'
                  className={`resize-none appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                    !messageIsValid && 'border-red-500'
                  }`}
                  id='grid-first-name'
                  type='text'
                  placeholder='Jane'
                />
                {!messageIsValid && (
                  <p className='text-red-500 text-xs italic'>Please fill out this field.</p>
                )}
              </div>
            </div>
          </form>
          <button className='roundedShadow w-full h-14 mt-2 bg-[#011C26] text-white font-bold tracking-wider uppercase'>
            Send message
          </button>
        </div>
      </div>
    </>
  )
}
