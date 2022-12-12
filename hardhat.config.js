require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config();
// require("@nomiclabs/hardhat-ganache");


// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "ganache",

  networks: {
    ganache: {
      gasLimit: 6000000000,
      defaultBalanceEther: 10,
      url: "http://127.0.0.1:8545"
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}",
      // accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
