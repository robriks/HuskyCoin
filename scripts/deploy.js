const hre = require("hardhat");

async function main() {
    const HuskyCoin = await hre.ethers.getContractFactory("HuskyCoin");
    const huskyCoin = await HuskyCoin.deploy();

    console.log("HuskyCoin deployed to: ", huskyCoin.address);
}

main()
  .then(() => process.exit(0))
  .catch((er) => {
      console.error(er);
      process.exit(1);
  });
