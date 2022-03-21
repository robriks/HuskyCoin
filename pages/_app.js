import '../styles/globals.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Modal from '../components/modal2'
import { isMobile } from 'react-device-detect'


function MyApp({ Component, pageProps }) {
  if (isMobile) {
    return (
      <div>
        <Modal></Modal>
      </div>
    )
  } else {
  return (
      <div className='min-h-screen h-auto align-content-center'>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </div>
    )
  }
}

export default MyApp
