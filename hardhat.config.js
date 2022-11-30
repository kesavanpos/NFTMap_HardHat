require("@nomicfoundation/hardhat-toolbox");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

const API_URL='https://eth-goerli.g.alchemy.com/v2/foiRhE1OcCTdH4QMaUAI-tq9N4ImoErQ'
const PRIVATE_KEY='9e4782b5efdc36e4edd96206b1c8698a5ea8d832892b3a11a34b13ec072e723c'


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 1337, // We set 1337 to make interacting with MetaMask simpler,
      allowUnlimitedContractSize: true
    },
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      allowUnlimitedContractSize: true
   }
  }
};
