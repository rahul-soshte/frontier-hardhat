// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();

  await counter.deployed();
  const tx = await counter.increment({});
  const { events } = await tx.wait();
  const tx1 = await counter.decrement({});
  const { events2 } = await tx1.wait();

}

let start = Date.now();
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");