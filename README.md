# HuskyCoin
## A Web3 tutorial for beginners
By Robriks / 👦🏻👦🏻.eth

Quick Note: If deploying locally (as opposed to testnet/mainnet) do not use nodejs version v17 or higher as it breaks Hardhat's ability to run a blockchain on --network localhost

## Running HuskyCoin Locally

First, run the blockchain using nodejs v16 or below:
```bash
npx hardhat node
```

Next, deploy the HuskyCoin contract to your local blockchain that is now running:
```bash
npx hardhat run scripts/deploy.js --network localhost
```

Then run the development server to enjoy a front end GUI:

```bash
npm run dev
```

## Learn More


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
