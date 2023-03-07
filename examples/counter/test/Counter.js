const { expect } = require("chai")

describe("Counter", function () {
  var Counter;
  var contract;

  it("Counter Increment Test", async function () {
    Counter = await ethers.getContractFactory("Counter")
    contract = await Counter.deploy()
    await contract.deployed()

    // expect(await contract.count()).to.equal("0")

    await (await contract.increment()).wait()
    expect(await contract.number()).to.equal("1")
  });

  it("Counter Decrement Test", async function () {
    // const Counter = await ethers.getContractFactory("Counter")
    // const contract = await Counter.deploy()
    // await contract.deployed()

    // expect(await contract.count()).to.equal("0")

    await (await contract.decrement()).wait()
    expect(await contract.number()).to.equal("0")

  })
});