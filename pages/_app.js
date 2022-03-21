import '../styles/globals.css'
import Footer from '../components/footer'
import Header from '../components/header'

function MyApp({ Component, pageProps }) {
  return (
    <div className='min-h-screen h-auto align-content-center'>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  )
}

export default MyApp
