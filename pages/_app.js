import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div className='min-h-screen h-full align-content-center'>
      <header className='bg-header'>
      <nav className='p-6 flex mx-auto justify-between flex-wrap max-w-screen-x1'>
        <a href='/' className='text-5xl font-bold text-blue-500'>HuskyCoin</a>
      </nav>
      </header>
      <div className='flex justify-center'>
        <div className='flex justify-items-stretch space-x-8'>
          <Link href="/">
            <a className="nav-link text-3xl text-green-500">Home</a>
          </Link>
          <Link href='/faucet'>
            <a className='nav-link text-3xl text-green-500'>Faucet</a>
          </Link>
          <Link href='/stake'>
            <a className='nav-link text-3xl text-green-500'>Staking</a>
          </Link>
          <Link href='/about'>
            <a className='nav-link text-3xl text-green-500'>About</a>
          </Link>
        </div>
      </div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
