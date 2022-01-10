// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

/* 
 * @notice This Stakeable contract is meant to be inherited by an ERC20 compliant contract to provide staking functionality
 */
contract Stakeable {
    constructor() {
        stakeholders.push();
    }

    struct Stake {
        address user;
        uint256 amount;
        uint256 timeStamp;
    }

    struct Stakeholder {
        address user;
        Stake[] address_stakes;
    }

    Stakeholder[] internal stakeholders;

    mapping(address => uint256) internal stakes;

    event Staked(address indexed user, uint256 amount, uint256 index, uint256 timestamp);
    
    function _addStakeholder(address staker) internal returns (uint256) {
        // add an empty slot for the new stakeholder
        stakeholders.push();
        // identify index
        uint256 userIndex = stakeholders.length - 1;
        // set user address struct attribute
        stakeholders[userIndex].user = staker;
        // add staker index to stakes mapping
        stakes[staker] = userIndex;
        return userIndex;
    }

    function _stake(uint256 _amount) internal {
        require(_amount > 0, "Amount provided cannot be == 0");
        uint256 index = stakes[msg.sender];
        uint256 currentTime = block.timestamp;
        if (index == 0) {
            index = _addStakeholder(msg.sender);
        }
        stakeholders[index].address_stakes.push(Stake(msg.sender, _amount, currentTime));
        emit Staked(msg.sender, _amount, index, currentTime);
    }
}