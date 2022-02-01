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
        //ToDo
    }

    async function stake() {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()

        let amt = ethers.utils.formatUnits(input.amount.toString(), 'wei')
        // let amt = BigNumber.from(amount)

        let contract = new ethers.Contract(huskycoinaddress, HuskyCoin.abi, signer)
        let transaction = await contract.stake(amt)
        let tx = await transaction.wait()

        //loadBalance()
    }

    return (
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.card}>
                {/* Todo: A ticker that shows your balance */}
            </div>
            <form className='flex'>
                <label htmlFor='amount'></label>
                <input 
                  placeholder='Amount to stake' 
                  id='amount'
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                />
                <button type='submit' onClick={stake}>Stake</button>
            </form>
          </div>
        </div>
    )
}