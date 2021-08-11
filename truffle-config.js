var HDWalletProvider = require("@truffle/hdwallet-provider");
//var mnemonic = "parrot guide ribbon seed lady easy dizzy genre vote praise famous help";
var mnemonic = "flee sadness churn mixture harbor hurry helmet grid valve frame seat voice";
module.exports = {
  rpc: {
    host: "127.0.0.1",
    port: '7545'
  },
  networks: {
    ganache_cli: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ganache_ui: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
  },
  mocha: {
    useColors: true
  },
  compilers: {
      solc: {
        version: "0.5.0",
      }
  }
};
