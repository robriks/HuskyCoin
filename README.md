# HuskyCoin
## A Web3 tutorial for beginners

By Robriks / 👦🏻👦🏻.eth

### Dapp URL: 
huskycoin.vercel.app

If you find this tutorial helpful, feel free to send tips to either:
👦🏻👦🏻.eth
0x65b54A4646369D8ad83CB58A5a6b39F22fcd8cEe

#### HuskyCoin Contract Addresses:
Depending on what network you'd like to connect to, update the config.js file in the root directory to contain the corresponding deployment address

Polygon: 0x8cfb42a80291737cb62cef7b665fe1304d112fee
Rinkeby: 0x8cfb42a80291737cb62cef7b665fe1304d112fee
HardHat Localhost: 0x5FbDB2315678afecb367f032d93F642f64180aa3 

### Running HuskyCoin Locally

Quick Note: If deploying locally (as opposed to testnet/mainnet) do not use nodejs version v17 or higher as it breaks Hardhat's ability to run a blockchain on --network localhost
This project was developed using nodejs version 16.0.0

First, run the blockchain using nodejs v16.0.0:
```bash
npx hardhat node
```

Next, deploy the HuskyCoin contract to your local blockchain that is now running:
```bash
npx hardhat run scripts/deploy.js --network localhost
```

Then run the development server to enjoy the front end GUI:

```bash
npm run dev
```
