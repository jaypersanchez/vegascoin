var vegascoin = artifacts.require("./TokenMintERC20MintableToken.sol");

const name = "VegasCoins.io"
const symbol = 'VCoins'
const decimals = 18
const initialSupply = 1000000000
const feeReceiver = '0x5807c6ecb0AB413816f7C90f0e5C2974bDF89fc3'
const tokenOwnerAddress = '0xD084e8bBCE0853f0ef57FAC2Ea7964F7a57E788b'

module.exports = function(deployer) {
  deployer.deploy(vegascoin, name, symbol, decimals, initialSupply, feeReceiver, tokenOwnerAddress); // 1M total supply 
};