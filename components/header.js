import Link from 'next/link'

export default function Header() {
    return(
      <div>
        <header className='bg-header'>
        <nav className='p-6 mx-auto justify-between  max-w-screen-x1'>
          <div 
            className='flow-root p-4 mt-2'>
              <a href='/' className='text-5xl font-bold text-blue-500'>HuskyCoin</a>
                <a
                  className='float-right p-5' 
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
              <a className='nav-link text-3xl text-green-500'>Web3</a>
            </Link>
            <Link href='/tutorial'>
              <a className='nav-link text-3xl text-green-500'>Tutorial</a>
            </Link>
          </div>
        </div>
      </div>
    )
}