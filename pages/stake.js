import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Web3Modal from 'web3modal'

import { huskycoinaddress } from '../config'
import HuskyCoin from '../artifacts/contracts/HuskyCoin.sol/HuskyCoin.json'

export default function Stake () {
    const [input, setInput] = useState({ amount: '', stakeAmt: '' })
    const [balance, setBalance] = useState()
    const [staked, setStaked] = useState()


    useEffect(async() => {
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      
      provider.on("block", (blockNumber) => {
        loadBalance()
        loadStaked()
      })
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
      if (amount < 100) alert("Minimum stake is 100 $HUSKY")
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
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
      const staker = await signer.getAddress()

      let contract = new ethers.Contract(huskycoinaddress, HuskyCoin.abi, signer)
      let stakeIndex = await contract.getStakeholderIndex()
      let unstakeSummary = await contract.hasStake(staker)
      let unstakeAmount = unstakeSummary.originalStake
      let transaction = await contract.withdraw(unstakeAmount, stakeIndex)
      let tx = await transaction.wait()

      loadBalance()
      loadStaked()
    }
    

    return (
        <div className={styles.container}>
          <div className={styles.main}>
            <div className='p-12'>
              <div className={styles.title}>
                Introduction to 
                <a href='https://www.coinbase.com/learn/crypto-basics/what-is-proof-of-work-or-proof-of-stake'> Staking</a>
              </div>
            </div>
            <div className='flex justify-center p-10'>
              <div className={styles.card}>
                Available $HUSKY balance: 
                <div className='flex'>
                  <a className='font-bold p-1 text-2xl'>{balance}</a>
                </div>
                <div>
                  <p className='flex justify-center p-1'>Minimum stake: 100 $HUSKY</p>
                  <form>
                    <input 
                      className='flex p-1 mt-2 border rounded'
                      placeholder='Amount to stake' 
                      onChange={e => setInput({...input, amount: e.target.value })}
                    />
                    <button 
                      className={`flex w-${"36"} mt-3 p-2 rounded-md bg-green-500 hover:bg-green-700 shadow-lg justify-center`}
                      onClick={stake}>Stake
                    </button>
                  </form>
                </div>
              </div>
              <div className={styles.card}>
                Currently staked $HUSKY balance: 
                <div className='flex'>
                  <a className='font-bold p-1 text-2xl'>{staked}</a>
                </div>
                <div>
                  <p className='flex justify-center p-1'>Staked $HUSKY balances increase every block</p>
                  <form className='p-1'></form>
                  <button 
                    className={`flex w-${"36"} mt-12 p-2 rounded-md bg-green-500 hover:bg-green-700 shadow-lg justify-center`}
                    onClick={unstake}>Withdraw All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}