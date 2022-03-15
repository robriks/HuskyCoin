import '../styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'
import githubLogo from '../assets/github-logo.png'
import twitterLogo from '../assets/twitter-logo.png'
import instagramLogo from '../assets/instagram-logo.png'

function MyApp({ Component, pageProps }) {
  return (
    <div className='min-h-screen h-full align-content-center'>
      <header className='bg-header'>
      <nav className='p-6 mx-auto justify-between  max-w-screen-x1'>
        <div 
          class='flow-root' 
          className='p-4 mt-2'>
          <a href='/' className='text-5xl font-bold text-blue-500'>HuskyCoin</a>
           <a
              class='float-right p-5' 
              href='https://github.com/robriks/HuskyCoin' 
              > A Web3 Tutorial by {' '}
              <a className='text-blue-500'>{''} Robriks / 👦🏻👦🏻.eth
              </a>
            </a>
        </div>
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
      <footer className='p-5'>
        <div className='flex justify-center'>
          <div className='p-4'>
            <a 
              href='https://github.com/robriks/HuskyCoin'>
              <Image 
                src={githubLogo}
              />
            </a>
          </div>
          <div className='p-4'>
            <a
              href='https://twitter.com/marsterlund'>
              <Image 
                src={twitterLogo} 
              />
            </a>
          </div>
          <div className='p-4'>
            <a
              href='https://instagram.com/marsterlund'>
              <Image
                src={instagramLogo} 
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MyApp
