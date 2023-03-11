import Header from '../Header'
import Footer from '../Footer'

import Head from 'next/head'

export default function Layout({ children, pageTitle }) {
  return (
    <div>
      <Head>
        <title>{pageTitle} | Polenta</title>
        <meta property="og:title" content={pageTitle} key="title" />
      </Head>
      <Header />
      <main className='bg-primary-500 pt-[75px]'>{children}</main>
      <Footer />
    </div>
  )
}
