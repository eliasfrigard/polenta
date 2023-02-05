import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import React from 'react'

export default function ContactForm() {
  const [emailIsValid, setEmailValid] = React.useState(true)
  const [nameIsValid, setNameIsValid] = React.useState(true)
  const [phoneIsValid, setPhoneIsValid] = React.useState(true)
  const [messageIsValid, setMessageIsValid] = React.useState(true)

  const validateEmail = (event) => {
    const value = event.target.value.toString()
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    setEmailValid(value.match(regex))
  }

  const validatePhone = (event) => {
    const value = event.target.value.toString()

    setPhoneIsValid(value.length < 25)
  }

  const validateName = (event) => {
    const value = event.target.value.toString()

    setNameIsValid(value.length < 124 && value.length > 0)
  }

  const validateMessage = (event) => {
    const value = event.target.value.toString()

    setMessageIsValid(value.length < 4000 && value.length > 0)
  }

  return (
    <>
      <div className={`centerContent flex-col contactForm w-full md:pb-16 mt-8 md:mt-32 px-6 lg:px-0`}>
        <p className='text-3xl md:text-4xl font-bold uppercase mb-8 tracking-wide border-b border-opacity-20 border-black pb-4 px-4 text-center'>
          contact / booking
        </p>
        <div className='flex-col p-8 md:p-12 mt-2 md:mt-0 container max-w-4xl roundedShadow bg-primary-500 h-full border border-opacity-20 border-secondary-500'>
          <form className='w-full'>
            <div className='flex flex-wrap -mx-3 md:mb-4'>
              <div className='w-full px-3 mb-2 md:mb-0'>
                <label className='formLabel' for='grid-first-name'>
                  Full Name
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-secondary-500 border-opacity-20 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-primary-500 ${
                    !nameIsValid && 'border-red-500'
                  }`}
                  id='grid-first-name'
                  type='text'
                  placeholder='So we know who you are!'
                  onChange={validateName}
                />
                {!nameIsValid && (
                  <p className='text-[#ef4444] ml-1 mb-1 text-xs italic'>Name is not valid.</p>
                )}
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 md:mb-4'>
              <div className='w-full md:w-1/2 px-3 mb-2 md:mb-0'>
                <label className='formLabel' for='grid-first-name'>
                  Email Address
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-secondary-500 border-opacity-20 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-primary-500 ${
                    !emailIsValid && 'border-red-500'
                  }`}
                  id='grid-first-name'
                  type='text'
                  placeholder='So we know where to respond!'
                  onBlur={validateEmail}
                />
                {!emailIsValid && (
                  <p className='text-[#ef4444] ml-1 text-xs italic'>Please fill out your email address.</p>
                )}
              </div>
              <div className='w-full md:w-1/2 px-3 mb-2 md:mb-0'>
                <label className='formLabel' for='grid-first-name'>
                  Phone Number
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-secondary-500 border-opacity-20 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-primary-500 ${
                    !phoneIsValid && 'border-red-500'
                  }`}
                  id='grid-first-name'
                  type='text'
                  placeholder='So we can call you back!'
                  onChange={validatePhone}
                />
                {!phoneIsValid && (
                  <p className='text-[#ef4444] ml-1 text-xs italic'>
                    Phone number cannot be more than 25 characters.
                  </p>
                )}
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-2'>
              <div className='w-full px-3 mb-2 md:mb-0'>
                <label className='formLabel' for='grid-first-name'>
                  Message
                </label>
                <textarea
                  rows='7'
                  className={`resize-none md:resize-y appearance-none block w-full bg-gray-200 text-gray-700 border border-secondary-500 border-opacity-20 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-primary-500 ${
                    !messageIsValid && 'border-red-500'
                  }`}
                  id='grid-first-name'
                  type='text'
                  placeholder='What are you thinking about?'
                  onChange={validateMessage}
                />
                {!messageIsValid && (
                  <p className='text-[#ef4444] ml-1 text-xs italic'>
                    Message cannot be empty or exceed 4000 characters.
                  </p>
                )}
              </div>
            </div>
          </form>
          <button className='roundedShadow w-full h-14 md:mt-2 bg-secondary-500 text-primary-500 hover:bg-accent-500 font-bold tracking-wider uppercase duration-150 active:scale-[0.98] select-none'>
            Send message
          </button>
        </div>
      </div>
    </>
  )
}
