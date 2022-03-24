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
            section.
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
          <div className='flex justify-center'>
            <Image src={rollups} layout='intrinsic'></Image>
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
              href='https://polygonscan.com' 
              className='text-blue-500 text-4xl'>
                CHANGE THIS HREF ADDRESS ONCE DEPLOYED
            </a>
          <p className='justify-center indent-8 mb-2 mt-2'>
            Keep in mind that this smart contract address only exists on the Polygon L2; if you try to find it on mainnet or any of Ethereum's other rollup networks, you won't find it.
            While developing HuskyCoin, I also deployed to Ethereum's Rinkeby testnet at this address:
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
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>Connect to the Polygon L2 network</h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            After all that, you're finally ready for the next step, configuring MetaMask to connect to the Polygon Layer 2 network.
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
              Using $MATIC for gas
            </h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Almost there! The last step before you can claim your 69420 HuskyCoins is to obtain a small amount of $MATIC to pay the gas needed to execute any transaction on the Polygon network.
            I know I went on and on about how $ETH is the base-layer token that pays gas on Ethereum, but the Polygon L2 is slightly different because it uses its own custom token to pay gas.
            All the concepts I discussed still apply to Polygon, the only difference being that $MATIC is the base-layer token on this rollup instead of $ETH.
          </p>
          <p className='justify-center indent-8 mb-4'>
            You'll recall that gas is a mechanic which serves two main purposes.
          </p>
          <ol className='justify-center mb-4'>
            <li className='flex text-center'>
              1. Preventing spam on the network by incurring costs that disincentivize clogging the network with low-quality transactions (ie spam).
              </li>
            <li className='flex text-center'>
              2. Paying the miners/validators who maintain the state of the network by solving and finalizing blocks in chronological sequences. 
              These are the on-chain maintainers who facilitate every code execution on the network, and they don't work for free!
            </li>
          </ol>
          <p className='justify-center indent-8 mb-2'>
            Thankfully gas fees on the Polygon L2 are extraordinarily cheap!
            Each transaction costs a fraction of a cent: roughly 0.0004 $MATIC each, which in USD terms is roughly $0.0006.
            That's about 1/16th of a cent! Much cheaper than the gas fees you'll see on Ethereum Mainnet, upward of $50 each!
            What can I say, demand for Web3 activity is extremely high!
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>
              Hit up a $MATIC faucet
            </h1>
          </div>
          <p className='justify-center indent-8 mb-4'>
            Moving on, in order to make your first transaction claiming your $HUSKY allocation, we first must hit up a faucet to collect a bit of $MATIC.
            Go to:
            <a href='https://matic.zayd.info/' className='text-blue-500'>{' '}https://matic.zayd.info/{' '}</a>
            and click "Connect Wallet".
            Once you've done so, click the same button now labeled "Get Some MATIC" to be sent a dust amount of $MATIC to pay for your first polygon transaction.
          </p>
          <div className='flex justify-center mt-8 mb-8'>
            <Image src={faucet} layout='intrinsic'></Image>
          </div>
          <p className='text-center text-xs indent-8 ml-10 mr-10 mb-4'>
            I actually went through 7 different Polygon $MATIC faucets trying to find one that works!
            I came really close to forking an open-source one and customizing it for this tutorial!
            Thankfully I came across this one, the only functional one I could find, but it was completely drained.
            So of course, I refilled it with my own $MATIC funds. 
            This means the faucet is now dispensing my money! Enjoy using it for your gas. Lol.
          </p>
          <p className='justify-center indent-8 mb-2'>
            If you have any trouble using the faucet linked above, message me using one of the social media links at the bottom of the page and I'll either top up the faucet again or personally send you some $MATIC to use to claim your HuskyCoin allocation.
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>
              The moment you've been waiting for! Claim your $HUSKY tokens!
            </h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            It's finally time to do what you came here for!
            By this point, we've discussed all the prerequisite knowledge you need to understand wtf is going on when you use a crypto network.
            So let's buckle down and use the Polygon network on top of Ethereum.
          </p>
          <p className='justify-center indent-8 mb-2'>
            Preferably in a new window/tab, head back to the HuskyCoin dApp home page and click on the box marked "3. Claim HuskyCoins from my faucet".
            This will take you to the $HUSKY faucet that I built for you to claim 69420 HuskyCoin tokens.
            MetaMask may open a popup for you prompting you to connect your wallet to the HuskyCoin dApp page- in this case, click connect.
            Then click on the pretty green button labeled "Receive HuskyCoins" and a MetaMask transaction prompt should appear.
            Feel free to observe the uber cheap $MATIC gas fee and click "Confirm".
            Once the transaction is confirmed by miners around the globe, you'll receive a browser notification from MetaMask that looks something like the one below.
            This means the global computer known as the Ethereum Virtual Machine has updated its state to include your transaction that allocated 69420 $HUSKY tokens to your address!
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
            If you didn't get a notification like the one above, either the transaction has not yet been confirmed by miners (give it a few minutes) or your browser just sucks, sorry.
            Lmeow just kidding. 
            First check your $MATIC balance- if it hasn't changed from the amount the faucet sent you (0.001 MATIC), keep reading. 
            If the balance is lower than before, gas was spent and your transaction was successful but your browser really does suck. 
            ¯\_ (ツ)_/¯
          </p>
          <p className='justify-center indent-8 mb-2'>
            If MetaMask for some reason didn't set a high enough gas value, it might be temporarily stuck because no miner wants to confirm a transaction that pays them too little.
            If you think that's the error, click the "Activity" tab on the right of your MetaMask UI and you'll see a pending transaction queue at the top where your most recent activity resides.
            It'd look something like this:
          </p>
          <div className='flex justify-center mt-8 mb-8'>
            <Image src={pending} layout='intrinsic'></Image>
          </div>
          <p className='justify-center indent-8 mb-2'>
            In the case it actually is stuck on the "Pending" state like that, just click on the "Speed Up" button, which will increase the gas amount and resend the transaction.
            If you're having issues with this or you run into some other issue, again just DM me using one of the social media links at the bottom of the page and I'll help you out.
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>
              Where are my HuskyCoins!?
            </h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            Assuming you successfully claimed your HuskyCoins, you'll notice that your $MATIC token balance went down from 0.001 MATIC to 0.0009something.
            That's because you spent a tiny amount of MATIC on gas to claim the $HUSKY tokens.
            But wait, what gives!? Where are those 69420 HuskyCoins!? Shouldn't they display under the "Assets" tab in MetaMask?
          </p>
          <p className='justify-center indent-8 mb-2'>
            Yes indeed they should- but don't worry if they don't yet.
            Sometimes MetaMask doesn't automatically pick up on when you've received or claimed tokens in your wallet.
            This is actually to keep you from interacting with malicious tokens that were sent to you by an attacker.
            You'll remember that Web3 is entirely permissionless, so you can't yet filter out jerks who send you spam or malware.
            That's a feature currently being worked on.
            Thankfully for the time being you can just ignore them; that way you're immune to any malicious tokens.
          </p>
          <div className='flex justify-center mt-8 mb-8'>
            <Image src={tokenImport} layout='intrinsic'></Image>
          </div>
          <p className='justify-center indent-8 mb-2'>
            But $HUSKY tokens are not malicious, they're just adorable! 
            To get MetaMask to display them, all we need to do is import them.
            The next and last step of this tutorial will be to stake them, so you'll get to watch your balance tick up in real time!
            That sounds fun, so let's first check the bottom of the MetaMask UI for the 
            </p>
            <a className='flex justify-center mb-2'>"Don't see your token? Import tokens"</a>
          <p>
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
          <a href='https://polygonscan.com' className='justify-center mb-2 text-blue-500 text-3xl txext-sm'>
            CHANGE HREF AND PUT POLYGON ADDRESS HERE
          </a>
          <p className='justify-center indent-8 mt-2 mb-2'>
            Copy and paste that address into the token contract address field and the Symbol field should automatically populate with "HUSKY" and the Decimal field should likewise populate with "18".
            Click "Add Custom Token" on the bottom to confirm.
          </p>
          <p className='justify-center indent-8 mb-2'>
            Congratulations! You can now see your 69420 $HUSKY balance in MetaMask under the "Assets" tab.
            This "Import Custom Token" process is great to know because you'll need to import most of the tokens you interact with on-chain.
            For example, if you wanted to display your $USDC or $USDT or $LINK balance (or whatever token you want), just google the token contract address and import it!
          </p>
          <div className='flex justify-center mt-8 mb-8'>
            {/*<Image>ADD HUSKYCOIN SCREENSHOT HERE </Image>*/}
          </div>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl mb-2'>
              Now I want MOAR HuskyCoins
            </h1>
            <h2 className='flex justify-center text-lg'>
              Time to stake them & watch number go up
            </h2>
          </div>
          <p className='justify-center indent-8 mb-2'>
            The last skill for you to learn in this tutorial is how to stake a token to earn passive income.
            Nothing beats watching your token balance slowly tick upward, so I've build a staking page that reads your on-chain token balance each block and relays that information to you.
            Head back to the HuskyCoin dApp home page and click the box titled "4. Stake to earn more HuskyCoins"
          </p>
          <p className='justify-center indent-8 mb-2'>
            This will take you to the Staking page of the dApp, where both your Available $HUSKY balance and your Currently staked $HUSKY balance are displayed to you.
            MetaMask may prompt you to connect your wallet again, in which case click the connect button.
            Then enter an amount that you wish to stake in the "Amount to stake" form and click the pretty green "Stake" button!
            MetaMask will open a prompt for you to view the $MATIC required to pay gas- hit confirm and wait for your transaction to be mined.
          </p>
          <p className='justify-center indent-8 mb-2'>
            Once your transaction is mined and written to the EVM, your "Available $HUSKY balance" will decrease by the amount you specified and your "Currently staked $HUSKY balance" will increase by that same amount.
            Feel free to refresh the page if necessary. Now you can watch your staked $HUSKY balance increase roughly every 10 seconds, or when every block is mined.
          </p>
          <p className='flex justify-center indent-8 text-sm mb-2 ml-10 mr-10'>
            Note: If it's been a couple minutes and you haven't get a browser notification from MetaMask saying "Transaction Confirmed," scroll back up to the "Quick Troubleshooting" section and follow the outlined steps.
            If you can't figure it out, don't hesitate to reach out to me using one of the social media links at the bottom of the page.
          </p>
          <div className={styles.description}>
            <h1 className='flex justify-center text-3xl'>
              Congratulations! You've completed the tutorial!
            </h1>
          </div>
          <p className='justify-center indent-8 mb-2'>
            I know it's a lot of reading and a lot of information but understanding and properly navigating Web3 is an invaluable skill.
            This space is almost certainly today's fastest growing industry, and it innovates on itself daily.
            I spent a lot of time making sure that you are aware of the cybersecurity practices that are vital to safely exploring the new digital world we call the "Metaverse".
            Rest assured that it only gets crazier from here, but you completing the tutorial proves you are now equipped to face anything.
          </p>
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
            This tutorial focuses on Ethereum and its layer 2 rollups (Arbitrum, Optimism, zkSync, Starkware, Polygon) because they are home to by far the largest and safest Web3 ecosystem.
            Other L1 blockchains that advertise extremely low fees or fast speeds have invariably made a tradeoff in one of the other trilemma categories.
          </p>
          <p className='justify-center indent-8 mb-2'>
            You may encounter cheap fees and fast block times, but as a result of lowered decentralization your risk of being "rugpulled" or scammed are significantly higher.
            Mess around with the other aforementioned crypto networks at your own risk.
          </p>  

          <div className={styles.description}>
          <h1 className='text-4xl mb-4'>Thanks for reading!</h1>
          <h1 className='text-4xl'>~~👦🏻👦🏻.eth~~</h1>
          </div>
        </div>
      </div>
    )
}