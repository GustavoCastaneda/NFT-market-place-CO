require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString() 
const proyectId = "7e299575c1e2484984f2aeb5f940fef6"

module.exports = {
  networks:{
    hardhat:{
      chainId: 1337
    },
    mumbai:{
      url: `https://mainnet.infura.io/v3/${proyectId}`,
      accounts: [privateKey] 
    },
    mainnet:{
      url : `https://mainnet.infura.io/v3/${proyectId}`,
      accounts: [privateKey]
    }
  }
  solidity: "0.8.4",
};
