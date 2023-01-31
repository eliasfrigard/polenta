import React from 'react'

export default function ContactForm() {
  const [emailIsValid, setEmailValid] = React.useState(true)
  const [nameIsValid, setNameIsValid] = React.useState(true)
  const [phoneIsValid, setPhoneIsValid] = React.useState(true)
  const [messageIsValid, setMessageIdValid] = React.useState(true)

  return (
    <>
      <div className={`centerContent contactForm w-full md:pb-16 mt-8 md:mt-32 px-4 md:px-0`}>
        <div className='flex-col p-8 md:p-12 container max-w-4xl roundedShadow bg-primary-500 h-full border border-opacity-50 border-secondary-500'>
          <form className='w-full'>
            <div className='flex flex-wrap -mx-3 md:mb-4'>
              <div className='w-full px-3 mb-2 md:mb-0'>
                <label className='formLabel' for='grid-first-name'>
                  Full Name
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-primary-500 ${!nameIsValid && 'border-red-500'
                    }`}
                  id='grid-first-name'
                  type='text'
                  placeholder='Jane'
                />
                {!nameIsValid && <p className='text-red-500 text-xs italic'>Please fill out this field.</p>}
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 md:mb-4'>
              <div className='w-full md:w-1/2 px-3 mb-2 md:mb-0'>
                <label className='formLabel' for='grid-first-name'>
                  Email Address
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-primary-500 ${!emailIsValid && 'border-red-500'
                    }`}
                  id='grid-first-name'
                  type='text'
                  placeholder='Jane'
                />
                {!emailIsValid && <p className='text-red-500 text-xs italic'>Please fill out this field.</p>}
              </div>
              <div className='w-full md:w-1/2 px-3 mb-2 md:mb-0'>
                <label className='formLabel' for='grid-first-name'>
                  Phone Number
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-primary-500 ${!phoneIsValid && 'border-red-500'
                    }`}
                  id='grid-first-name'
                  type='text'
                  placeholder='Jane'
                />
                {!phoneIsValid && <p className='text-red-500 text-xs italic'>Please fill out this field.</p>}
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-2'>
              <div className='w-full px-3 mb-2 md:mb-0'>
                <label className='formLabel' for='grid-first-name'>
                  Message
                </label>
                <textarea
                  rows='7'
                  className={`resize-none appearance-none block w-full bg-gray-200 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-primary-500 ${!messageIsValid && 'border-red-500'
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
          <button className='roundedShadow w-full h-14 md:mt-2 bg-secondary-500 text-primary-500 font-bold tracking-wider uppercase'>
            Send message
          </button>
        </div>
      </div>
    </>
  )
}
