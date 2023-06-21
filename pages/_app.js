import '../styles/globals.css'

import Script from 'next/script'

import { Montserrat } from '@next/font/google'

const mont = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-mont',
})

function MyApp({ Component, pageProps }) {
  return (
    <div id='__next' className={`${mont.className} font-mont`}>
      <Script src='/static/script.js' />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
