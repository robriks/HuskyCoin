const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HuskyCoin", function () {
    
    let HuskyCoin;
    let huskyCoin;
    let owner;
    let staker;

    beforeEach(async function() {
      HuskyCoin = await ethers.getContractFactory("HuskyCoin");
      huskyCoin = await HuskyCoin.deploy();
      await huskyCoin.deployed();

      [owner, staker] = await ethers.getSigners();
      await huskyCoin.mint(staker.address, 10000);
      await huskyCoin.mint(owner.address, 10000);
    });

    it("Should stake correct amount and return stakeIndex", async function () {
        expect(await huskyCoin.connect(staker).stake(100))
          .to.emit(huskyCoin, 'Staked');
    });

    it("Should reject stake attempts that exceed msg.sender balance", async () => {
        await expect(huskyCoin.connect(staker).stake(100000))
          .to.be.revertedWith("You don't have enough tokens to stake that amount");
    });

    it("Should withdraw stake properly", async() => {
        await huskyCoin.connect(staker).stake(100);

        let stakeSummary = await huskyCoin.connect(staker).hasStake(staker.address);
        expect(stakeSummary.totalAmount).to.equal(100);
        
        expect(await huskyCoin.connect(staker).withdraw(25, 0))
          .to.emit(huskyCoin, 'Unstaked');

        let withdrawnSummary = await huskyCoin.connect(staker).hasStake(staker.address);
        expect(withdrawnSummary.totalAmount).to.equal(75);
    });

    // it("Should properly award staking rewards given a set amount of time", async (time) => {
    //     // TODO

    //     await ethers.provider.send("evm_increaseTime", [3600]);
    //     await ethers.provider.send("evm_mine");
    // });
});