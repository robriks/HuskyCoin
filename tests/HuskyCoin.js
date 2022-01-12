const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HuskyCoin", function () {
    it("Should stake correct amount and return stakeIndex", async function () {
        const HuskyCoin = await ethers.getContractFactory("HuskyCoin");
        const huskyCoin = await HuskyCoin.deploy();
        await huskyCoin.deployed();

        const [staker] = await ethers.getSigners();
        await huskyCoin.mint(staker.address, 1000);

        expect(await huskyCoin.connect(staker.address).stake(100)).to.emit(huskyCoin, 'Staked');
    });
});