import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

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
            href="https://polygonscan.com/">{' '}HuskyCoin
          </a> Dapp!
        </h1>
        <div className={styles.description}>
          <a className='text-2xl'>An Introductory Tutorial to Web3 on Ethereum</a>
          <p className='text-xs mb-6'>Dedicated to 
            <a 
              className='text-blue-500'
              href='https://instagram.com/cleo.thehusky'>
              {''} Cleo the Husky
            </a>
          </p>
          <p className='text-xs'>If you find this tutorial helpful, send a tip!</p>
          <p className='text-xs'>👦🏻👦🏻.eth / 0x65b54A4646369D8ad83CB58A5a6b39F22fcd8cEe</p>
        </div>
        <p className='font-bold text-1xl'>Get Started
          <a className='nav-link text-1xl font-bold text-green-500' href='/tutorial'> Here</a>
        </p>
        <div className={styles.grid}>
          <a href="https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask" className={styles.card}>
            <h2>1. Setting up MetaMask &rarr;</h2>
            <p>A crypto wallet is your gateway to Web3 infrastructure. Other crypto wallet options include Coinbase Wallet and Brave Wallet.</p>
          </a>
          <a href="https://etherscan.io/" className={styles.card}>
            <h2>2. Generate an Ethereum address &rarr;</h2>
            <p>Learn about the insane things an Ethereum address is capable of and explore Etherscan, where all of Web3 is publicly visible.</p>
          </a>
          <Link href="/faucet">
            <a
              className={styles.card}
            >
              <h2>3. Claim HuskyCoins from my faucet &rarr;</h2>
              <p>Claim your first 69420 ERC20 tokens from the HuskyCoin faucet.</p>
            </a>
          </Link>
          <Link href="/stake">
            <a
              className={styles.card}
            >
              <h2>4. Stake to earn more HuskyCoins &rarr;</h2>
              <p>
                Grow your token balance by staking HuskyCoins and earning passive income!
              </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

