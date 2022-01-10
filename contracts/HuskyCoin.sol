// SPDX-License-Identifier: MIT
// Using OpenZeppelin Contracts v4.4.1 (token/ERC20/ERC20.sol)

pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Stakeable.sol";

contract HuskyCoin is ERC20, Stakeable {
    constructor() ERC20("HuskyCoin", "HUSKY") {
        uint maxSupply;
        uint totalSupply;
    }
}