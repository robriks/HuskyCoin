import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import Web3Modal from 'web3modal'

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
        let transaction = await contract.dispense()
        let tx = await transaction.wait()

        router.push('/stake')
    }

    return (
        <div className={styles.container}>
          
          <div className={styles.main}>
            <div className={styles.title}>
              <h1 className='text-blue-500 p-12'>HuskyCoin Faucet</h1>
            </div>
              <button
                onClick={dispenseHuskyCoins}
                className={`flex w-${"36"} mt-2 p-3 rounded-md bg-green-500 hover:bg-green-700 shadow-lg justify-center text-white`}
              >Receive HuskyCoins
              </button>
            <p className='p-7 flex justify-center'>The above will raise a MetaMask prompt for you to pay gas and execute the transaction, giving you 69420 HuskyCoins</p>
          </div>
        </div>
    )
}