import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Header from '../Header'
import Footer from '../Footer'

import Head from 'next/head'

export default function Layout({ children, pageTitle = '', pageDescription, imageUrl, pageUrl }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  const title = `${pageTitle} | Polenta`

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content='A brief description of the content on the page' />
        <meta
          name='keywords'
          content='Fiddle, Guitar, Finnish, Finland, Folk, Music, Kansanmusiikki, Folk Music, Violin, Kuisma, Malmivaara, Sippola, Kinnunen'
        />
        <meta name='author' content='Elias Frigård' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index,follow' />
        <meta property='og:title' content={pageTitle} key='title' />
        <meta property='og:description' content={pageDescription} />
        <meta property='og:image' content={imageUrl} />
        <meta property='og:url' content={`https://polentamusic.com${pageUrl}`} />
      </Head>
      <Header />
      <main
        style={{ transition: 'opacity 250ms ease-out' }}
        className={`bg-primary-500 pt-[75px] fade-in ${loading ? 'opacity-0' : 'opacity-100'}`}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}
