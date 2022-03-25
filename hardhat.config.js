require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

module.exports = {
  
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
      chainId: 1337
    }, 
    rinkeby: {
      url: process.env.DEPLOY_API_RINKEBY,
      accounts: [process.env.DEPLOY_SECRET_RINKEBY]
    },
    mumbai: {
      url: process.env.DEPLOY_API_MUMBAI,
      accounts: [process.env.DEPLOY_SECRET_MUMBAI]
    },
    matic: {
      url: process.env.DEPLOY_API_MATIC,
      accounts: [process.env.DEPLOY_SECRET_MATIC]
    }
  },
  

  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
