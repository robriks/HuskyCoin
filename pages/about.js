import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import geminiEarn from '../assets/geminiEarn.png'
import bOfA from '../assets/BofA.png'
import matcha from '../assets/matcha.png'
import instagramNFTs from '../assets/instagramNFTs.png'
import energy from '../assets/energy.png'
import hyperinflation from '../assets/hyperinflation.png'
import miners from '../assets/miners.png'
import web3 from '../assets/web3.png'
import web3Tweet from '../assets/web3tweet.png'

export default function About() {
    return(
      <div className={styles.container}>
        <div className='p-12 sm:mr-8 sm:ml-8'>
          <div className='mt-6 mb-10'>
            <div className='mt-8 mb-12'>
              <h1 className={styles.title}>
                Why Crypto?
              </h1>
            </div>
            <p className='justify-center mb-4 indent-8'>
              Cryptocurrency protocols leverage cryptography, open-source code, and decentralized computing architecture to achieve the first ever trustless, censorship-resistant, digitally scarce objects on the internet called tokens. 
              Tokens are a technological primitive that enable social coordination, public goods funding, and peer-to-peer hyperstructures that automate away greedy corporate middlemen and eliminate maintenance costs. 
              Whether being fungible (ERC20), non-fungible (NFTs/ERC721), or semi-fungible (ERC1155), tokens are to Web3 what websites are to the TCP/IP protocol we know as the internet.
            </p>
            <p className='justify-center mb-6 indent-8'>
              The first ever blockchain, the Bitcoin network, has over the past decade underlined the powerful results of decentralized, open-source tokens that use cryptography to maintain a public, transparent ledger of every balance and transaction ever sent between crypto addresses.
              It may be helpful to conceptualize by imagining entirely public email addresses that carry money instead of text, even though this is technically not what is happening under the hood.
              Ethereum took these concepts one step further by adding code to these transactions, pioneering the concept of programmable digital money, all while prioritizing decentralization.
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
          <p className='justify-center mb-8 indent-8'>
            Blockchain tokens are non-custodial and permissionless, which is what enables a 24/7 peer-to-peer network of economic activity.
            This means they inherently disintermediate the institutional middlemen that extract rent/interest from you while they restrict your economic activity to weekday business hours while also delaying settlement by 3-5 business days.
            Think of your Ethereum address as your on-chain bank account,
            except it kicks your bank's ass because:
          </p>  
          <ol className='justify-center space-y-5 md:mr-20 md:ml-20'>
            <li 
              className='text-sm justify-center indent-2'>
                1. Current interest rates on US dollar tokens (like USDC/GUSD/USDT, which are always redeemable for $1) are anywhere from 3-8% APY.
                For reference, that's over 300 times higher than your 0.03% APY "high yield" savings account. 
                That's just stablecoins, aka crypto dollars, too!  
                Other tokens, like $ETH, can be staked to earn you 4.5% APY denominated in $ETH, which can in turn appreciate further as demand for Web3 increases.
              <div className='justify-center mt-6 mb-4'>
                <Image 
                  src={geminiEarn} 
                  layout='intrinsic' 
                  >
                </Image>
              </div>
            </li>
            <li 
              className='text-sm justify-center mt-2'>
              <div>
              <p className='justify-center mb-2 indent-2'>
                2. Crypto wallets are self-custodial, which means you, and only you, control your funds 24/7 with your private key. 
                None of that 3-5 business day, Mon-Fri between the hours of 9-5, credit check and transfer limit crap. 
              </p>
              <p className='justify-center mb-2 indent-4'>
                A checking/savings account is at its core an unsecured loan of YOUR money that your bank uses to fund mortgages and other risky ventures that earn them 5-20% profit. 
                From that yield gained from using YOUR money, the bank pays you 0.03% interest to your "high yield" savings account and then hoards all the rest of the profits for themselves and their CEOs/shareholders. 
              </p>
              <p className='justify-center indent-4'>Along the way, they may even cause a world economic recession a la 2008! 
                In which case, FDIC Insurance for $250,000 on your deposits is helpful... right?
                Except FDIC Insurance is funded by... you guessed it: taxpayers and monetary inflation.
                So, in essence, you're "FDIC Insured" by taxpayer money, which is... your money. 
                FDIC Insurance isn't insurance for your money, it's a carte blanche insurance for the banks' funds- paid for by you and me.
              </p>
              <p className='justify-center indent-4 mt-2'>
                That's not even skimming the surface of other heinous rent extraction like overdraft fees, account maintenance balances, etc.  But I digress...
              </p>
              </div>
              <div className='flex justify-center mt-6 mb-4'>
                <Image 
                  src={bOfA}
                  layout='intrinsic'
                  >
                </Image>
              </div>
            </li>
            <li 
              className='text-sm justify-center mt-2'>
              <div>
                <p className='justify-center indent-4'>
                  3. Ethereum addresses support much more than just money. 
                  Dollars and stablecoins are cool and all but you can also store and stake fungible tokens called ERC20s. 
                </p>
                <p className='justify-center indent-4 mt-2'>
                  Some popular examples include $USDC, $DAI, Shiba Inu $SHIB, UniSwap $UNI, Chainlink $LINK, Wrapped Bitcoin $WBTC, Polygon $MATIC, each possessing different capabilites from governance to membership all while being tradeable 24/7 for other tokens like $ETH or crypto dollars. 
                </p>
                <p className='justify-center indent-4 mt-2'>
                  Being programmable money, these tokens are capable of anything a regular computer running software can do.
                </p>
                </div>
            <div className='flex justify-center mt-6 mb-4'>
              <Image 
                src={matcha}
                layout='intrinsic'>
              </Image>
            </div>
            </li>
            <li 
              className='text-sm justify-center mt-2'>
              <div>
                <p className='justify-center indent-2'>
                  4. You can even store non-fungible tokens, NFTs for short, which are provably unique tokens that expand on token programmability. 
                  Most people associate NFTs with digital art, but that barely touches the surface of what NFTs are capable of. 
                </p>
                <p className='justify-center indent-4 mt-2'>
                  Digital ownership bears powerful implications on the internet economy, as evidenced by the rapid rise in NFT speculation and the emergence of the term "Metaverse".
                  NFTs can for example represent and mirror physical-world objects, serve as concert tickets, function as club memberships, stream music, stream viewership royalty payments, codify digital contractual obligations, or even contain marriage certificates. 
                  Yes, people have put their marriage licenses on-chain on Ethereum! I plan to!
                </p>
              </div>
            <div className='flex justify-center mt-6 mb-4'>
              <Image 
                src={instagramNFTs}
                layout='intrinsic'>
              </Image>
            </div>
            </li>
          </ol>
          <div className='justify-center mt-12 mb-10'>
            <h1 className='flex justify-center text-4xl'>
              Okay, I get it: banks suck. 
            </h1>
            <h2 className='flex justify-center text-4xl'>
              But is Crypto safe?
            </h2>
          </div>
          <p className='justify-center indent-8'>
            The cryptography that secures blockchains like Bitcoin and Ethereum is impenetrable. 
            The encryption algorithms like sha256/keccak256 utilize numbers so massive that they are impervious to brute-force attack.
            Your BTC/ETH public address and private key, for example, are unimaginably large numbers (in base58 and hexadecimal respectively), closer to the number of atoms in the observable universe than anything else quantifiable by words.
            Guessing a private key to steal someone's money is like finding a needle in the haystack, except much, much harder- it's more akin to trying to pinpoint a single specific atom anywhere in the universe.
          </p>
          <p className='justify-center indent-8 mt-2'>
            Banks don't use protocols anywhere near this level of security. 
            Routing/Account numbers, SWIFT, and SMS verification are fundamentally insecure; not to mention the centralized databases that are susceptible to fires or power outages.
          </p>
          <p className='justify-center indent-8 mt-2'>
            Decentralized cryptocurrencies on the other hand feature open-source code, meaning anyone anywhere in the world can copy-paste the protocol software and run a node to contribute by verifying and propagating transactions, greatly bolstering network resilience.
            As a result, only a worldwide power outage or nuclear war that destroys every computer on Earth could realistically stop the Bitcoin and Ethereum networks from functioning.
            The $BTC and $ETH blockchains have never gone down in a decade, unlike Facebook/Instagram or Google which have proven vulnerable to CDN/DNS outages every few months.
          </p>
          <p 
            className='text-sm flex justify-center indent-4 mt-6 mr-8 ml-8'>
              Fun fact: the entire United States military combined with all three-letter agencies (NSA, CIA, FBI) and their massive budgets could not destroy the Bitcoin or Ethereum protocols, short of destroying Earth with nukes. 
            </p>
            <p className='text-sm justify-center indent-4 mr-8 ml-8'>
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
          <p className='justify-center indent-8'>
            In western societies run by relatively trustworthy governments overseeing functional economies, we've gotten far removed from the need for a medium of exchange that isn't controlled by corrupt politicians or hyperinflationary monetary policy.
            Most of the rest of the world doesn't enjoy such luxury.
          </p>
          <p className='justify-center indent-8 mt-2'>
            Every fiat currency in history to date has ultimately failed.
            Fiat refers to money that is backed by trust in a central bank/government authority, and NOT backed by a scarce commodity like gold.
            Because the Euro, the Dollar, the Yuan, and the Yen are not redeemable for gold, they are examples of such fiat currencies- even the British Pound is not redeemable for a pound of silver as it once was!
            For every surviving fiat on the globe, there is a large graveyard of fiat currencies that failed to hyperinflation or deflationary spirals or some other economic woe.
          </p>
          <p className='justify-center indent-8 mt-2'>
            It's fine to stick with US dollars if you're lucky enough to live in the west. 
            But for those less fortunate living in countries like Zimbabwe, Greece, Turkey, Argentina, Russia, and many others, your entire livelihood is at the whim of a handful of oligarchs, central bankers, or an authoritarian regime.
            For people in these countries, the ability to exit a failing financial system being destroyed by kleptocrats or a dictator is paramount.
          </p>
          <p className='justify-center indent-8 mt-2 mb-10'>
            The first emergent use case in crypto's Web3 has been termed "DeFi," short for decentralized finance.
            The simple ability to trade your tanking fiat currency (like the Turkish Lyra or Zimbabwe Dollar) for stablecoins pegged to the dollar has become nothing short of a humanitarian solution to geopolitical issues.
          </p>
          <div className='flex justify-center'>
            <Image 
              className='flex justify-center' 
              src={hyperinflation}
              width={350}
              height={550}>
            </Image>
          </div>
          <div className='justify-center text-4xl mt-14 mb-10'>
            <h1 className='flex justify-center'>
              DeFi fights dictators?
            </h1>
            <h2 className='flex justify-center'>
              Sounds far-fetched.
            </h2>
          </div>
          <p className='justify-center indent-8'>
            Given that the most powerful nation states in the world cannot stop the Bitcoin and Ethereum blockchains from confirming blocks, a number of powerful attributes arise as a result.
            Censorship-resistance is an attribute that bears little weight in our luxurious western economies run by trustworthy governments, but it's a different story when you're living under an authoritarian regime that specializes in censoring free speech and has the banking system under its thumb.
          </p>
          <p className='justify-center indent-8 mt-2'>
            Web3 and DeFi provides freedom from the threat of an authoritarian freezing your bank accounts or restricting the internet content you can view via national firewall.
            Any person with a dirt cheap smartphone and data plan can permissionlessly use Web3, without risk of censorship, so long as you remain connected to the internet.
          </p>
          <p className='justify-center indent-8 mt-2'>
            Computers are the ones running blockchains and, thankfully, they are incapable of discrimination, be it racism, sexism, sexual orientation bigotry, or political affiliation.
            Nearly 2 billion people in the world are unbanked, meaning they do not have a bank account and are unable to acquire one.
            That's nearly 1/4 the entire world population that is unable to join us, the western banked elite, in our luxury exclusionary financial system.
            The current financial system is discriminatory and exclusionary by default (eg redlining), Web3 on the other hand is inclusive by default.
          </p>
          <div className='justify-center text-4xl mt-12 mb-10'>
            <h1 className='flex justify-center mb-10'>
              What about Crypto's carbon footprint?
            </h1></div>
            <div className='flex justify-center mb-8'>
              <Image 
                className='flex justify-center' 
                src={energy}>
              </Image>
            </div>
          <p className='justify-center mb-2 indent-8'>
            One of Bitcoin's groundbreaking technological innovations is the solution to the Byzantine General's Dilemma and the Double Spend Problem.
            It achieves this by reaching consensus among many decentralized nodes using an algorithm known as Proof-Of-Work, abbreviated as PoW.
            The technical details surrounding PoW are fascinating, making use of cryptographic hashes and signatures which are not important for me to delve into here.
            In short, Bitcoin incentivizes computers to work at brute-forcing (by trial and error) a sha256 hash of dynamically adjusted difficulty, known as $BTC mining.
            These computers operate and secure the network in exchange for payment in Bitcoins; unfortunately this work has the drawback of consuming a lot of electricity.
            Thankfully, the wild predictions like the above headline have not come to pass; Bitcoin currently consumes 0.1% of worldwide energy production (99.9% less than predicted!) and in so doing provides over 100 million users with a secure, immutable, permissionless financial system.
            In addition, some savvy miners like Giga are working to only implement Bitcoin mining infrastructure that provide net environmental benefit by reducing carbon dioxide and methane emissions, here's an example snippet from CNBC:
          </p>
          <div className='flex justify-center mt-8 mb-8'>
            <Image 
              src={miners}
              width={600}
              height={300}>
            </Image>
          </div>
          <p className='justify-center mb-2 indent-8'>
            Recently, there have been numerous widely-circulated articles claiming that a single Bitcoin transaction requires a wildly large amount of electricity; most of these claims cite a University of Cambridge study that demonstrated poor understanding of the protocol.
            Individual transactions in fact cost no electricity at all!
            Instead, it is each block, which can contain any number of transactions, that consumes a lot of energy.
            Others point to the fact that the Bitcoin network consumes more electricity than small countries like Iceland; this is to be expected, considering the Bitcoin economy is larger and faster than the entire economic GDP of Iceland (Iceland's GDP is ~$22 billion and restricted to business hours; Bitcoin secures ~$1 trillion, a figure that is over 40x larger, working globally 24 hours a day and 7 days a week).
            There are many other uses of electricity that consume more energy/waste than PoW that we do not decry for damaging the environment: Christmas lights, cruise ships, household driers, private jets, or YouTube, for example.
          </p>
          <p className='justify-center indent-8'>
            You'll find misinformation about the energy consumption of Proof of Work mechanisms all over the internet, but ultimately these concerns are valid. 
            Securing a trillion dollar economy larger than most countries is a very difficult endeavor and decade-old technology like PoW is proving costly.
            Because PoW consensus is very energy intensive, the miners who provide a net carbon benefit to the environment by consuming companies' emissions & using renewables are easily offset by just as many or more miners who operate using dirty energy sources and carbon intensive techniques like coal.
            This is one reason why Ethereum has chosen to end its reliance on PoW in favor of another consensus mechanism that will drop Ethereum's carbon footprint by 99% while simultaneously improving decentralization: Proof of Stake.
          </p>
          <div className='justify-center text-4xl mt-12 mb-10'>
            <h1 className='flex justify-center'>
              What is Proof of Stake?
            </h1>
          </div>
          <p className='justify-center indent-8'>
            Proof of Stake (abbreviated PoS) aims to replace Proof of Work by removing miners and introducing validators in their stead.
            Rather than having miners rapidly brute force solutions to a sha256 hash, PoS nodes confirm transactions in each block by putting up a stake of funds that allows the node to be chosen for proposing blocks.
            If the node proposes and attests to legitimate blocks, benefitting the network, it is rewarded with issuance of newly minted $ETH; if it behaves maliciously or supports invalid blocks, a portion of its stake is slashed.
            The goals of switching to PoS are manifold: 
          </p>
          <ul className='list-disc justify-center text-sm mt-6'>
            <li className='ml-6'>Dropping energy consumption and environmental impact by 99%</li> 
            <li className='ml-6'>Eliminating the need for expensive specialized mining hardware (ASICs cost nearly $10k and GPUs are difficult + expensive to obtain)</li>
            <li className='ml-6'>Allowing every user in the network to delegate or stake their funds for greater say over the protocol and to earn passive income rewards</li>
          </ul>
          <p className='justify-center indent-8 mt-6'>
            Reducing the barrier to entry for hardware requirements and giving every user the ability to earn staking rewards on their funds will result in more network nodes.
            This directly improves user representation (and indirectly via delegates), improving decentralization over current PoW mechanisms like that of Bitcoin's.
            This is paramount because Web3 is only made possible by resilient decentralization that provides net neutrality and prevents network downtime or censorship by eliminating any potential single point of failure.
          </p>
          <p className='justify-center text-sm indent-8 mt-6 mr-8 ml-8'>
            Note: it's absolutely vital to understand that a centralized blockchain, of which many exist, is no better than a database being run from someone's garage or corporate office.
            Such a network provides no net neutrality and no resistance to censorship, corruption, or network downtime- all of which are unacceptable when handling the livelihoods of millions of people worldwide.
          </p>
          <div className='flex justify-center text-4xl mt-12 mb-10'>
            <h1 className='justify-center'>
              Just explain Web3 already!
            </h1>
          </div>
          <p className='justify-center indent-8'>
            Web3 is about net neutrality. 
            The Web3 landscape exists as a decentralized protocol layer on the internet that for the first time enables ownership of fully interoperable digital assets that can be trustlessly transacted. 
            All this, while prioritizing neutral fairness, equity, and permissionlessness by eliminating gatekeeping intermediaries who extract profit and replacing them with code.
          </p>
          <p className='justify-center indent-8'>
            These attributes of crypto networks take censorship and permission power away from gatekeeping middlemen like banks, massive tech companies, and other corporations who have exploited that power for profit, and instead gives that power to everyday users like you and me.
            You can think of Web3 as the next logical step in automation: code running on a decentralized network automating away the incompetent and unethical incumbents who stand in the way of you custodying and transacting your own assets.
          </p>
          <p className='justify-center indent-8'>
            To really understand the term, it's worth providing a brief overview of Internet history.
            Web1 was the first inception of the internet (~1990-2004) where the web featured static websites owned by companies like news organisations. 
            Using these read-only websites, individuals internet users rarely interacted with one another, instead just reading static html content.
          </p>  
          <p className='justify-center indent-8'>
            Web2 on the other hand began in 2004 with the emergence of social media platforms.
            This period saw growth in read-write interactions and platforms that featured users generating content in the form of posts, pictures, & videos and sharing it to other users via messages and public user pages.
          </p>
          <div className='flex justify-center mt-6 mb-6'>
            <Image className='justify-center' src={web3Tweet}></Image>
          </div>
          <p className='justify-center indent-8'>
            Unfortunately, a small handful of powerful corporations have become arbitrators of the vast majority of online traffic.
            Internet Service Providers like Verizon/Comcast possess the power to throttle your connection to any site they wish.
            Facebook and Google have implemented echo chamber algorithms that have engendered misinformation factories and troll farms that profit from outrage engagement.
          </p>
          <p className='justify-center indent-8'>
            Even worse, all of these companies collect massive swathes of data on each user and either exploits it to extract profit from our behaviors or sells it to another company that does so.
            This has directly resulted in mass radicalization of unscrupulous (or uneducated) users who don't fact check the content presented to them by Russian troll farms and other malicious geopolitical actors who benefit from political turmoil.
          </p>
          <p className='justify-center indent-8'>
            One such consequence was the January 6th insurrection. 
            This was an openly violent assault on the legislative capitol of the United States of America which resulted in several deaths on government grounds, mere meters away from congressional senators and Vice President Mike Pence.
            The stated goal of these insurrectionists, who erected a noose intended for capital punishment on government grounds, was to stop the peaceful transfer of power after a legitimate democratic election.
          </p>  
          <p className='justify-center indent-8'>
            We cannot afford to wait any longer without addressing the state of our online political landscape.
            We need net neutrality.
          </p>
          <div className='flex justify-center mt-6 mb-6'>
            <Image className='justify-center' src={web3}></Image>
          </div>
          <p className='flex justify-center indent-8'>
            Web3 aims to fix all this. 
            Digital property rights give rise to a number of important potential solutions, like taking back ownership of your own data from Google or cryptographically preventing voter fraud to securely combat 'rigged election' misinformation.
          </p>  
          <p className='flex justify-center indent-8'>
            The native interoperability of digital assets on a blockchain also bears powerful implications: consider a gamer named Alice playing World of Warcraft on Web2.
            Alice's entire metaversal gaming experience is entirely dependent on the servers at the game's data center.
            Alice may pour hundreds of hours of hard work into honing their PvP/PvE skills and thereby collecting awards, items, and notoriety within the community.
          </p>
          <p className='flex justify-center indent-8'>
            None of these digital assets and achievements are portable into the next game that Alice plays. Not a one.
            This means if there's a flood at the game's data center, a bug/hack in the servers, a developer layoff, or a problem with the parent company, the servers go down and the game (along with the gamers' hard-earned assets) goes down with it!
          </p>
          <p className='flex justify-center indent-8'>
            In Web3, all digital assets, identity, and history are portable between all platforms by default.
            This includes all games, dapps, or social media sites powered by crypto.
            Your Ethereum address can serve as your Web3 Twitter profile, your video game login credentials, your credential history, your bank account, all while storing your digital assets.
          </p>
          <p className='flex justify-center indent-8'>
            Imagine how convenient it would be to have one account that seamlessly ported between your FaceBook, Insta, Twitter, Linkedin, Call of Duty, held your drivers' license, professional resume, and your bank/investment accounts.
            Any cool item you earn as a reward in a game (like a dope hat!) or social media platform (like your Snapchat BitMoji!) can be worn/displayed in every other Web3 game or social media platform.
          </p>
          <p className='flex justify-center indent-8'>
            By enabling ownership of your own data, your posts, & your social media content, you gain control over all your in-game currencies, blog posts, instagram photos. 
            Not only that but they can be configured to pay you royalties or can be exchanged for actual money like stablecoins or $ETH at any hour of the day.
            That's the reality of what the Metaverse will look like, and it's already being built at breakneck speed.
          </p>
          <div className='justify-center mt-8'>
            <h1 
              className='flex justify-center text-4xl'>
                Thanks for reading!
            </h1>
            <p className='flex justify-center indent-8 mt-8'>
              Hopefully you've enjoyed learning about what a Web3 powered by crypto can enable.
              I wrote all this under the Web3 about page to help readers understand why Web3 skills like learning to transact on-chain are very valuable skills.
              Ideally this writeup has inspired you to go complete the tutorial!
              So switch over to a desktop browser, head back to the home page and get started!
            </p>
            <h2 className='flex justify-center text-4xl mt-8'>Now go learn some Web3 skills!</h2>
          </div>
        </div>
      </div>
    )
}