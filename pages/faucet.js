import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
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
    
    if (isMobile) {
      return (
        <div>
          <Modal></Modal>
        </div>
      )
    } else {
    return (
      <div className={styles.container}>
        <main className={styles.description}>
          <div className={styles.description}>
            <h1 className='text-5xl text-blue-500 p-4'>HuskyCoin
              <a className='font-normal text-black'>{' '}Dispensing Faucet
              </a>
            </h1>
          </div>
        </main>
        <div className='flex justify-center'>
          <div className='flex justify-center'>
            <button
              onClick={dispenseHuskyCoins}
              className={`flex w-${36} mt-2 p-3 rounded-full bg-green-500 hover:bg-green-700 shadow-2xl justify-center text-white`}
            >Receive HuskyCoins
            </button>
          </div>
        </div>
        <p 
          className='text-sm p-2 mt-4 flex justify-center'>
          Click to claim your 69420 HuskyCoins
        </p>
        <p className='text-sm flex justify-center'>
          Note: Make sure to configure MetaMask first; you will be prompted to pay gas and execute the transaction
        </p>
      </div>
    )
  }
}