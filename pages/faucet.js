import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import husky from '../assets/husky.gif'
import Web3Modal from 'web3modal'
import Modal from '../components/modal'
import { isMobile } from 'react-device-detect'
import { huskycoinaddress } from '../config'
import HuskyCoin from '../artifacts/contracts/HuskyCoin.sol/HuskyCoin.json'

export default function Faucet () {
    const router = useRouter()
    async function dispenseHuskyCoins() {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()

        let contract = new ethers.Contract(huskycoinaddress, HuskyCoin.abi, signer)
        try {
        let transaction = await contract.dispense()
        let tx = await transaction.wait()
        } catch(err) {
          if (err) {
            alert("You already have HuskyCoins! Import the token address to MetaMask and go stake them or send to your friends.")
          }
        }

        router.push('/stake')
    }
    
    function catchMobile() {
      let bool = isMobile
      
      for (let i = 0; i < 2; i++) {
        if (!bool) continue; 

        if (bool = true) {
          bool = false;
          return (
            <div>
              <Modal></Modal>
            </div>
          )
        }
      }
      router.push('/faucet')
    }

    catchMobile()
    return (
      <div className={styles.container}>
        <main className={styles.description}>
          <div className={styles.description}>
            <a 
              href='https://rinkeby.etherscan.io/address/0x8cfb42a80291737cb62cef7b665fe1304d112fee' 
              className='justify-center text-5xl text-blue-500 p-4'>HuskyCoin
            </a>
            <div className='flex justify-center'>
              <a 
                className='justify-center text-4xl font-normal'>{' '}Dispensing Faucet
              </a>
            </div>
          </div>
        </main>
        <div className='flex justify-center mt-8'>
          <div className='justify-center'>
            <div className='flex justify-center max-w-2xl'>
              <Image src={husky} layout='intrinsic'></Image>
            </div>
            <div className='flex justify-center mt-6'>
              <button
                onClick={dispenseHuskyCoins}
                className={`flex w-${36} mt-2 p-3 rounded-full bg-green-500 hover:bg-green-700 shadow-xl justify-center text-white`}>
                  Receive HuskyCoins
              </button>
            </div>
          </div>
        </div>
        <p 
          className='text-sm p-2 mt-4 flex justify-center'>
          Click to claim your 69420 HuskyCoins
        </p>
        <p className='text-xs flex justify-center text-center'>
          Note: Make sure to configure MetaMask first; you will be prompted to pay gas and execute the transaction
        </p>
      </div>
    )
}
