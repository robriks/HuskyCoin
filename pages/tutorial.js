import styles from '../styles/Home.module.css'
import Image from 'next/image'
import warren from '../assets/warren.png'
import MMwallet from '../assets/MMwallet.png'
import MMsetup from '../assets/MMsetup.png'
import MMbalance from '../assets/MMbalance.png'

export default function Tutorial() {
    return(
      <div className={styles.container}>
        <div className={styles.title}>
          <h1 className='flex justify-center mt-20 mb-12'>For n00Bs</h1>
        </div>
        <div className='p-2 sm:p-6 sm:mr-8 sm:ml-8'>
          <p className='justify-center indent-8 mb-2'>
            Welcome to your first Web3 tutorial! If you have never generated a cryptocurrency address or submitted a transaction on-chain but want to try it out, start here. 
            If you're just looking for my writeup with generalized information on Web3 and Crypto, head to the 
            <a href='/about' className='text-blue-500'>{' '}Web3</a> section.
          </p>
          <p className='justify-center indent-8'>
            This tutorial assumes you're unfamiliar with the cryptography, math, and computer science concepts happening behind the scenes in Web3, so don't be discouraged if you get confused at any point. 
            Don't hesitate to contact me with any questions or issues while you work through this tutorial- it shouldn't take more than an hour or so.
            If you want recommendations for further Web3/DeFi exploration, shoot me a DM on GitHub/Twitter or Instagram (see icons at the bottom of the page) and I will happily assist.
          </p>
          <div className={styles.description}> 
            <h1 className='flex justify-center text-4xl'>
              What is a crypto address, you ask? 
            </h1>
          </div>
          <p className='indent-8'>
            While you're at it, wtf is a blockchain anyway? Private key? Public address? 
            Are ENS (.eth) domains comparable to the more familiar DNS (.com or .org) domains? 
            What about NFTs!? 
            Is the wild west of DeFi only for shadowy super coders like robriks/👦🏻👦🏻.eth/@marsterlund? Elizabeth Warren seems to think so!
          </p>
          <div className='flex justify-center mt-8 mb-8'>
            <Image src={warren}></Image>
          </div>
          <p className='indent-8'>
            What are crypto loans? How does Cryptography work? 
            Can I mine cryptocurrency with my computer to make money? 
            How do I stake crypto for passive income? 
            Facebook = Meta... verse...? Right? 
            Also, I heard on Reddit that 
              <a href='https://dogecoin.com/' className='font-bold text-blue-500'>{' '}_insertRandomDogCoinTokenHere_</a> 
            {' '}is the next Bitcoin?! 
            And most importantly, 
          </p>
            <p className='flex justify-center text-lg font-bold mt-4'>
              iS KrIpT0 PoNZi ScHeME, sEr???
            </p>
            <p className='flex justify-center text-xs mb-2'>(no, lmeow...)</p>
          <p className='justify-center indent-8 mb-2'>All of these complicated questions need to be answered and explained to the public in a concise, educational format. This is my attempt to educate people on the equitable, censorship resistant, self-custodial world of digital assets known as Web3. I'll try to keep it as non-technical, digestible, and easy to follow as possible for you.</p>
          <p className='justify-center indent-8'>Again, if you're just looking to read about these concepts head over to the 
            <a href='/about' className='text-blue-500'>{' '}Web3{' '}</a>
            section
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>What you will learn: </h1>
          </div>
          <ol className='list-disc justify-center ml-12'>
            <li>Set up a crypto wallet via MetaMask</li>
            <li>Make your first on-chain transaction by claiming 69420 free tokens (HuskyCoins $HUSKY) that I have coded and deployed for your convenience</li>
            <li>
              How to earn passive income by contributing to network security and decentralization via staking. 
              I've implemented staking functionality for $HUSKY so you can watch your balance grow in real time! 
            </li>
            <li>There is no next Bitcorn. Sry. :(</li>
          </ol>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>What you will not find here: </h1>
          </div>
          <ol className='list-disc justify-center ml-12'> 
            <li className=''>Financial advice, lel.</li>
            <p className='text-xs mt-1 -ml-4'>($HUSKY is for educational purposes only)</p>
          </ol>
          <div className={styles.description}>
            <h1 className='flex justify-center text-4xl font-bold'>Let's Get Started!</h1>
          </div>
          <div className='flex justify-center mt-8 mb-2'>
            <h2 className='text-3xl'>1. Download MetaMask</h2>
          </div>
          <div className='flex justify-center mb-8'>
            <Image src={MMwallet} layout='intrinsic'></Image>
          </div>
          <p className='justify-center indent-8 mb-4'>
            This tutorial focuses on the industry standards that are ubiquitous and have rich documentation. 
            MetaMask is the most widespread crypto wallet, although other awesome wallets like Coinbase Wallet/Brave Wallet/Rainbow Wallet are available too.
            All of these wallets connect to the blockchain for you and safely handle your private keys, but here I'll focus on MetaMask.
          </p>
          <p className='justify-center indent-8 text-xs mb-4 mr-8 ml-8'>
            Note: I have been asked many times if a Coinbase, Robinhood, Venmo, CashApp, or Paypal account will adequately serve as a crypto wallet. 
            As of writing, these companies/services do NOT offer a native web3 wallet that allow you to interact with the Ethereum or Bitcoin networks. 
            (Coinbase Wallet is a separate app/browser extension than the Coinbase app you use to buy crypto). 
            These services simply allow you to buy and sell the assets for price speculation. Boring!
          </p>
          <p className='justify-center indent-8 mb-2'>
            With that out of the way, let's get started. 
            On the home page, click the box titled: "1. Setting up MetaMask" and follow the instructions on downloading and installing the MetaMask browser extension.
            Keep in mind that Safari is not supported;{' '} 
              <a href='https://brave.com' className='text-blue-500'>Brave</a> 
            {' '}is the most Web3-friendly (and my favorite!) browser.
          </p>
          <p className='justify-center indent-8 mb-2'>
            Once you've successfully installed MetaMask for your browser, click "Create a Wallet" under the "New to MetaMask" page. 
            Select whichever data sharing option you wish and set a secure passphrase.
            Unless you are using a hardware wallet, this passphrase will grant access to your funds on this device so be sure to take security seriously.
          </p>
          <div className='flex justify-center mt-6 mb-2'>
            <Image src={MMsetup} layout='intrinsic'></Image>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Be sure to watch the short video on your secret recovery phrase.
            This phrase is derived to obtain your private key, which controls all of the tokens associated with your Ethereum address.
            Write it down out of view of any cameras and store it safely!
            If you plan to store any valuable sum of tokens, you should absolutely obtain a hardware wallet.
            In fact, this is so important to understand, that I've reiterated it for you just below this paragraph.
          </p>
          <p className='justify-center text-xs indent-4 mb-2 mr-8 ml-8'>
            <a className='font-bold'>URGENT:{' '}</a> 
            Never share your seed phrase (12-24 words) or your private key in any way to anybody. Ever.
            Do not enter, copy-paste, or visibly/physically reveal your seed phrase anywhere, unless you are recovering a wallet.
            Do not respond to the "customer support" scammers that litter social media. 
            Your seed/private key controls your money, so store it in a safe place on paper (or metal!)
            Advanced crypto users should always use a hardware wallet like a 
            <a href='https://ledger.com' className='text-blue-500'>{' '}Ledger.</a>
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>
              2. Understanding Your Ethereum Address
            </h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Congratulations on generating your first Ethereum address!
            You can see it at the top of MetaMask, under "Account 1".
            Your address is a long string of hexadecimal digits starting with 0x, which indicates hexadecimal. 
            For example, my address is: 0x65b54A4646369D8ad83CB58A5a6b39F22fcd8cEe.
            This long address can be represented by a .eth domain, such as 👦🏻👦🏻.eth - this is called an ENS domain.
          </p>
          <p className='justify-center indent-8 mb-2'>
            The address displayed on your MetaMask is your public-facing account where you can store any tokens, fungible or not, on the network. 
            This includes cryptocurrencies like $ETH, which is the base layer token of the Ethereum blockchain and is responsible for securing the network.
            It can also store any fungible ERC20 tokens such as $UNI, $SHIB, or $LINK as well as any NFTs that you purchase from an NFT marketplace like 
            <a href='https://opensea.io' className='text-blue-500'>{' '}OpenSea.</a>
          </p>
          <div className='flex justify-center mt-8 mb-8'>
            <Image src={MMbalance} layout='intrinsic'></Image>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Back on the subject of $ETH, not only does $ETH secure the network but it also is necessary to maintain the ever-changing state of the global computer known as the Ethereum Virtual Machine, called the EVM for short.
            It's used to pay for all EVM computation, what we call transactions, in the form of gas. 
          </p>
          <p className='justify-center indent-8 mb-2'>
            We'll cover gas a bit more later, but basically you must pay $ETH for every transaction you make since it results in a change in the global Ethereum Virtual Machine state.
            Not only does every transaction change the state of the EVM, but more computationally intensive transactions require more gas to execute and are therefore more expensive.
          </p>
          <p className='justify-center indent-8 mb-2'>
            This kind of fee mechanic may be frustrating and confusing at times, but some form of it exists on all blockchains in order to prevent spammers from clogging the network.
            Think of it this way: if transactions were totally free to change computational state, a disgruntled person would write bots to send an infinite number of spam transactions and crowd out legitimate users submitting their transactions.
          </p>
          <p className='justify-center indent-8 mb-2'>
            Even though it is annoying and sometimes very expensive on Ethereum's mainnet to pay gas fees for every little transaction, the alternative is a broken blockchain completely clogged by spam.
            How many spam emails do you think are sent every day? 
            <a href='https://securelist.com/spam-and-phishing-in-2021/105713/' className='text-blue-500'>{' '}It's roughly 50% of all emails. Yikes.</a>
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>Wen HuskyCoins, ser?!</h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Not so fast!
            I just got through explaining how annoyingly expensive gas fees are on Ethereum's mainnet!
            You think I'm gonna make you transact on Ethereum mainnet?!
            No way! 
          </p>
          <p className='justify-center indent-8 mb-2'>
            Thankfully Ethereum's big-brained core protocol developers have come up with a wild idea to solve these high gas fees:
            why not have even more blockchains settle bundled transaction hashes onto Ethereum blocks?
            I get that you're probably drooling for HuskyCoins right now, but you won't know how to claim them until I teach you how to access these aforementioned nested blockchains that live on Ethereum.
            You'll get your $HUSKY soon enough, I promise.
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>
              Understanding Ethereum Layer 2s
            </h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Separate blockchains that execute computation off of the Ethereum mainnet (also referred to as layer 1) and then settle their hashed proofs to Ethereum's layer 1 are called layer 2 blockchains.
            These layer 2 chains, also known as rollups, generally make use of either optimistic execution which is checked by fraud proofs or zero-knowledge proofs which is an actively researched field in mathematics.
            The technical details between either L2 rollup type are not important for me to go over here but rest assured they are cutting-edge and extremely interesting.
            Definitely worth further reading if you're interested.
          </p>
          <p className='justify-center indent-8 mb-2'>
            Anyway, these rollup chains run alongside the layer 1 mainnet, handling their own ecosystem of users and smart contracts.
            They essentially lock up tokens like $ETH on mainnet and then only periodically settle hashes called merkle roots from the L2 to the L1, to prove that all funds are accounted for and all transactions are valid.
          </p>
          <p className='justify-center indent-8 mb-2'>
            It's important for you to understand this concept because the smart contract I've written and deployed for you, HuskyCoin, exists on the 
            <a href='https://polygonscan.com' className='text-blue-500'>{' '}Polygon layer 2 rollup chain.</a>
            {' '}Technically it's a side-chain, but again that's beside the point.
            The point is that the bytecode I wrote and compiled for the HuskyCoin token exists at the following smart contract address on Polygon L2:
            <a href='https://polygonscan.com' className='text-blue-500 text-4xl'>CHANGE THIS ADDRESS ONCE DEPLOYED</a>
          </p>
          <p className='justify-center indent-8 mb-2'>
            Keep in mind that this smart contract address only exists on the Polygon L2; if you try to find it on mainnet or any of Ethereum's other rollup networks, you won't find it.
            While developing HuskyCoin, I also deployed to Ethereum's Rinkeby testnet at this address:
            <a 
              href='https://rinkeby.etherscan.io/address/0x8cfb42a80291737cb62cef7b665fe1304d112fee' 
              className='text-blue-500'>
                {' '}0x8cfb42a80291737cb62cef7b665fe1304d112fee
            </a>
            {' '}Feel free to interact with it however you like there.
          </p>


          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>
              On Alternative L1 Blockchains
            </h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            MetaMask, in combination with these skills & concepts, is transferable between any EVM-compatible blockchain. 
            The term 'EVM-compatible' refers to blockchains that are modeled after Ethereum's implementation.
            Among others, these include: 
          </p>
          <div className='flex justify-center mt-4 mb-4'>
            <ol className='list-disc'>
              <li>BSC/BNB</li> 
              <li>Polkadot</li> 
              <li>Avalanche</li>
              <li>Fantom</li> 
              <li>Ethereum classic</li>
            </ol>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Although those blockchains can be interacted with by using the software and skills taught in this tutorial, they have each made certain tradeoffs in at least one of the three points in the Scalability Trilemma.
            The Scalability Trilemma refers to the balance between the three most important aspects of a blockchain: decentralization, speed, and fees.
          </p>
          <p className='justify-center indent-8 mb-2'>
            This tutorial focuses on Ethereum and its layer 2 rollups (Arbitrum, Optimism, zkSync, Starkware) because they are home to by far the largest and safest Web3 ecosystem.
            Other L1 blockchains that advertise extremely low fees or fast speeds have invariably made a tradeoff in one of the other trilemma categories.
            You may encounter cheap fees and fast block times, but as a result of lowered decentralization your risk of being "rugpulled" or scammed are significantly higher.
            Mess around with the other aforementioned crypto networks at your own risk.
          </p>


  
  #### Understanding Ethereum Layer 2s
  We've covered that Ethereum is a blockchain that permanently stores code and functions as a global computer housing all sorts of programs mostly comprising of various tokens. But transacting on Ethereum's mainnet is very expensive as it prioritizes decentralization, security, and immutability above all else; foregoing speed and cheap transaction/gas fees in favor of the former attributes.  This is important as it provides net neutrality (yes, that thing that the Trump administration absolutely destroyed by handing over throttling priveleges and other dystopian controls over the internet to corporations like Verizon/ATT/TMobile/Google. Screw you, Ajit Pai!) But it comes at high cost, making transacting on the Ethereum network very expensive.

  So smart developers had an idea: why not put more blockchains on the Ethereum blockchain?



  Now you're finally ready for the next step, obtaining a (small) amount of crypto to pay for the gas needed to make transactions on the Ethereum network.

  On gas:
  I thought you told me HuskyCoin was free! Why is there a transaction/gas fee?!
  -Gas costs serve two main purposes: 
  1. Preventing spam on the network by incurring costs that disincentivize clogging the network with low-quality transactions.
  2. Paying the miners/validators who maintain the state of the network by solving and finalizing blocks in chronological sequences. These are the maintainers of a distributed blockchain architecture who facilitate every transfer and transaction on the network, and they don't work for free!
        </div>
      </div>
    )
}