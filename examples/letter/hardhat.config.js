require("@nomiclabs/hardhat-waffle");
require('hardhat-docgen');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const priv_key = "99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342";
const INFURA_API_KEY = "KEY";
const RINKEBY_PRIVATE_KEY = "YOUR RINKEBY PRIVATE KEY"

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.2",
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

