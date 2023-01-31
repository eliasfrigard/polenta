import Header from '../Header'
import Footer from '../Footer'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className='bg-primary-500'>{children}</main>
      <Footer />
    </div>
  )
}
