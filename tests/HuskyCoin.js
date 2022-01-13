const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HuskyCoin", function () {
    
    it("Should stake correct amount and return stakeIndex", async function () {
        const HuskyCoin = await ethers.getContractFactory("HuskyCoin");
        const huskyCoin = await HuskyCoin.deploy();
        await huskyCoin.deployed();

        let [staker] = await ethers.getSigners();
        await huskyCoin.mint(staker.address, 1000);

        expect(await huskyCoin.connect(staker).stake(100))
          .to.emit(huskyCoin, 'Staked');
    });

    it("Should reject stake attempts that exceed msg.sender balance", async () => {
        const HuskyCoin = await ethers.getContractFactory("HuskyCoin");
        const huskyCoin = await HuskyCoin.deploy();
        await huskyCoin.deployed();

        let [evilStaker] = await ethers.getSigners();
        await huskyCoin.mint(evilStaker.address, 1000);

        await expect(huskyCoin.connect(evilStaker).stake(100000))
          .to.be.revertedWith("You don't have enough tokens to stake that amount");
    });
});