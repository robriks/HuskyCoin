import '../styles/globals.css'
import Link from 'next/link'
import Footer from '../components/footer'
import Header from '../components/header'

function MyApp({ Component, pageProps }) {
  return (
    <div className='min-h-screen h-full align-content-center'>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  )
}

export default MyApp
