

const HuskyCoin = artifacts.require("HuskyCoin");
const { assert } = require("chai");
const { contract } = require("hardhat");
const truffleAssert = require('truffle-assertions');

contract("HuskyCoin", async accounts => {
    it("Staking 100x2", async () => {
        const huskyCoin = await HuskyCoin.deployed();

        // stake 100 tokens twice to see if stake function works and burn is executed
        let owner = accounts[0];
        let stakeAmount = 100;
        await huskyCoin.mint(accounts[1], 1000);
        balance = await huskyCoin.balanceOf(owner);

        // call stake function
        stakeID = await huskyCoin.stake(stakeAmount, { from: owner });
        // assert event was emitted
        truffleAssert.eventEmitted(
            stakeID,
            "Staked",
            (ev) => {
                assert.equal(ev.amount, stakeAmount, "Amount staked did not match");
                assert.equal(ev.index, 1, "Incorrect stake index");
                return true;
            },
            "Stake event did not trigger"
        );
    });

    it("should reject staking more than sender balance", async() => {
        // Stake more than msg.sender balance
        const huskyCoin = await HuskyCoin.deployed();

        try {
            await huskyCoin.stake(100000, { from: accounts[2] });
        } catch(error) {
            assert.equal(error.reason, "HuskyCoin: You don't have enough tokens to stake that amount");
        }
    });
});