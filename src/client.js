require('dotenv').config()
const Web3 = require('web3');
const { ethers, utils, TransactionRequest } = require('ethers');
const abi = require('./TokenMintERC20MintableToken.json')

const web3 = new Web3(process.env.INFURA_KOVAN)
const provider = ethers.getDefaultProvider('kovan', {
    infura: process.env.INFURA_KOVAN
})

//Loca host Ganache
const jsonprovider = new ethers.providers.JsonRpcProvider(`http://127.0.0.1:7545`);
const ganachePK = `9795a3b29fc8418965868b58faa08dbe78d856d82e11a49012aaf6fc7858b217`
const ganacheSigner = jsonprovider.getSigner();

/*jsonprovider.getBlockNumber()
.then(function(blknum) {
    console.log(`${blknum}`);
})*/

//create instance of TokenMin
let contract = new ethers.Contract("0x74f3893814330d778b250D89a4013CBF1Ed0519d", abi, jsonprovider )
contract.balanceOf("0xBfA9EE9d863730c19F793804adfe30FfC7c3ac40")
.then(function(bal) {
    console.log(`BalanceOf ${bal}`)
})

contract.spinSlotMachine(10000000020202)
.then(function(results) {
    console.log(`${results[0]}::${results[1]}::${results[2]}`);
})
 
//Create Signer.  This is to sign transaction using the user's private key
//const signer = new ethers.Wallet(ganachePK,jsonprovider)
//const account = ganacheSigner.connect(jsonprovider)
    





