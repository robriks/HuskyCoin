import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import huskyColor from '../assets/huskycolor.gif'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HuskyCoin Dapp</title>
        <meta name="description" content="HuskyCoin" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the 
          <a 
            className='font-bold text-6xl text-blue-500'
            href="https://rinkeby.etherscan.io/address/0x8cfb42a80291737cb62cef7b665fe1304d112fee">{' '}HuskyCoin
          </a> Dapp!
        </h1>
        <div className={styles.description}>
          <a className='text-2xl sm:text-3xl'>An Introductory Tutorial to Web3 on Ethereum</a>
          <div className='flex justify-center mt-6'>
            <Image src={huskyColor} layout='intrinsic'></Image>
          </div>
          <p className='text-base sm:text-lg sm:font-medium mt-6 mb-4'>Dedicated to 
            <a 
              className='text-blue-500'
              href='https://instagram.com/cleo.thehusky'>
              {''} Cleo the Husky
            </a>
          </p>
          <p className='text-xs mt-6'>If you find this tutorial helpful, send a tip!</p>
          <a href='https://etherscan.io/address/0x65b54a4646369d8ad83cb58a5a6b39f22fcd8cee' className='text-xs text-blue-500 -mb-6'>👦🏻👦🏻.eth / 0x65b54A4646369D8ad83CB58A5a6b39F22fcd8cEe</a>
        </div>
        <div className={styles.grid}>
          <a href="https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask" className={styles.card}>
            <h2>1. Download MetaMask and set up a Crypto wallet
            <a>&rarr;</a>
            </h2>
            <p>A crypto wallet is your gateway to Web3 infrastructure. Learn about the insane things an Ethereum address is capable of.</p>
          </a>
          <a href="https://polygon.technology/" className={styles.card}>
            <h2>2. Connect to the Polygon Network on Ethereum &rarr;</h2>
            <p>Enjoy near-zero gas fees by using cutting-edge blockchain scaling technology. Ditch mainnet's expensive fees in favor of Polygon's Layer 2 rollup.</p>
          </a>
          <Link href="/faucet">
            <a
              className={styles.card}
            >
              <h2>3. Claim HuskyCoins free of charge from my faucet 
              <a>&rarr;</a>
              </h2>
              <p>Claim your first 69420 ERC20 tokens from the HuskyCoin faucet. HuskyCoin is a cryptocurrency that I've designed for educational purposes.</p>
            </a>
          </Link>
          <Link href="/stake">
            <a
              className={styles.card}
            >
              <h2>4. Stake your tokens to earn more HuskyCoins 
              <a>&rarr;</a>
              </h2>
              <p>
                Watch your token balance grow in real time by staking HuskyCoins. Learn how you can earn passive income on any stakeable token!
              </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

