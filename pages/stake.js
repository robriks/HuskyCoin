import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Web3Modal from 'web3modal'

import { huskycoinaddress } from '../config'
import HuskyCoin from '../artifacts/contracts/HuskyCoin.sol/HuskyCoin.json'

export default function Stake () {
    const [input, setInput] = useState({ amount: '' })
    const [balance, setBalance] = useState()
    const [staked, setStaked] = useState()

    useEffect(() => {
      loadBalance()
      loadStaked()
    }, [])
    
    async function loadBalance() {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()

        let contract = new ethers.Contract(huskycoinaddress, HuskyCoin.abi, signer)
        let transaction = await contract.getBalance().then((result) => {
          setBalance(ethers.utils.formatEther(result))
        })
    }

    async function loadStaked() {
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
      const staker = await signer.getAddress()
      
      let contract = new ethers.Contract(huskycoinaddress, HuskyCoin.abi, signer)
      let transaction = await contract.hasStake(staker).then((result) => {
        setStaked(ethers.utils.formatEther(result.totalAmount))
      })
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

        loadBalance()
    }

    async function unstake() {
      // TODO

      //loadStaked()
    }

    return (
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.card}>
              Available $HUSKY balance: <h4>{balance}</h4>
              <div>
                <input 
                  className='flex'
                  placeholder='Amount to stake' 
                  onChange={e => setInput({...input, amount: e.target.value })}
                />
                <button onClick={stake}>Stake</button>
              </div>
            </div>
            
            <div className={styles.card}>
              Staked $HUSKY balance: <h4>{staked}</h4>
              <div>
                <input 
                  className='flex'
                  placeholder='Amount to unstake'
                  onChange={e => /* does using setInput again screw up the staking value state? */}
                />
                <button onClick={/* unstake */}>Withdraw</button>
                TODO: Withdraw button
              </div>
            </div>
          </div>
        </div>
    )
}