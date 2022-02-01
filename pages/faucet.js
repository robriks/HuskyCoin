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
            <h1>HuskyCoin Faucet</h1>
              <button
                onClick={dispenseHuskyCoins}
                className={`flex w-${"36"} mt-2 p-1 rounded-md bg-gray-500 hover:bg-gray-900 shadow-lg justify-center`}
              >Receive HuskyCoins
              </button>
            <p>The above will raise a MetaMask prompt for you to pay gas and execute the transaction, giving you 69420 HuskyCoins</p>
          </div>
        </div>
    )
}