// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

/* 
 * @notice This Stakeable contract is meant to be inherited by an ERC20 compliant contract to provide staking functionality
 */
contract Stakeable {

    uint256 internal rewardPerHour = 100;
    
    // Stake struct represents the way stakes are tracked
    // @param claimable provides a quick and simple way to view accumulated rewards
    struct Stake {
        address user;
        uint256 amount;
        uint256 timeStamp;
        uint256 claimable;
    }

    struct Stakeholder {
        address user;
        Stake[] address_stakes;
    }

    // @notice StakingSummary is used to contain all stakes by a given account 
    struct StakingSummary {
        uint256 originalStake;
        uint256 totalAmount;
        Stake[] stakes;
    }

    Stakeholder[] internal stakeholders;

    // @param stakes mapping stores user indexes
    mapping(address => uint256) internal stakes;

    event Staked(address indexed user, uint256 amount, uint256 index, uint256 timestamp);
    event Unstaked(address indexed user, uint256 amount, uint256 index, uint256 timestamp);
    
    constructor() {
        stakeholders.push();
    }

    function _addStakeholder(address staker) internal returns (uint256) {
        // add an empty slot for the new stakeholder
        stakeholders.push();
        // identify index just created
        uint256 userIndex = stakeholders.length - 1;
        // set user address struct attribute
        stakeholders[userIndex].user = staker;
        // add staker index to stakes mapping
        stakes[staker] = userIndex;
        return userIndex;
    }

    function _stake(uint256 _amount) internal {
        require(_amount > 0, "Amount provided cannot be 0");
        uint256 index = stakes[msg.sender];
        uint256 currentTime = block.timestamp;
        if (index == 0) {
            index = _addStakeholder(msg.sender);
        }
        stakeholders[index].address_stakes.push(Stake(msg.sender, _amount, currentTime, 0));
        emit Staked(msg.sender, _amount, index, currentTime);
    }
    
    // Internal function to calculate the staking reward based on the time staked
    function calculateStakeReward(Stake memory _current_stake) internal view returns (uint256) {
        return (((block.timestamp - _current_stake.timeStamp) / 10 seconds) * _current_stake.amount) / rewardPerHour;
    }

    // Internal function to complete the logic of withdrawing staked funds, including clearing deleted array values and timestamps
    function _withdrawStake(uint _amount, uint _index) internal returns (uint) {
        // Grab index from the stakes mapping
        uint userIndex = stakes[msg.sender];
        Stake memory currentStake = stakeholders[userIndex].address_stakes[_index];
        require(currentStake.amount >= _amount, "Cannot unstake more than your staked balance");
        
        uint currentTime = block.timestamp;
        uint reward = calculateStakeReward(currentStake);
        currentStake.amount = currentStake.amount - _amount;
        
        // If stake is empty, remove it
        if (currentStake.amount == 0) {
            delete stakeholders[userIndex].address_stakes[_index];
        } else {
            // If stake is not empty, update its value
            stakeholders[userIndex].address_stakes[_index].amount = currentStake.amount;
            // Reset timer of stake
            stakeholders[userIndex].address_stakes[_index].timeStamp = block.timestamp;
        }

        emit Unstaked(msg.sender, _amount, _index, currentTime);

        return _amount + reward;
    }

    function hasStake(address _staker) public view returns (StakingSummary memory) {
        uint totalStakeAmount;

        uint originalAmount;

        StakingSummary memory summary = StakingSummary(0, 0, stakeholders[stakes[_staker]].address_stakes);
        for (uint i = 0; i < summary.stakes.length; i += 1) {
            // Iterate through all stakes for this address, add up staked originalAmounts
            originalAmount += summary.stakes[i].amount;
            uint availableReward = calculateStakeReward(summary.stakes[i]);
            // Update claimable amount after having executed calculateStakeReward()
            summary.stakes[i].claimable = availableReward;
            // Continuously add staked amounts to the variable declared outside of this for loop's scope
            totalStakeAmount = totalStakeAmount + summary.stakes[i].amount + availableReward;
        }

        summary.originalStake = originalAmount;
        summary.totalAmount = totalStakeAmount;
        return summary;
    }
}
