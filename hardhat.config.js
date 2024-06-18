/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;
console.log(PRIVATE_KEY);

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      gasPrice: 20000000000,
      url: process.env.API_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
}