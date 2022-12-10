//require('dotenv').config();
const API_URL = 'https://eth-goerli.g.alchemy.com/v2/foiRhE1OcCTdH4QMaUAI-tq9N4ImoErQ';
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);
console.log(web3);
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

const contractAddress = "0x4285D8a53f24aF7907f7b93aC4EE568042DceB3E";
const helloWorldContract = new web3.eth.Contract(contract.abi, contractAddress);

async function main() {
    try{
        const message = await helloWorldContract.methods.message().call();
        console.log("The message is: " + message);
    }
    catch(e){
        console.log(e);
    }
    
 }
 main();‌