import Header from '../Header'
import Footer from '../Footer'

import Head from 'next/head'

export default function Layout({ children, pageTitle, pageDescription, imageUrl, pageUrl }) {
  return (
    <div>

      <Head>
        <title>{pageTitle} | Polenta</title>
        <meta name="description" content="A brief description of the content on the page" />
        <meta name="keywords" content="Fiddle, Guitar, Finnish, Finland, Folk, Music, Kansanmusiikki, Folk Music, Violin, Kuisma, Malmivaara, Sippola, Kinnunen" />
        <meta name="author" content="Elias Frigård" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content={pageTitle} key="title" />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        {/* <meta property="og:url" content={pageUrl} /> */}
      </Head>
      <Header />
      <main className='bg-primary-500 pt-[75px]'>{children}</main>
      <Footer />
    </div>
  )
}
