import Header from '../Header'
import Footer from '../Footer'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className='bg-[#F2F2F2]'>{children}</main>
      <Footer />
    </div>
  )
}
