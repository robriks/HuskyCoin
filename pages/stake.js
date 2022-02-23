import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Web3Modal from 'web3modal'

import { huskycoinaddress } from '../config'
import HuskyCoin from '../artifacts/contracts/HuskyCoin.sol/HuskyCoin.json'

export default function Stake () {
    const router = useRouter()
    const [input, setInput] = useState({ amount: '' })
    
    async function loadBalance() {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()

        let contract = new ethers.Contract(huskycoinaddress, HuskyCoin.abi, signer)
        let transaction = await contract.getBalance()

        return transaction.toString()
    }

    async function stake() {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()

        let amt = ethers.utils.parseUnits(input.amount, 'ether')

        let contract = new ethers.Contract(huskycoinaddress, HuskyCoin.abi, signer)
        let transaction = await contract.stake(amt)
        let tx = await transaction.wait()

        //loadBalance()
    }

    async function unstake() {
      // TODO
    }

    return (
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.card}>
                {loadBalance}
            </div>
            <div>
              <input 
                className='flex'
                placeholder='Amount to stake' 
                onChange={e => setInput({...input, amount: e.target.value })}
              />
              <button onClick={stake}>Stake</button>
            </div>
          </div>
        </div>
    )
}