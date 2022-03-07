import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Web3Modal from 'web3modal'

import { huskycoinaddress } from '../config'
import HuskyCoin from '../artifacts/contracts/HuskyCoin.sol/HuskyCoin.json'
//import { web3, Web3 } from 'hardhat'

export default function Stake () {
    const [input, setInput] = useState({ amount: '', stakeAmt: '' })
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
      loadBalance()
      const { amount, stakeAmt } = input
      if (!amount) return
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()

      let amt = ethers.utils.parseUnits(input.amount, 'ether')

      let contract = new ethers.Contract(huskycoinaddress, HuskyCoin.abi, signer)
      let transaction = await contract.stake(amt)
      let tx = await transaction.wait()

      loadBalance()
      loadStaked()
    }

    async function unstake() {
      loadStaked()
      const { amount, stakeAmt } = input
      if (!stakeAmt) return
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
      //const staker = await signer.getAddress()

      let stakeAmount = ethers.utils.parseUnits(input.stakeAmt, 'ether')

      let contract = new ethers.Contract(huskycoinaddress, HuskyCoin.abi, signer)
      let stakeIndex = await contract.getStakeholderIndex()
      let transaction = await contract.withdraw(stakeAmount, stakeIndex)
      let tx = await transaction.wait()

      loadBalance()
      loadStaked()
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
                  onChange={e => setInput({...input, stakeAmt: e.target.value })}
                />
                <button onClick={unstake}>Withdraw</button>
              </div>
            </div>
          </div>
        </div>
    )
}