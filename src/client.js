require('dotenv').config()
const Web3 = require('web3');
const { ethers, utils, TransactionRequest } = require('ethers');
const abi = require('./TokenMintERC20MintableToken.json')

const web3 = new Web3(process.env.INFURA_KOVAN)
const provider = ethers.getDefaultProvider('kovan', {
    infura: process.env.INFURA_KOVAN
})

//Loca host Ganache
const jsonprovider = new ethers.providers.JsonRpcProvider(`http://localhost:7545`);
const ganachePK = `e4a7aa9fca5bf0012fcc7add7857521e5e46239d5904e6b62d8c8ed53c91155b`
const ganacheSigner = jsonprovider.getSigner();

/*jsonprovider.getBlockNumber()
.then(function(blknum) {
    console.log(`${blknum}`);
})*/

//create instance of TokenMin
let contract = new ethers.Contract("0xB468380D5C654C307743C76ECfa3ffEfb0324661", abi, jsonprovider )
contract.balanceOf("0xB468380D5C654C307743C76ECfa3ffEfb0324661")
.then(function(bal) {
    console.log(`BalanceOf ${bal}`)
})

contract.spinSlotMachine()
.then(function(results) {
    console.log(`${results[0]}::${results[1]}::${results[2]}`);
})
 
//Create Signer.  This is to sign transaction using the user's private key
//const signer = new ethers.Wallet(ganachePK,jsonprovider)
//const account = ganacheSigner.connect(jsonprovider)
    





