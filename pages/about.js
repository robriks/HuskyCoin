import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import geminiEarn from '../assets/geminiEarn.png'
import bOfA from '../assets/BofA.png'
import matcha from '../assets/matcha.png'
import instagramNFTs from '../assets/instagramNFTs.png'

export default function About() {
    return(
      <div className={styles.container}>
        <div className='p-12 mr-12 ml-12'>
          <div className='space-y-2'>
            <h1 className={styles.title}>
              Why Crypto?
            </h1>
            <a className='flex justify-center p-8'>
              Cryptocurrency protocols leverage cryptography, open-source code, and decentralized computing architecture to achieve the first ever trustless, censorship-resistant, digitally scarce objects on the internet called tokens. 
              Tokens are a technological primitive that enable social coordination, public goods funding, and peer-to-peer hyperstructures that require no greedy corporate middlemen or maintenance costs. 
              Whether fungible (ERC20), non-fungible (NFTs/ERC721), or semi-fungible (ERC1155), tokens are to Web3 what websites are to the TCP/IP protocol we know as the internet.
              The first ever blockchain, the Bitcoin network, has over the past decade underlined the powerful results of decentralized, open-source tokens that use cryptography to maintain a public, transparent ledger of balances corresponding to individual addresses (imagine email addresses but for money).
              Ethereum took this one step further, still prioritizing decentralization, by introducing the concept of programmable digital money.
            </a>
            <a  
              className='flex justify-center text-blue-500' 
              href='https://www.coinbase.com/learn/crypto-basics/what-is-bitcoin'>
                Read more details about the Bitcoin protocol and its high level implications here.
            </a>
          </div>
          <h1 className='flex justify-center text-4xl p-6 mt-6'>
            So what? I have Venmo and a bank.
          </h1>
          <p className='flex justify-center p-8'>
            Blockchain tokens are non-custodial and permissionless, which is what enables a 24/7 peer-to-peer network of economic activity.
            This means they inherently disintermediate the institutional middlemen that extract rent/interest from while also restricting your economic activity to weekday business hours, delaying settlement by 3-5 business days.
            Think of your Ethereum address as your on-chain bank account,
            except it kicks your bank's ass because:
          </p>  
          <ol className='justify-center space-y-5 mr-24 ml-24'>
            <li 
              className='text-sm flex justify-center'>
                1. Current interest rates on US dollar tokens (like USDC/GUSD/USDT, which are always redeemable for $1) are anywhere from 3-8% APY, over 300 times higher than your 0.03% APY savings account. 
                That's just stablecoins (aka crypto dollars), too!  
                Staking $ETH for example earns you 4.5% APY denominated in $ETH, which can appreciate further as demand for Web3 increases.</li>
            <div className='flex justify-center'>
              <Image className='flex justify-center' src={geminiEarn}></Image>
            </div>
            <li 
              className='text-sm flex justify-center mt-2'>
                2. Crypto wallets are self-custodial, meaning you, AND ONLY YOU, control your funds with your private key, 24/7. 
                None of that 3-5 business day, Mon-Fri 9-5, credit check/transfer limit bullshit. 
                If you haven't yet noticed, a checking/savings account is at its core an unsecured loan of YOUR money that your bank uses to fund mortgages and other risky ventures that earn them 5-20% profit using YOUR money. 
                From that yield, they pay you 0.03% interest to your "high yield" savings account and then hoard all the rest of the profits for themselves and their CEOs/shareholders. 
                Along the way, they may even cause a world economic recession a la 2008! 
                In which case, FDIC Insurance for $250,000 on your deposits is helpful... right?
                Except FDIC Insurance is funded by... you guessed it: taxpayers. You!
                So you're "FDIC Insured" by taxpayer money... Which is, again, your money. FDIC Insurance isn't insurance for your money, it's carte blanche insurance for the banks' funds- paid for by you and me.
                That's not even skimming the surface of other heinous rent extraction like overdraft fees, account maintenance balances, etc.  But I digress...</li>
            <div className='flex justify-center'>
              <Image className='flex justify-center' src={bOfA}></Image>
            </div>
            <li 
              className='text-sm flex justify-center mt-2'>
                3. Ethereum addresses support much more than just money. 
                Dollars and stablecoins are cool and all but you can also store and stake fungible tokens called ERC20s. 
                Some popular examples include $USDC, $DAI, Shiba Inu $SHIB, UniSwap $UNI, Chainlink $LINK, Wrapped Bitcoin $WBTC, Polygon $MATIC, each possessing different capabilites from governance to membership all while being tradeable at any time for other tokens like $ETH or crypto dollars. 
                Programmable money means these tokens are capable of anything a regular computer running software can do.
            </li>
            <div className='flex justify-center'>
              <Image className='flex justify-center' src={matcha}></Image>
            </div>
            <li 
              className='text-sm flex justify-center mt-2'>
                4. You can even store non-fungible tokens, NFTs for short, which are provably unique tokens that expand on the programmability of tokens. 
                Most people associate NFTs with digital art, but that barely touches the surface of what NFTs are capable of. 
                Digital ownership bears powerful implications on the internet economy, as evidenced by the rapid rise in NFT speculation and the emergence of the term "Metaverse".
                They can for example represent/mirror physical-world objects, serve as concert tickets, function as club memberships, stream music, stream viewership royalty payments, codify digital contractual obligations, or even contain marriage certificates. 
                Yes, people have gotten married on-chain on Ethereum! I plan to!
            </li>
            <div className='flex justify-center'>
              <Image src={instagramNFTs}></Image>
            </div>
          </ol>
          <div className='justify-center mt-12 mb-10'>
            <h1 className='flex justify-center text-4xl'>
              Okay, I get it: banks suck. 
            </h1>
            <h2 className='flex justify-center text-4xl'>
              But is Crypto safe?
            </h2>
          </div>
          <p>
            The cryptography that secures blockchains like Bitcoin and Ethereum are unbreakable. 
            The encryption algorithms like sha256/keccak256 utilize numbers so massive that they are impregnable to brute-force attack.
            Your BTC/ETH public address and private key, for example, are numbers (in base58 and hexadecimal respectively) larger than the number of atoms in the observable universe.
            Guessing a private key to steal someone's money is like finding a needle in the haystack, except much, much harder- it's more akin to trying to pinpoint a single specific atom anywhere in the universe.
            Banks don't use protocols anywhere near this level of security. 
            Routing/Account numbers, SWIFT, and SMS verification are fundamentally insecure; not to mention the centralized databases that are susceptible to fires or power outages.
            Decentralized cryptocurrencies on the other hand feature open-source code, meaning anyone anywhere in the world can copy-paste the protocol software and run a node to contribute by verifying and propagating transactions, greatly bolstering network resilience.
            As a result, only a worldwide power outage or nuclear war that destroys every computer on Earth could realistically stop the Bitcoin and Ethereum networks from functioning.
            The $BTC and $ETH blockchains have never gone down in a decade, unlike Facebook/Instagram or Google which have proven vulnerable to CDN outages every few months.
          </p>
          <p 
            className='text-sm flex justify-center mt-6 mr-12 ml-12'>
              Fun fact: the entire United States military and its massive budget could not destroy the Bitcoin or Ethereum protocols, short of destroying Earth with nukes. 
              That said, keep in mind that (most) other cryptocurrencies are not anywhere near as decentralized or open-sourced and are therefore not as secure.
          </p>
        </div>
      </div>
    )
}