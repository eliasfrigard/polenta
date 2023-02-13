import '../styles/globals.css'

import Script from 'next/script'

import { Poppins } from '@next/font/google'

const caudex = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-caudex',
})

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${caudex.variable} font-caudex`}>
      <Script src="/static/script.js" />
      <Component {...pageProps} />
    </div>
  )
}



export default MyApp
