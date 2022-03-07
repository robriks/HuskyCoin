// SPDX-License-Identifier: MIT
// Using OpenZeppelin Contracts v4.4.1 (token/ERC20/ERC20.sol)

pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Stakeable.sol";

contract HuskyCoin is ERC20, Stakeable {

    address owner;
    uint maxSupply;

    constructor() ERC20("HuskyCoin", "HUSKY") {
        // owner = msg.sender;
        maxSupply = 6969696969e18;
        mint(msg.sender, 69420e18);
    }

    // This mint function is only in place for testing and for ease of use between friends, this is a very centralized approach to tokenomics
    function mint(address recipient, uint amount) public {
        // require(msg.sender == owner); // uncomment this when deploying to public testnets/mainnets
        _mint(recipient, amount);
    }

    // This purchase function echoes the nasty ICO craze of 2017, but allows crypto n00bs to go through the motions of common DeFi processes
    function purchase() public payable {
        require(msg.value > 0, "Purchase amount must be > 0");
        uint currentSupply = totalSupply();
        uint unmintedSupply = maxSupply - currentSupply;
        require(msg.value < unmintedSupply, "Cannot purchase more than remaining unminted supply of HUSKY!");
        _mint(msg.sender, msg.value);
    }

    // This dispense function powers the HuskyCoin faucet which will be the source of HuskyCoins until max supply is reached
    function dispense() public payable {
        require(balanceOf(msg.sender) == 0, "You already have HuskyCoins! Go stake them or send to your friends.");
        uint currentSupply = totalSupply();
        uint unmintedSupply = maxSupply - currentSupply;
        require(unmintedSupply > 69420e18, "Maximum supply of HuskyCoins has been met. Contact hornosexual.eth and ask him to send you some instead");
        _mint(msg.sender, 69420e18);
    }

    // Totally unnecessary stake functionality but is an important concept to understand for crypto n00bs
    // It's more gas intensive to transfer tokens into a contract and then transfer them out than it is to burn and re-mint on withdrawal so the cheaper option is chosen here
    function stake(uint256 _amount) public {
        require(_amount < balanceOf(msg.sender), "You don't have enough tokens to stake that amount");
        _stake(_amount);
        _burn(msg.sender, _amount);
    }

    // Withdrawal function
    function withdraw(uint256 amount, uint256 stakeIndex) public {
        uint256 amountToMint = _withdrawStake(amount, stakeIndex);
        _mint(msg.sender, amountToMint);
    }

    // View function to display balances
    function getBalance() public view returns (uint256) {
        return balanceOf(msg.sender);
    }

    function getStakeholderIndex() public view returns (uint256) {
        uint256 index = stakes[msg.sender];
        return index -= 1;
    }
}
