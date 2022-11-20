const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("YangRuiX");

    const hardhatToken = await Token.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    console.log(owner.address);
    console.log(ownerBalance);
    console.log(await hardhatToken.totalSupply());
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);

    // let w = new ethers.Wallet("0x882A4Dcc8457Bd9a2AB4a5E3EaeF7a4A74B00990");
    let w = new ethers.Wallet("379a05d3166b455bd5bdad9ff4c224b221c098b2dba09f541d73ff081c9b0e58");
    let re = await hardhatToken.transfer(w.address,1000000);
    console.log(re);
    let b2 = await hardhatToken.balanceOf(w.address);
    expect(b2, 1000000); 
  });
});