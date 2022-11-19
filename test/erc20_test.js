const { expect } = require("chai");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("YangRuiX");

    const hardhatToken = await Token.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    console.log(ownerBalance)
    console.log(await hardhatToken.totalSupply())
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});