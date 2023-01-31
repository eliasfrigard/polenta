import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <script defer type="text/javascript" src="/static/script.js"></script>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}



export default MyApp
