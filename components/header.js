import Link from 'next/link'

export default function Header() {
    return(
      <div className='justify-center h-auto w-auto'>
        <header className='bg-header'>
          <nav className='p-6 mx-auto justify-between max-w-screen-x1'>
            <div 
              className='flow-root ml-4 mt-2'>
                <a 
                  href='/' 
                  className='flex justify-center text-5xl font-bold text-blue-500 sm:float-left'>
                    HuskyCoin
                </a>
                <div className='sm:mt-12'>
                  <a
                    className='flex justify-center text-xs mt-4 sm:text-sm sm:float-right sm:-mt-6 sm:mr-4' 
                    href='https://github.com/robriks/HuskyCoin' 
                    > A Web3 Tutorial by {' '}
                    <a className='text-blue-500'>
                      &nbsp; 📯~Robriks / 👦🏻👦🏻.eth~📯
                    </a>
                  </a>
                </div>
            </div>
          </nav>
        </header>
        <div className='flex justify-center w-auto'>
          <div className='bg-gradient-to-r from-sky-100 to-sky-300 p-4 sm:p-6 shadow-2xl rounded-full'>
            <div className='flex justify-items-stretch sm:text-2xl space-x-6 sm:space-x-10 w-auto'>
              <Link href="/">
                <a className="nav-link text-blue-700">Home</a>
              </Link>
              <Link href='/faucet'>
                <a className='nav-link text-blue-700'>Faucet</a>
              </Link>
              <Link href='/stake'>
                <a className='nav-link text-blue-700'>Staking</a>
              </Link>
              <Link href='/about'>
                <a className='nav-link text-blue-700'>Web3</a>
              </Link>
              <Link href='/tutorial'>
                <a className='nav-link text-blue-700'>Tutorial</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}