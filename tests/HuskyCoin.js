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

    it("Should properly award staking rewards given a set amount of time", async () => {
        await huskyCoin.connect(staker).stake(1000);

        await ethers.provider.send("evm_increaseTime", [3600]);
        await ethers.provider.send("evm_mine", []);
        
        // These lines were used to ensure that block times are indeed changed by the following code
        // They are such useful tools I am leaving them here to remind me for debugging knowledge
        /*
        let now = (await ethers.provider.getBlock(await ethers.provider.getBlockNumber())).timestamp;
        let after = (await ethers.provider.getBlock(await ethers.provider.getBlockNumber())).timestamp;
        expect(after).to.equal(now + 3600);
        */

         let grownStake = await huskyCoin.connect(staker).hasStake(staker.address);
         expect(grownStake.totalAmount).to.equal(1001);
    });

    it("Should properly calculate rewards for multiple stakes", async() => {
      await huskyCoin.connect(staker).stake(1000);
      await ethers.provider.send("evm_increaseTime", [3600]);
      await ethers.provider.send("evm_mine", []);
      let test1 = await huskyCoin.hasStake(staker.address);
      let stake1 = test1.stakes[0];
      expect(stake1.claimable).to.equal(1);

      await huskyCoin.connect(staker).stake(2000);
      await ethers.provider.send("evm_increaseTime", [3600]);
      await ethers.provider.send("evm_mine", []);
      let test2 = await huskyCoin.hasStake(staker.address);
      let stake2 = test2.stakes[1];
      expect(stake2.claimable).to.equal(2);
    });

    it("Should clear claimable rewards upon withdrawal and delete empty stakes", async () => {
      await huskyCoin.connect(staker).stake(1000);
      await ethers.provider.send("evm_increaseTime", [7200]);
      await ethers.provider.send("evm_mine", []);
      await huskyCoin.connect(staker).withdraw(1000, 0);
      let summary = await huskyCoin.hasStake(staker.address);
      let newBalance = await huskyCoin.connect(staker).balanceOf(staker.address);

      expect(summary.user).to.equal(undefined);
      expect(newBalance).to.equal(10002);
    });
});