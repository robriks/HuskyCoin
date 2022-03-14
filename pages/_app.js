import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <p>HuskyCoin</p>
        <div>
        <Link href="/">
          <a className="text-green-500">Home</a>
        </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
