import styles from '../styles/Home.module.css'
import Image from 'next/image'
import huskycolor from '../assets/huskycolor.gif'
import warren from '../assets/warren.png'
import MMwallet from '../assets/MMwallet.png'
import MMsetup from '../assets/MMsetup.png'
import MMbalance from '../assets/MMbalance.png'
import rollups from '../assets/rollups.png'
import networks from '../assets/network.png'
import chainlist from '../assets/chainlist.png'
import polygon from '../assets/polygon.png'
import faucet from '../assets/faucet.png'
import txConfirmed from '../assets/tx-confirmed.png'
import pending from '../assets/pending.png'
import tokenImport from '../assets/import.png'
import importFields from '../assets/importFields.png'
import huskyBalance from '../assets/huskyBalance.png'
import prestake from '../assets/prestake.png'

export default function Tutorial() {
    return(
      <div className={styles.container}>
        <div className={styles.title}>
          <h1 className='flex justify-center mt-20 mb-12'>For n00Bs</h1>
        </div>
        <div className='flex justify-center mb-6'>
          <div className='max-w-2xl'>
            <Image src={huskycolor} layout='intrinsic'></Image>
          </div>
        </div>
        <div className='p-2 sm:p-6 sm:mr-8 sm:ml-8'>
          <p className='justify-center indent-8 mb-2'>
            Welcome to your first Web3 tutorial! 
            If you have never generated a cryptocurrency address or submitted a transaction on-chain, start here. 
            If you're just looking for my writeup with general information on Web3 and Crypto, head to the 
            <a href='/about' className='text-blue-500'>{' '}Web3</a> section.
          </p>
          <p className='justify-center indent-8'>
            This tutorial assumes you're unfamiliar with the cryptography, math, and computer science concepts happening behind the scenes in crypto, so don't be discouraged if at any point you get confused. 
            Don't hesitate to contact me with any questions or issues while you work through this tutorial- it shouldn't take more than an hour or so.
            If you want recommendations for further Web3/DeFi exploration, shoot me a DM on GitHub/Twitter/Instagram (linked at the bottom of the page) and I will happily assist.
          </p>
          <div className={styles.description}> 
            <h1 className='flex justify-center text-4xl'>
              What is a crypto address, you ask? 
            </h1>
          </div>
          <p className='indent-8'>
            While you're at it, wtf is a blockchain anyway? Private key? Public address? 
            What about NFTs!? 
            What are self-repaying crypto loans? How does Cryptography work? 
            Can I mine cryptocurrency with my computer to make money? 
            How do I stake crypto for passive income? 
            Are ENS (.eth) domains comparable to the more familiar DNS (.com or .org) domains? 
            Facebook = Meta... verse...? Right? 
            By the way, I also heard on Reddit that 
              <a href='https://dogecoin.com/' className='font-bold text-blue-500'>{' '}_insertRandomDogCoinTokenHere_</a> 
            {' '}is the next Bitcoin?! 
          </p>
          <div className='flex justify-center'>
            <div className='max-w-xl mt-8 mb-8'>
              <Image src={warren}></Image>
            </div>
          </div>
          <p className='indent-8'>
            Isn't the wild west of DeFi only for people that Elizabeth Warren calls "shadowy super coders"?
            And most importantly: 
          </p>
          <p className='flex justify-center text-lg font-bold mt-4'>
            iS KrIpT0 PoNZi ScHeME, sEr???
          </p>
          <p className='flex justify-center text-xs mb-2'>(no, lmeow...)</p>
          <p className='justify-center indent-8 mb-2'>
            In this tutorial, I (robriks/👦🏻👦🏻.eth/@marsterlund) will show you that crypto is not shadowy at all!
            Not to mention that we crypto/computer nerds are not "shadowy super coders"!
          </p>
          <p className='justify-center indent-8 mb-2'>
            All these questions need to be answered and explained to the public in a concise, educational format. 
            This is my attempt to educate people on the equitable, self-custodial world of digital assets known as Web3. 
            I'll try to keep it as non-technical and digestible as possible for you.
          </p>
          <p className='justify-center indent-8'>
            Again, if you're just looking to read about these concepts head over to the 
            <a href='/about' className='text-blue-500'>{' '}Web3{' '}</a>
            section.
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>What you will learn: </h1>
          </div>
          <ol className='list-disc justify-center ml-12'>
            <li>Set up a crypto wallet via MetaMask</li>
            <li>Make your first on-chain transaction by claiming 69420 free tokens (HuskyCoins / $HUSKY) that I have coded and deployed on Polygon</li>
            <li>
              How to earn passive income by contributing to network security and decentralization via staking. 
              (I've implemented staking functionality for $HUSKY so you can watch your balance grow in real time!) 
            </li>
            <li>There is no next Bitcorn. Sry. :(</li>
          </ol>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>What you will not find here: </h1>
          </div>
          <ol className='list-disc justify-center ml-12'> 
            <li className=''>Financial advice, lel.</li>
            <p className='text-xs mt-1 -ml-1'>($HUSKY is for educational purposes only)</p>
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
            MetaMask is the most ubiquitous crypto wallet around, although other great wallets like Coinbase Wallet/Brave Wallet/Rainbow Wallet are available too.
            Each of these wallets connect to the blockchain for you and safely handle your private keys, but here I'll focus on MetaMask since it has the richest documentation.
          </p>
          <p className='justify-center indent-8 text-xs mb-4 mr-8 ml-8'>
            Note: I have been asked many times if a Coinbase, Robinhood, Venmo, CashApp, or Paypal account will adequately serve as a crypto wallet. 
            As of writing, these companies/services do NOT offer a native web3 wallet. 
            (Coinbase Wallet is a separate app/browser extension than the Coinbase app you use to buy crypto). 
            These services simply allow you to buy and sell the assets for price speculation. Boring!
          </p>
          <p className='justify-center indent-8 mb-2'>
            With that out of the way, let's get started. 
            On the HuskyCoin home page, click the box titled: <a className='font-semibold'>"1. Setting up MetaMask"</a> and follow the external MetaMask instructions on downloading and installing the MetaMask browser extension.
            Keep in mind that Safari is not supported;{' '} 
              <a href='https://brave.com' className='text-blue-500'>Brave</a> 
            {' '}is the most Web3-friendly (and my favorite!) browser.
          </p>
          <p className='justify-center indent-8 mb-2'>
            Once you've successfully installed MetaMask for your browser, open the extension at the top right of the browser and click 
              <a className='font-semibold'> "Create a Wallet"</a> under the 
              <a className='font-semibold'> "New to MetaMask"</a> page. 
            Select whichever data sharing option you wish and set a secure passphrase.
            Unless you are using a hardware wallet, this passphrase will grant access to your funds on this device so be sure to take security seriously.
          </p>
          <div className='flex justify-center mt-6 mb-2'>
            <Image src={MMsetup} layout='intrinsic'></Image>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Take a couple minutes to watch the short video about your secret recovery phrase.
            This phrase is derived to obtain your private key, which controls all of the tokens associated with your Ethereum address.
            Write it down out of view of any cameras and store it safely!
            If you plan to store any valuable sum of tokens, you should absolutely obtain a hardware wallet.
          </p>
          <p className='justify-center text-xs indent-4 mb-2 mr-8 ml-8'>
            <a className='font-bold'>URGENT:{' '}</a> 
            Never share your seed phrase (12-24 words) or your private key in any way to anybody. Ever.
            Do not enter, copy-paste, or visibly/physically reveal your seed phrase anywhere, unless you are recovering a wallet.
            Do not respond to the "customer support" scammers that litter social media. 
            Your seed/private key controls your money, so store physically it in a safe place on paper (or metal!)
            Advanced crypto users should always use a hardware wallet like a 
            <a href='https://ledger.com' className='text-blue-500'>{' '}Ledger.</a>
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>
              1.a Understanding Your Ethereum Address
            </h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Congratulations on generating your first Ethereum address!
            You can see it at the top of MetaMask, under <a className='font-semibold'>"Account 1"</a>. 
            Your address is a long string of hexadecimal digits starting with 0x, which indicates hexadecimal. 
            For example, my address is: 
          </p>
          <div className='flex justify-center'>
          <a 
            href='https://etherscan.io/address/0x65b54a4646369d8ad83cb58a5a6b39f22fcd8cee' 
            className='text-sm text-center justify-center text-blue-500 mb-2'>{' '}
              0x65b54A4646369D8ad83CB58A5a6b39F22fcd8cEe
          </a>
          </div>
          <p className='indent-8 mb-2'>
            {' '}This long address can be represented by a .eth domain, such as 👦🏻👦🏻.eth - this is called an ENS domain.
            Just like how DNS domains such as google.com and meatspin.com represent IP addresses, ENS domains help make Web3 addresses more human-readable.
          </p>
          <p className='justify-center indent-8 mb-2'>
            The address displayed on your MetaMask is your public-facing account where you can store any tokens on the network, fungible or not. 
            This includes cryptocurrencies like $ETH, which is the base layer token of the Ethereum blockchain and is responsible for securing the network.
            It can also store any fungible ERC20 tokens such as $UNI, $SHIB, or $LINK as well as any NFTs that you purchase from an NFT marketplace like 
            <a href='https://opensea.io' className='text-blue-500'>{' '}OpenSea.</a>
          </p>
          <div className='flex justify-center'>
            <div className='max-w-2xl mt-8 mb-8'>
              <Image src={MMbalance} layout='intrinsic'></Image>
            </div>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Back on the subject of $ETH, not only does $ETH secure the network but it also is necessary to maintain the ever-changing state of the global computer known as the Ethereum Virtual Machine, called the EVM for short.
            It's used to pay for all EVM computation, what we call transactions, in the form of gas. 
          </p>
          <p className='justify-center indent-8 mb-2'>
            We'll cover gas a bit more later, but basically you must pay $ETH for every transaction you make since it changes account balances in the global EVM state.
            Not only does every transaction change the state of the EVM, but more computationally intensive transactions require more gas to execute and are therefore more expensive.
          </p>
          <p className='justify-center indent-8 mb-2'>
            This fee mechanic may be frustrating and confusing at first, but some form of it must exist on any blockchain in order to deter spammers.
            Think of it this way: if transactions were totally free to change computational state, a disgruntled person would write bots to send an infinite number of spam transactions and crowd out legitimate users submitting their transactions.
          </p>
          <p className='justify-center indent-8 mb-2'>
            As a result, it can be very expensive to pay gas fees on Ethereum's mainnet during times of high network traffic.
            Even still, it's better than the alternative: a broken blockchain completely clogged by spam.
            Think of how many spam emails you get every day!
            What percentage of all email traffic do you think is spam? 
            <a href='https://securelist.com/spam-and-phishing-in-2021/105713/' className='text-blue-500'>{' '}It's roughly 50% of all emails. Yikes.</a>
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>Wen HuskyCoins, ser?!</h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Not so fast!
            I just got through explaining how annoyingly expensive gas fees are on Ethereum's mainnet!
            You think I'm gonna make you transact on mainnet?!
            No way! 
          </p>
          <p className='justify-center indent-8 mb-2'>
            Thankfully Ethereum's big-brained core protocol developers have come up with a wild idea to solve these high gas fees:
            why not have even more blockchains settle bundled transaction hashes onto Ethereum blocks?
            I get that you're probably drooling for HuskyCoins right now, but you won't know how to claim them until I teach you how to access these nested blockchains that live on Ethereum.
            You'll get your $HUSKY soon enough, I promise.
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>
              1.b Understanding Ethereum Layer 2s
            </h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Separate blockchains that execute computation off of the Ethereum mainnet and then settle their hashed proofs to mainnet are called layer 2 (aka L2) blockchains.
            These layer 2 chains, called rollups, generally make use of either optimistic execution which is checked by fraud proofs or zero-knowledge proofs which is an actively researched field in mathematics.
            The technical details between either L2 rollup type are not important for me to go over here, but definitely worth further reading if you're interested.
          </p>
          <div className='flex justify-center'>
            <div className='max-w-4xl'>
              <Image src={rollups} layout='intrinsic'></Image>
            </div>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Anyway, these rollup chains run alongside the layer 1 mainnet, handling their own ecosystem of users and smart contracts.
            They essentially lock up tokens like $ETH on mainnet and then only periodically settle hashes called merkle roots from the L2 to the L1, to prove that all funds are accounted for and all transactions are valid.
          </p>
          <p className='justify-center indent-8 mb-2'>
            It's important for you to understand this concept because the smart contract I've written and deployed for you, HuskyCoin, exists on the 
            <a href='https://polygonscan.com' className='text-blue-500'>{' '}Polygon layer 2 rollup chain.</a>
            {' '}Technically it's a side-chain, but again that's beside the point.
            The point is that the bytecode I wrote and compiled for the HuskyCoin token exists at the following smart contract address on Polygon L2:
            </p>
            <a 
              href='https://polygonscan.com/address/0x8CFb42a80291737Cb62cEF7B665Fe1304D112Fee' 
              className='flex justify-center text-blue-500 text-sm'>
                0x8CFb42a80291737Cb62cEF7B665Fe1304D112Fee
            </a>
          <p className='justify-center indent-8 mb-2 mt-2'>
            Keep in mind that this smart contract address only exists on the Polygon L2; if you try to find it on mainnet or any of Ethereum's other rollup networks, you won't find it.
            It also exists on Ethereum's Rinkeby testnet at the same address (the following link will take you to Etherscan's Rinkeby block explorer):
          </p>
          <div className='flex justify-center'>
          <a 
            href='https://rinkeby.etherscan.io/address/0x8cfb42a80291737cb62cef7b665fe1304d112fee' 
            className='text-blue-500 text-sm'>
              {' '}0x8cfb42a80291737cb62cef7b665fe1304d112fee
          </a>
          </div>
          <p className='indent-8 mt-2'>
            Feel free to interact with it however you like there.
            There's actually a bug (that I have since fixed!) so any of you hackers are welcome to break that testnet deployment of HuskyCoin. 😏 😏 😏
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>2. Connect to the Polygon L2 network</h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Now that you understand rollups, you're finally ready for the next step: configuring MetaMask to connect to the Polygon Layer 2 network.
            To do so, open your MetaMask extension and click the dropdown button labeled with a colored dot and the text "Ethereum Mainnet V".
            Lmeow I used a V since I couldn't figure out how to copy that dropdown arrow next to the word 'Mainnet,' but here's a picture if the V confused you:
          </p>
          <div className='flex justify-center mt-4 mb-5'>
            <Image src={networks} layout='intrinsic'></Image>
          </div>
          <p className='justify-center indent-8 mb-2'>
            It will be located in the top right of your UI.
            This dropdown menu is where you switch between layer 2 networks on the blockchain- you'll note that only the Ethereum Mainnet is available to you at the moment.
          </p>
          <p className='justify-center indent-8'>
            To add the Polygon L2 mainnet to your MetaMask configuration simply navigate to 
            <a className='text-blue-500'>{' '}https://chainlist.org.{' '}</a>
            This is where you'll find any EVM-compatible network RPC endpoints, including any Ethereum L2 rollups.
            I love using Chainlist because you don't risk mistyping any of the network configuration since it's as easy as clicking a button.
          </p>
          <div className='flex justify-center mt-6 mb-6'>
            <Image src={chainlist} layout='intrinsic'></Image>
          </div>
          <p className='justify-center indent-8'>
            Scroll down the grid to the block labeled "Polygon Mainnet" and click the button labeled "Connect Wallet."
            Note that you also may need to connect your wallet to the site in the top right first.
            Once you've done so, that button should change to one labeled "Add to Metamask", click it and hit "Approve" and then "Switch network" in the Metamask popup that follows.
          </p>
          <p className='justify-center indent-8 mb-2'>
            If you were successful with those steps, you can skip to the next section titled "Using $MATIC for gas". 
            The next bit is just backup information in case Chainlist is down.
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>
              In case Chainlist is down
            </h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            If for some reason Chainlist has gone offline, I've included Polygon's RPC endpoint information for you below so that you may enter it manually should you need to.
            Should you need enter this information manually in case of Chainlist being down, open the networks dropdown menu labeled "Ethereum Mainnet V" and click the "Add Network" button. 
            Fill out the required fields with the following Polygon Mainnet information:
          </p>
          <ol className='list-disc justify-center mt-4 mb-4'>
            <li className='text-center text-sm'>Network Name: Polygon</li>
            <li className='text-center text-sm'>New RPC URL: https://polygon-rpc.com/</li>
            <li className='text-center text-sm'>Chain Id: 137</li>
            <li className='text-center text-sm'>Currency Symbol: MATIC</li>
            <li className='text-center text-sm'>Block Explorer URL: https://polygonscan.com</li>
          </ol>
          <div className='flex justify-center mt-6 mb-6'>
            <Image src={polygon} layout='intrinsic'></Image>
          </div>
          <p className='justify-center indent-8 mb-2'>
            You'll know you're connected to the Polygon L2 network once the network dropdown box at the top displays "Polygon Mainnet V" instead of "Ethereum Mainnet V" as it did before.
            (Again, those "V"s are my substitution for that dropdown arrow.)
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>
              2.a Using $MATIC for gas
            </h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Almost there! The last step before you can claim your 69420 HuskyCoins is to obtain a small amount of $MATIC to pay the gas needed to execute any transaction on the Polygon network.
            I know I went on and on about how $ETH is the base-layer token that pays gas on Ethereum, but the Polygon L2 is slightly different because it uses its own custom token to pay gas.
            All the concepts I discussed still apply, the only difference being that $MATIC is the base-layer token on this rollup instead of $ETH.
          </p>
          <p className='justify-center indent-8 mb-4'>
            You'll recall that gas is a mechanic which serves two main purposes:
          </p>
          <ol className='justify-center mb-4'>
            <li className='flex text-center'>
              1. Preventing spam on the network by incurring costs that disincentivize clogging the network.
              </li>
            <li className='flex text-center'>
              2. Paying the miners/validators who maintain the state of the network. 
              These are the backbone of the EVM, so they don't work for free!
            </li>
          </ol>
          <p className='justify-center indent-8 mb-2'>
            Thankfully gas fees on the Polygon L2 are extraordinarily cheap!
            Each transaction costs a fraction of a cent: roughly 0.004 $MATIC each, which in USD terms is roughly $0.006.
            Much cheaper than the gas fees you'll see on Ethereum Layer 1!
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>
              2.b Hit up a $MATIC faucet
            </h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Moving on, in order to make your claim your $HUSKY allocation, we first must hit up a faucet to collect a bit of $MATIC.
            Go to:
            <a href='https://polygon-faucet.m00n.city/' className='text-blue-500'>{' '}https://polygon-faucet.m00n.city/{' '}</a>
            and click "Connect Wallet".
          </p>
          <p className='justify-center indent-8 mb-4'>
            Once you've done so, click the same button now labeled "Get Some MATIC" to be sent a dust amount of $MATIC to pay for your first polygon transaction.
          </p>
          <div className='flex justify-center mt-8 mb-8'>
            <Image src={faucet} layout='intrinsic'></Image>
          </div>
          <p className='justify-center indent-8 mb-2'>
            This faucet only sends you 0.005 $MATIC, which is roughly worth $0.008.
            It's possible that this low amount of funds will not even be enough gas to complete the tutorial, so I've included another faucet link:
            <a href='https://matic.zayd.info/' className='text-blue-500'>{' '}https://matic.zayd.info/</a>.
          </p>
          <p className='justify-center indent-8 mb-2'>
            Come back to this faucet later on in the tutorial if you run into congested network conditions that require more gas to execute your transactions.
          </p>
          <p className='justify-center indent-8 mb-2 text-xs mr-8 ml-8'>
            Note: if neither faucet linked has any funds to dispense, or you complete part of the tutorial and don't have enough $MATIC for gas, message me using one of the social media links at the bottom of the page and I'll top up the faucet for you.
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>
              3. The moment you've been waiting for! Claim your $HUSKY tokens!
            </h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            It's finally time to do what you came here for!
            By this point, we've discussed all the prerequisite knowledge you need to understand wtf is going on when you use a crypto network.
          </p>
          <p className='justify-center indent-8 mb-2'>
            Head back to the HuskyCoin dApp home page and click on the box marked "3. Claim HuskyCoins from my faucet".
            On the faucet page, click "Receive HuskyCoins" and a MetaMask transaction prompt should appear.
          </p>
          <p className='justify-center indent-8 mb-2'>
            Feel free to observe the uber cheap $MATIC gas fee and click "Confirm".
            Once the transaction is confirmed by miners, you'll receive a browser notification from MetaMask that looks something like the one below.
            This means you've received 69420 $HUSKY tokens to your address!
          </p>
          <div className='flex justify-center mt-8 mb-8'>
            <Image src={txConfirmed} layout='intrinsic'></Image>
          </div>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl mb-2'>
              Quick Troubleshooting
            </h1>
            <h2 className='flex justify-center text-xl'>
              (Skip this if your transaction confirmed)
            </h2>
          </div>
          <p className='justify-center indent-8 mb-2'>
            If you didn't get a notification like the one above, give it a few minutes as network conditions constantly vary. 
            Check the "Activity" tab on the right of your MetaMask UI for something like this:
          </p>
          <div className='flex justify-center mt-8 mb-8'>
            <Image src={pending} layout='intrinsic'></Image>
          </div>
          <p className='justify-center indent-8 mb-2'>
            This just means network conditions require a higher gas amount. 
            Click on the "Speed Up" button, which will increase the gas amount and resend the transaction.
            If you're having still issues, just DM me using one of the social media links at the bottom of the page and I'll help you out.
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>
              3.a Where are my HuskyCoins!?
            </h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Assuming you successfully claimed your HuskyCoins, you'll notice that your $MATIC token balance went down.
            That's because you spent a tiny amount on gas to the network.
            But wait, where do I find those 69420 HuskyCoins?
          </p>
          <p className='justify-center indent-8 mb-2'>
            Sometimes MetaMask doesn't automatically pick up on when you've received or claimed tokens in your wallet.
            In this case, you'll simply need to import them.
          </p>
          <div className='flex justify-center mt-8 mb-8'>
            <Image src={tokenImport} layout='intrinsic'></Image>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Look at the bottom of the MetaMask UI for the 
            <a className='font-semibold'>{' '}"Don't see your token? Import tokens" {' '}</a>
            link (pictured above) and click on it. 
            On doing so, you'll be taken to a screen that looks like this:
          </p>
          <div className='flex justify-center mt-8 mb-8'>
            <Image src={importFields} layout='intrinsic'></Image>
          </div>
          <p className='justify-center indent-8 mb-2'>
            The only field you need to fill out on this page is the "Token Contract Address" field; the rest of the fields will be populated for you by MetaMask.
            This is the HuskyCoin token contract address:
          </p>
          <a 
            href='https://polygonscan.com/address/0x8CFb42a80291737Cb62cEF7B665Fe1304D112Fee' 
            className='flex justify-center mb-2 text-blue-500 text-sm'>
              0x8CFb42a80291737Cb62cEF7B665Fe1304D112Fee
          </a>
          <p className='justify-center indent-8 mt-2 mb-2'>
            Paste that address into the token contract address field.
            Click "Add Custom Token" on the bottom to confirm.
          </p>
          <p className='justify-center indent-8 mb-2'>
            Congratulations! You can now see your 69420 $HUSKY balance in MetaMask under the "Assets" tab.
            This "Import Custom Token" process is great to know because you'll need to import many of the tokens you interact with on-chain.
          </p>
          <div className='flex justify-center mt-8 mb-8'>
            <Image src={huskyBalance} layout='intrinsic'></Image>
          </div>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl mb-2'>
              4. Now I want MOAR HuskyCoins
            </h1>
            <h2 className='flex justify-center text-lg'>
              Time to stake them & watch number go up
            </h2>
          </div>
          <p className='justify-center indent-8 mb-2'>
            The last skill for you to learn in this tutorial is how to stake a token to earn passive income.
            Nothing beats watching your staked token balance slowly tick upward, so I made HuskyCoin support staking!
          </p>
          <p className='justify-center indent-8 mb-2'>
            Head back to the HuskyCoin dApp home page and click the box titled 
            <a className='font-semibold'>"4. Stake to earn more HuskyCoins".{' '}</a>
            This will take you to the Staking page of the dApp, where both your 
            <a className='font-semibold'> "Available $HUSKY balance" </a> 
            and your 
            <a className='font-semibold'> "Currently staked $HUSKY balance" </a>
            are displayed to you. 
            MetaMask may prompt you to connect your wallet again, in which case click the connect button.
          </p>
          <p className='justify-center indent-8 mb-2'>
            Enter an amount (>100) that you wish to stake in the "Amount to stake" form and click the pretty green "Stake" button!
            MetaMask will then open a prompt for you displaying the amount of $MATIC required to pay gas; hit confirm and wait for your transaction to be mined.
          </p>
          <div className='flex justify-center mt-8 mb-8'>
            <Image src={prestake} layout='intrinsic'></Image>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Once your transaction is mined and written to the EVM, your "Available $HUSKY balance" will decrease by the amount you specified and your "Currently staked $HUSKY balance" will increase by that same amount.
            Feel free to refresh the page if necessary. 
            Now you can watch your staked $HUSKY balance tick upward roughly every 10 seconds, or when every block is mined!
          </p>
          <p className='flex justify-center indent-8 text-sm mb-2 ml-8 mr-8'>
            Note: If it's been a couple minutes and you haven't get a browser notification from MetaMask saying "Transaction Confirmed," scroll back up to the "Quick Troubleshooting" section and follow the outlined steps.
            If you can't figure it out, don't hesitate to reach out to me using one of the social media links at the bottom of the page.
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>
              Congratulations! You've completed the tutorial!
            </h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            I know it was a lot of reading and a lot of information but understanding and properly navigating Web3 is an invaluable skill.
            This space is arguably today's fastest growing industry, and due to its open-source values with regards to code, it innovates on itself daily.
            I spent a lot of time making sure that you are aware of the cybersecurity practices that are vital to safely exploring the new digital world we call the "Metaverse".
            Rest assured that it only gets crazier from here, but you completing the tutorial proves you are now equipped to face anything.
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl mb-4'>
              What's next?
            </h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            If, like yours truly, you're mostly interested in DeFi, head over to 
            <a href='https://zapper.fi/' className='text-blue-500'> Zapper.fi </a>
            to start learning about the insane innovations of tokenomics and the digital economy.
            Aave, Curve, and Yearn will be your home bases for obtaining loans and earning yields unparalleled in the legacy finance world.
          </p>
          <p className='justify-center indent-8 mb-2'>
            If you're mostly interested in learning about buying and selling NFTs,
            <a href='https://opensea.io' className='text-blue-500'> OpenSea </a>
            and <a href='https://zora.co/' className='text-blue-500'> Zora </a>
            will be where you want to look.
            Remember that NFTs can be much more than just boring old JPEGs!
            For example, Mila Kunis and Ashton Cutcher's NFT project 'Stoner Cats' serves as a cryptographic club membership, where only owners of Stoner Cats NFTs can watch an animated show about weed-loving cats.
            They both voice characters on the NFT show! And so does Vitalik.
            You can also look into playing games built using NFTs, like <a href='https://axieinfinity.com' className='text-blue-500'> Axies. </a>
          </p>
          <p className='justify-center indent-8 mb-2'>
            If you're not sure what you'd like to do next in Web3,
            check out <a href='https://rabbithole.gg/' className='text-blue-500'> RabbitHole, </a>
            where you can get token rewards for completing various Web3 quests.
            Most of these quests are very simple and simply involve making transactions and using protocols.
            Your on-chain history, viewable on <a href='https://etherscan.io' className='text-blue-500'> Etherscan, </a>
            proves your completion of these tasks.
            And it gives you an awesome historical record of your Web3 abilities and accomplishments!
          </p>
          <p className='justify-center indent-8 mb-2'>
            Lastly, if you'd like to learn to code on blockchains and go the developer route like I did, <a href='https://cryptozombies.io' className='text-blue-500'> CryptoZombies </a>
            is your place to start.
            Here you'll learn Ethereum's programming language, Solidity, in combination with Javascript to build your own on-chain blockchain game using NFTs!
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>
              Safety Disclaimer: Alternative L1 Blockchains
            </h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Unfortunately, the widespread scams and rugpulls in the DeFi and NFT spaces mean that I have to finish out with a lengthy disclaimer on crypto blockchains other than Bitcoin and Ethereum.
            Basically it boils down to one thing: you're infinitely less likely to get scammed/rugged if you stick to the Ethereum ecosystem.
            BSC and Solana in particular are full of scams that draw you in with cheap fees and fast blocktimes. 
          </p>
          <p className='justify-center indent-8 mb-2'>
            That's not to say that it doesn't happen in the Ethereum ecosystem, but it's much less common.
            Not all cryptos are made equal.
            At the end of the day, the more you learn about how these protocols work on a technical level, the safer (and maybe richer ¯\_ (ツ)_/¯ ) you'll be.
          </p>
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
            This tutorial focuses on Ethereum and its layer 2 rollups (Arbitrum, Optimism, zkSync, Starkware, Polygon) because they are home to by far the largest and safest Web3 ecosystem.
            Other L1 blockchains that advertise extremely low fees or fast speeds have invariably made a tradeoff in one of the other trilemma categories.
          </p>
          <p className='justify-center indent-8 mb-2'>
            You may encounter cheap fees and fast block times, but as a result of lowered decentralization your risk of being "rugpulled" or scammed are significantly higher.
            Mess around with the aforementioned alternative crypto networks at your own risk.
          </p>  

          <div className={styles.description}>
          <h1 className='text-4xl mb-4'>Thanks for reading!</h1>
          <h1 className='text-xl'>📯~~👦🏻👦🏻.eth~~📯</h1>
          </div>
        </div>
      </div>
    )
}