// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const accounts = await hre.ethers.getSigners();

  const LetterFactory = await hre.ethers.getContractFactory("rockPaperScissors");
  const letterFactory = await LetterFactory.deploy();

  await letterFactory.deployed();
  console.log("LetterFactory deployed to:", letterFactory.address);

  const tx_1 = await letterFactory.mint(1,2, {
    value: ethers.utils.parseEther("0.02")
  })
  const { events } = await tx_1.wait();

  console.log(accounts[0].address);
  // console.log(accounts);
  const balanceOfMinter = await letterFactory.balanceOf(accounts[0].address, 1);
  
  console.log("Balance of Minter" + balanceOfMinter);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});
