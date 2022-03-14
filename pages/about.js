import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function About() {
    return(
      <div className={styles.container}>
        <div className='p-12'>
          <h1 className={styles.title}>
            Why Crypto?
          </h1>
          <p className='flex justify-center p-8'>
            Cryptocurrency protocols leverage cryptography and decentralized computing architecture to achieve the first ever verifiable and immutable digital scarcity on the internet. 
            Networks like the Bitcoin blockchain maintain a public, transparent ledger of balances corresponding to individual addresses (think email addresses but for money) that are controlled by a cryptographically secure password called the private key.
          </p>
          <h1 className='flex justify-center text-4xl p-6'>
            So What? I have Venmo and a bank.
          </h1>
          <p className='flex justify-center p-8'>
            The cryptography that secures blockchains like Bitcoin and Ethereum are unbreakable. 
            The encryption algorithms like sha256/keccak256 utilize numbers so massive that they are impregnable to brute-force attack.
            Your BTC/ETH public address and private key for example are numbers (in base58 and hexadecimal respectively) larger than the number of atoms in the observable universe.
            Guessing a private key to steal someone's money is like finding a needle in the haystack, except much worse- more akin to trying to pinpoint a single specific atom anywhere in the universe.
          </p>
        </div>
      </div>
    )
}