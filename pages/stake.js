import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import husky from '../assets/husky.gif'
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
          <main className={styles.description}>
            <div className={styles.description}>
              <h1 className='text-5xl p-4'>
                Introduction to 
                <a 
                  href='https://www.coinbase.com/learn/crypto-basics/what-is-proof-of-work-or-proof-of-stake'
                  className='text-blue-500'>
                  {' '} Staking
                </a>
              </h1>
            </div>
          </main>
          <div className='flex justify-center -mt-4 mb-6'>
            <div className=' max-w-xl'>
              <Image src={husky} layout='intrinsic'></Image>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='justify-center sm:flex'>
              <div className={styles.card}>
                <h1 className='text-base flex justify-center'>
                  Available $HUSKY balance: 
                </h1>
                <div className='flex justify-center'>
                  <a className='font-bold p-1 text-2xl'>{balance}</a>
                </div>
                <div>
                  <p className='flex justify-center p-1'>
                    Minimum stake: 100 $HUSKY
                  </p>
                  <form className='justify-center'>
                    <input 
                      className='flex justify-center mt-3 border-2 rounded-md'
                      placeholder=' Amount to stake' 
                      onChange={e => setInput({...input, amount: e.target.value })}
                    />
                    <div className='flex justify-center'>
                      <button 
                        className={`flex w-${"36"} mt-3 p-2 rounded-full bg-green-500 hover:bg-green-700 shadow-xl justify-center text-white`}
                        onClick={stake}>Stake
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className={styles.card}>
                <h1 className='text-base flex justify-center'>
                  Currently staked $HUSKY balance: 
                </h1>
                <div className='flex justify-center'>
                  <a className='font-bold p-1 text-2xl'>{staked}</a>
                </div>
                <div>
                  <p className='flex justify-center p-1'>
                    Staked $HUSKY balances increase every block
                  </p>
                  <form className='justify-center'>
                    <input className='flex justify-center mt-4'></input>
                    <div className='flex justify-center'>
                      <button 
                        className={`flex w-${"36"} mt-3 p-2 rounded-full bg-green-500 hover:bg-green-700 shadow-xl justify-center text-white`}
                        onClick={unstake}>Withdraw All
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}