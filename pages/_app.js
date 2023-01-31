import '../styles/globals.css'

import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Script src="/static/script.js" />
      <Component {...pageProps} />
    </div>
  )
}



export default MyApp
