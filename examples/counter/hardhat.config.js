require("@nomicfoundation/hardhat-toolbox");

const priv_key = "99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342";

const INFURA_API_KEY = "KEY";
const RINKEBY_PRIVATE_KEY = "YOUR RINKEBY PRIVATE KEY"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      // accounts: [`0x${RINKEBY_PRIVATE_KEY}`]
    },
    frontier: {
      url: `http://localhost:9933`,
      accounts: [priv_key]
    }
  },
  docgen: {
    path: './docs/hardhat',
    clear: true,
    runOnCompile: true,
  }
};
