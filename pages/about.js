import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import geminiEarn from '../assets/geminiEarn.png'
import bOfA from '../assets/BofA.png'
import matcha from '../assets/matcha.png'
import instagramNFTs from '../assets/instagramNFTs.png'
import energy from '../assets/energy.png'
import hyperinflation from '../assets/hyperinflation.png'

export default function About() {
    return(
      <div className={styles.container}>
        <div className='p-12 mr-12 ml-12'>
          <div className='mt-6 mb-10'>
            <div className='mt-8 mb-12'>
              <h1 className={styles.title}>
                Why Crypto?
              </h1>
            </div>
            <p className='flex justify-center mb-4 indent-8'>
              Cryptocurrency protocols leverage cryptography, open-source code, and decentralized computing architecture to achieve the first ever trustless, censorship-resistant, digitally scarce objects on the internet called tokens. 
              Tokens are a technological primitive that enable social coordination, public goods funding, and peer-to-peer hyperstructures that automate away greedy corporate middlemen and eliminate maintenance costs. 
              Whether being fungible (ERC20), non-fungible (NFTs/ERC721), or semi-fungible (ERC1155), tokens are to Web3 what websites are to the TCP/IP protocol we know as the internet.
            </p>
            <p className='flex justify-center mb-6 indent-8'>
              The first ever blockchain, the Bitcoin network, has over the past decade underlined the powerful results of decentralized, open-source tokens that use cryptography to maintain a public, transparent ledger of every balance and transaction ever sent between crypto addresses (imagine email addresses but entirely public and carrying money instead of text).
              Ethereum took this one step further, still prioritizing decentralization, by introducing the concept of programmable digital money.
            </p>
            <a  
              className='flex justify-center text-blue-500' 
              href='https://www.coinbase.com/learn/crypto-basics/what-is-bitcoin'>
                More technical details about the Bitcoin protocol and its high level implications here.
            </a>
          </div>
          <h1 className='flex justify-center text-4xl mt-8 mb-8'>
            So what? I have Venmo and a bank.
          </h1>
          <p className='flex justify-center mb-8 indent-8'>
            Blockchain tokens are non-custodial and permissionless, which is what enables a 24/7 peer-to-peer network of economic activity.
            This means they inherently disintermediate the institutional middlemen that extract rent/interest from you while also restricting your economic activity to weekday business hours as well as delaying settlement by 3-5 business days.
            Think of your Ethereum address as your on-chain bank account,
            except it kicks your bank's ass because:
          </p>  
          <ol className='justify-center space-y-5 mr-24 ml-24'>
            <li 
              className='text-sm flex justify-center indent-2'>
                1. Current interest rates on US dollar tokens (like USDC/GUSD/USDT, which are always redeemable for $1) are anywhere from 3-8% APY, over 300 times higher than your 0.03% APY savings account. 
                That's just stablecoins (aka crypto dollars), too!  
                Staking $ETH for example earns you 4.5% APY denominated in $ETH, which can appreciate further as demand for Web3 increases.</li>
            <div className='flex justify-center'>
              <Image className='flex justify-center' src={geminiEarn}></Image>
            </div>
            <li 
              className='text-sm flex justify-center mt-2'>
              <div>
              <p className='flex justify-center mb-2 indent-2'>2. Crypto wallets are self-custodial, meaning you, AND ONLY YOU, control your funds with your private key, 24/7. 
                None of that 3-5 business day, Mon-Fri 9-5, credit check/transfer limit crap. 
                A checking/savings account is at its core an unsecured loan of YOUR money that your bank uses to fund mortgages and other risky ventures that earn them 5-20% profit using YOUR money. 
                From that yield, they pay you 0.03% interest to your "high yield" savings account and then hoard all the rest of the profits for themselves and their CEOs/shareholders. 
              </p>
              <p className='flex justify-center indent-4'>Along the way, they may even cause a world economic recession a la 2008! 
                In which case, FDIC Insurance for $250,000 on your deposits is helpful... right?
                Except FDIC Insurance is funded by... you guessed it: taxpayers. You!
                So, in essence, you're "FDIC Insured" by taxpayer money, which is, again, your money. 
                FDIC Insurance isn't insurance for your money, it's a carte blanche insurance for the banks' funds- paid for by you and me.
                That's not even skimming the surface of other heinous rent extraction like overdraft fees, account maintenance balances, etc.  But I digress...
              </p>
              </div>
            </li>
            <div className='flex justify-center'>
              <Image className='flex justify-center' src={bOfA}></Image>
            </div>
            <li 
              className='text-sm flex justify-center mt-2 indent-2'>
                3. Ethereum addresses support much more than just money. 
                Dollars and stablecoins are cool and all but you can also store and stake fungible tokens called ERC20s. 
                Some popular examples include $USDC, $DAI, Shiba Inu $SHIB, UniSwap $UNI, Chainlink $LINK, Wrapped Bitcoin $WBTC, Polygon $MATIC, each possessing different capabilites from governance to membership all while being tradeable 24/7 for other tokens like $ETH or crypto dollars. 
                Being programmable money, these tokens are capable of anything a regular computer running software can do.
            </li>
            <div className='flex justify-center'>
              <Image className='flex justify-center' src={matcha}></Image>
            </div>
            <li 
              className='text-sm flex justify-center mt-2 indent-2'>
                4. You can even store non-fungible tokens, NFTs for short, which are provably unique tokens that expand on the programmability of tokens. 
                Most people associate NFTs with digital art, but that barely touches the surface of what NFTs are capable of. 
                Digital ownership bears powerful implications on the internet economy, as evidenced by the rapid rise in NFT speculation and the emergence of the term "Metaverse".
                They can for example represent/mirror physical-world objects, serve as concert tickets, function as club memberships, stream music, stream viewership royalty payments, codify digital contractual obligations, or even contain marriage certificates. 
                Yes, people have put their marriage licenses on-chain on Ethereum! I plan to!
            </li>
            <div className='flex justify-center'>
              <Image className='flex justify-center' src={instagramNFTs}></Image>
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
          <p className='flex justify-center indent-8'>
            The cryptography that secures blockchains like Bitcoin and Ethereum is impenetrable. 
            The encryption algorithms like sha256/keccak256 utilize numbers so massive that they are impervious to brute-force attack.
            Your BTC/ETH public address and private key, for example, are numbers (in base58 and hexadecimal respectively) larger than the number of atoms in the observable universe.
            Guessing a private key to steal someone's money is like finding a needle in the haystack, except much, much harder- it's more akin to trying to pinpoint a single specific atom anywhere in the universe.
          </p>
          <p className='flex justify-center indent-8'>
            Banks don't use protocols anywhere near this level of security. 
            Routing/Account numbers, SWIFT, and SMS verification are fundamentally insecure; not to mention the centralized databases that are susceptible to fires or power outages.
            Decentralized cryptocurrencies on the other hand feature open-source code, meaning anyone anywhere in the world can copy-paste the protocol software and run a node to contribute by verifying and propagating transactions, greatly bolstering network resilience.
            As a result, only a worldwide power outage or nuclear war that destroys every computer on Earth could realistically stop the Bitcoin and Ethereum networks from functioning.
            The $BTC and $ETH blockchains have never gone down in a decade, unlike Facebook/Instagram or Google which have proven vulnerable to CDN/DNS outages every few months.
          </p>
          <p 
            className='text-sm flex justify-center mt-6 mr-12 ml-12'>
              Fun fact: the entire United States military combined with any three-letter agency (NSA, CIA, FBI) and their massive budgets could not destroy the Bitcoin or Ethereum protocols, short of destroying Earth with nukes. 
              That said, keep in mind that (most) other cryptocurrencies are not anywhere near as decentralized or open-sourced and are therefore not as secure.
          </p>
          <div className='justify-center text-4xl mt-12 mb-10'>
            <h1 className='flex justify-center'>
              So Crypto improves cybersecurity,
              </h1>
            <h2 className='flex justify-center'>
              But I might still stick to dollars
            </h2>
          </div>
          <p className='flex justify-center indent-8'>
            In western societies run by relatively trustworthy governments overseeing functional economies, we've gotten far removed from the need for a medium of exchange that isn't controlled corrupt politicians or hyperinflationary monetary policy.
            Most of the rest of the world doesn't enjoy such luxury.
            Every fiat currency in history to date has ultimately failed.
            Fiat refers to money that is backed by trust in a central bank/government authority, and NOT backed by a scarce commodity like gold.
            Because the Euro, the Dollar, the Yuan, and the Yen are not redeemable for gold, they are examples of such fiat currencies; even the British Pound is not redeemable for a pound of silver as it once was!
            For every surviving fiat on the globe, there is a large graveyard of fiat currencies that failed to hyperinflation or deflationary spirals or some other economic woe.
          </p>
          <p className='flex justify-center indent-8 mb-10'>
            It's fine to stick with US dollars if you're lucky enough to live in the west, but for those less fortunate living in countries like Zimbabwe, Greece, Turkey, Argentina, Russia, and many others, your entire livelihood is at the whim of a handful of oligarchs, central bankers, or an authoritarian regime.
            For people in these countries, the ability to exit a failing financial system being destroyed by kleptocrats or a dictator is paramount.
            The first emergent use case in crypto's Web3 has been termed "DeFi," short for decentralized finance.
            The simple ability to trade your tanking fiat currency (ie the Turkish Lyra) for stablecoins pegged to the dollar has become a humanitarian solution to geopolitical issues.
          </p>
          <div className='flex justify-center'>
            <Image className='flex justify-center' src={hyperinflation}></Image>
          </div>
          <div className='justify-center text-4xl mt-12 mb-10'>
            <h1 className='flex justify-center'>
              DeFi fights dictators?
            </h1>
            <h2 className='flex justify-center'>
              Sounds far-fetched.
            </h2>
          </div>
          <p className='flex justify-center indent-8'>
            Given that the most powerful nation states in the world cannot stop the Bitcoin and Ethereum blockchains from confirming blocks, a number of powerful attributes arise as a result.
            Censorship-resistance is an attribute that bears little weight in our luxurious western economies run by trustworthy governments, but it's a different story when you're living under an authoritarian regime that specializes in censoring free speech and has the banking system under its thumb.
            Web3 and DeFi frees you from the threat of an authoritarian freezing your bank accounts or restricting the internet content you can view via national firewall.
            Any person with a dirt cheap smartphone and data plan can permissionlessly use Web3, without risk of censorship, so long as you remain connected to the internet.
          </p>
          <p className='flex justify-center indent-8'>
            Computers run blockchains and thankfully, computers are incapable of discrimination, be it racism, gender, sexual orientation, or political affiliation.
            Nearly 2 billion people in the world (that's roughly 1/4 of the world population!) are unbanked, meaning they do not have a bank account and are unable to acquire one to join us, the western banked elite.
            The current financial system is discriminatory and exclusionary by default (eg redlining), Web3 on the other hand is inclusive by default.
          </p>
          <div className='justify-center text-4xl mt-12 mb-10'>
            <h1 className='flex justify-center mb-10'>
              What about Crypto's carbon footprint?
            </h1>
            <Image className='flex justify-center' src={energy}></Image>
          </div>
          <p className='flex justify-center mb-2 indent-8'>
            One of Bitcoin's groundbreaking technological innovations is the solution to the Byzantine General's Dilemma and the Double Spend Problem.
            It achieves this by reaching consensus among many decentralized nodes using an algorithm known as Proof-Of-Work, abbreviated as PoW.
            The technical details surrounding PoW are fascinating, making use of cryptographic hashes and signatures which are not important for me to delve into here.
            In short, Bitcoin incentivizes computers to work at brute-forcing (by trial and error) a sha256 hash of dynamically adjusted difficulty, known as $BTC mining.
            These computers operate and secure the network in exchange for payment in Bitcoins; unfortunately this work has the drawback of consuming a lot of electricity.
          </p>
          <p className='flex justify-center mb-2 indent-8'>
            Many savvy miners have found ways to offset the electricity costs by making use of excess waste energy, like when power grids are underutilized during evening hours while people sleep or using natural gas waste flares.
            Recently, there have been numerous widely-circulated articles claiming that a Bitcoin transaction requires a wildly large amount of electricity; most of these claims cite a University of Cambridge study that demonstrated poor understanding of the protocol.
            Individual transactions in fact cost no electricity at all!
            Instead, it is each block, which can contain any number of transactions, that consumes a lot of energy.
            Others point to the fact that the Bitcoin network consumes more electricity than small countries like Iceland; this is to be expected, considering the Bitcoin economy is larger and faster than the entire economic GDP of Iceland (Iceland's GDP is ~$22 billion; Bitcoin secures ~$1 trillion 24/7, over 40x larger).
          </p>
          <p className='flex justify-center indent-8'>
            There are many other uses of electricity that consume more energy/waste than PoW that we do not decry for damaging the environment: Christmas lights, cruise ships, household driers, private jets, or YouTube, for example.
            You'll find misinformation about the energy consumption of Proof of Work algorithms all over the internet, but ultimately these concerns are based in fact, simply because securing a trillion dollar economy larger than most countries is very costly.
            PoW consensus is very energy intensive, and though many miners do offset their emissions and sometimes even provide a net carbon benefit to the environment, just as many miners operate using dirty energy sources and carbon intensive techniques.
            This is one reason why Ethereum has chosen to end its reliance on PoW in favor of another consensus mechanism that will drop Ethereum's carbon footprint by 99% while simultaneously improving decentralization: Proof of Stake.
          </p>
          <div className='justify-center text-4xl mt-12 mb-10'>
            <h1 className='flex justify-center'>
              What is Proof of Stake?
            </h1>
          </div>
          <p className='flex justify-center indent-8'>
            Proof of Stake (abbreviated PoS) aims to replace Proof of Work by removing miners and introducing validators in their stead.
            Rather than having miners rapidly brute force solutions to a sha256 hash, PoS nodes confirm transactions in each block by putting up a stake that earns 
          </p>
        </div>
      </div>
    )
}