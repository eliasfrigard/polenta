import React from 'react'
import axios from 'axios'

export default function ContactForm() {
  const messageRef = React.useRef(null)
  const emailRef = React.useRef(null)
  const nameRef = React.useRef(null)
  const phoneRef = React.useRef(null)

  const [formIsValid, setFormIsValid] = React.useState(true)
  const [emailIsValid, setEmailValid] = React.useState(true)
  const [nameIsValid, setNameIsValid] = React.useState(true)
  const [phoneIsValid, setPhoneIsValid] = React.useState(true)
  const [messageIsValid, setMessageIsValid] = React.useState(true)

  const [formSuccess, setFormSuccess] = React.useState(null)

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

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFormSuccess(null)

    const message = messageRef.current.value
    const email = emailRef.current.value
    const name = nameRef.current.value
    const phone = phoneRef.current.value

    if (
      !nameIsValid ||
      !emailIsValid ||
      !phoneIsValid ||
      !messageIsValid ||
      message.length <= 0 ||
      email.length <= 0 ||
      name.length <= 0
    ) {
      setFormIsValid(false)
      return
    } else {
      setFormIsValid(true)
    }

    const formData = {
      message,
      email,
      phone,
      name,
    }

    try {
      await axios.post('/api/sendEmail', formData)

      setFormSuccess(true)

      messageRef.current.value = ''
      emailRef.current.value = ''
      nameRef.current.value = ''
      phoneRef.current.value = ''
    } catch (error) {
      setFormSuccess(false)
    }
  }

  return (
    <>
      <div className={`centerContent flex-col contactForm w-full md:pb-16 mt-8 md:mt-32 px-6 lg:px-0`}>
        <p className='text-3xl md:text-4xl font-bold uppercase mb-4 tracking-wide text-secondary-500 pb-4 px-4 text-center'>
          contact / booking
        </p>
        <div className='flex-col p-8 md:p-12 mt-2 md:mt-0 container max-w-4xl roundedShadow bg-primary-500 h-full border border-opacity-10 border-secondary-500'>
          <form className='w-full'>
            <div className='flex flex-wrap -mx-3 md:mb-4'>
              <div className='w-full px-3 mb-2 md:mb-0'>
                <label className='formLabel' for='grid-first-name'>
                  Full Name
                </label>
                <input
                  ref={nameRef}
                  className={`appearance-none block w-full border border-secondary-500 border-opacity-10 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-primary-500 ${
                    !nameIsValid && 'border-red-500'
                  }`}
                  id='grid-first-name'
                  type='text'
                  placeholder='So we know who you are!'
                  onChange={validateName}
                />
                {!nameIsValid && (
                  <p className='text-red-800 ml-1 mb-1 text-xs font-medium'>Name is not valid.</p>
                )}
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 md:mb-4'>
              <div className='w-full md:w-1/2 px-3 mb-2 md:mb-0'>
                <label className='formLabel' for='grid-first-name'>
                  Email Address
                </label>
                <input
                  ref={emailRef}
                  className={`appearance-none block w-full border border-secondary-500 border-opacity-10 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-primary-500 ${
                    !emailIsValid && 'border-red-500'
                  }`}
                  id='grid-first-name'
                  type='text'
                  placeholder='So we know how to reach you!'
                  onBlur={validateEmail}
                />
                {!emailIsValid && (
                  <p className='text-red-800 ml-1 text-xs font-medium'>Please fill out your email address.</p>
                )}
              </div>
              <div className='w-full md:w-1/2 px-3 mb-2 md:mb-0'>
                <label className='formLabel' for='grid-first-name'>
                  Phone Number
                </label>
                <input
                  ref={phoneRef}
                  className={`appearance-none block w-full border border-secondary-500 border-opacity-10 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-primary-500 ${
                    !phoneIsValid && 'border-red-500'
                  }`}
                  id='grid-first-name'
                  type='text'
                  placeholder='So we can call you back!'
                  onChange={validatePhone}
                />
                {!phoneIsValid && (
                  <p className='text-red-800 ml-1 text-xs font-medium'>
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
                  ref={messageRef}
                  rows='7'
                  className={`resize-none md:resize-y appearance-none block w-full border border-secondary-500 border-opacity-10 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-primary-500 ${
                    !messageIsValid && 'border-red-500'
                  }`}
                  id='grid-first-name'
                  type='text'
                  placeholder='What are you thinking about?'
                  onChange={validateMessage}
                />
                {!messageIsValid && (
                  <p className='text-red-800 ml-1 text-xs font-medium'>
                    Message cannot be empty or exceed 4000 characters.
                  </p>
                )}
              </div>
            </div>
          </form>
          <button
            onClick={handleSubmit}
            className='roundedShadow w-full h-14 md:mt-2 bg-secondary-500 text-primary-500 hover:bg-accent-500 font-bold tracking-wider uppercase duration-150 active:scale-[0.98] select-none'
          >
            Send message
          </button>
          <div className='pt-4 flex justify-center items-center'>
            {!formIsValid && (
              <p className='text-red-800 ml-1 text-[14px] tracking-wide font-medium'>
                Please fill out all the required fields correctly!
              </p>
            )}
            {formSuccess !== null &&
              (!formSuccess ? (
                <p className='text-red-800 ml-1 text-[14px] tracking-wide font-medium'>
                  The message could not be sent, please try again later!
                </p>
              ) : (
                <p className='text-green-800 ml-1 text-[14px] tracking-wide font-medium'>
                  Your message was sent successfully!
                </p>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
