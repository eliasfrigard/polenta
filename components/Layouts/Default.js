import Header from '../Header'
import Footer from '../Footer'

export default function Layout({ children }) {
  const headerHeight = '80px'
  const headerPosition = 'fixed'

  return (
    <div>
      <Header height={headerHeight} position={headerPosition} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
