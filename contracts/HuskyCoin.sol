// SPDX-License-Identifier: MIT
// Using OpenZeppelin Contracts v4.4.1 (token/ERC20/ERC20.sol)

pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Stakeable.sol";


/*           
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                                            .17                                        :1r                                                    
                                           rBQBQq                                    :BBBBB                                                   
                                          XBQBBBBB:                                 gBBBQBBB                                                  
                                         2BBB.  gQB7                               BBB.  vBQB                                                 
                                        iBBd     7BBX                            .BBB     .BQB                                                
                                        BQB       :BBg                          :QBg       :BB7                                               
                                       gBB         .BBQ                        :BBS         KBQ                                               
                                      .BBr          .BBR                      :BBs           BBS                                              
                                      5BB             BBb                    .QBr            qBB                                              
                                      BBg              BBJ..rr7vsYv7JYY77ri..BBr             .BBr                                             
                                     :BB:           :7UBBBBBBBQBQBBBBBBBQBBBBBBR1i.           BBB                                             
                                     jBB        :2BBBBBQBBBQBQBQBBBQBBBQBBBQBBBBBQBBBi        QBB                                             
                                     BBB     .UBQBBBBBQBQBQBQBBBBBg BBBBBBBBBBQBBBBBBBQB:     rBB.                                            
                                     BBB   .BBBBBBBBBBBBBBBQBBBBBBq BBBBBBBQBBBBBBBBBBBBBB7   :BBr                                            
                                     BBP  QBBBBBBBQBQBBBBBuqQBBBBBL BBQBBBBIPBBBBBBBBBBBBBBBi  BBK                                            
                                    :BB2.BBBBBBBBBQr:...:    .BQBB: QBBBB    .....:7BBBBBBBBBD.BBB                                            
                                    rBQBQBBBBBBBi              BBB: IBBd              1BBBBBBBQBQB                                            
                                    7QBBBBBBBBB       .      .:BBZbKPRBg.       .      :BBBBBQBBBB                                            
                                    iBBBBBQBBBr    iBB: v  QBUi.       .vgB7  DBB v:    QBBBBBBBBB                                            
                                    BQBQBBBv.     .BBBYiBQ:  iMBBBBBBBBBE:  BgBBB:BQ      :SBQBQBBr                                           
                                   BBBQBB:         RBBBBBB  BBBBBBBBQBBBQBY 7BBBBBBv         iQBQBQ:                                          
                                  vBBBBi            .i::B.  QBBBBQBBBBBBBB7  Bs ri.            1BBBB                                          
                                  QBBB.                bi    BBBQBBBBBBBBM    B                 iBBBD                                         
                                 QBBB.               .bi      BBBBBBBBBB2      Pr                iBBB.                                        
                                .BBB:               iJ         :BBBBBBM.        rL.               2BBB                                        
                                EQBB               ..             :B.             :.               BBBEv:                                     
                                BBB.                              .B                         SBBBBvB2.:vBB                                    
                               :BBB                           :qBBBBBBB1.                  .B2    M5     BB:.                                 
                               qBBr              r.         iBQBBBQBBBBBQB.         ::     gB  ::    ::: vI1BBv                               
                               BBB.               s7      rBBBBQBBBBBQBBBBBQ:      ji    vBBB  ::            .BZ                              
                               BBB                 BBBBBBBQBQBBBQBBBBBQBBBBBBBBBBBQB    BB        ....   :::   Bi                             
                          LRBBBBBBBBgi             .BBBBBBBBBBBBBBBBBBBBBQBBBBBBBQB    LB  ::    :::::::       BB                             
                       iBBZr.      .7BQs            :BBBBBBBj.   .2Bi.   .MBBBBBBB     QB  :::  i:::::::i      iB                             
                      BBr             .BB             BBBBB5  .   :B    .  BBBBBK      YB      :::::::::::     .B.                            
                     BB                 QB             .uBB  .... :B ..... :BBr        :B.      :::::::::      .B:                            
                    BB                   BB              BB ..:.. :B....:.  Bs          BL                      B:                            
                    Bi                   .Q.             Bj ...:...Q ..:..  Bb          iB                      B                             
  iujYJYsYsssYsYJv7bB                     BBrvsYJYJYJYs77BZ ....:.:5....... BBr7JLsYJYYrsBQrLvLvLvvvvvvvLvLvYvrSBuvLJYJYJYJYJYJYJYjJ.         
  iKI5252I25U5U5U2vBB               .     BRvI2525IIIIUU7QB. ......J...... iB1vU25I5I52Uv7L22II5II252525252S2IuY7suI2525II2I25UI2SIK.         
                    B.     Ur      :Bu  rQQ               BQ.  ....i....  iBZ                                                                 
                    BB    :BB      QBBQBBi                 RBE:.       .iBBs                                                                  
                     MBBQBBrPBSYSBBD                        .1BBBBBQBQBBBv                                                                    
                       ::.   .vIL:                              .:::::                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
*/                                                                                                                                                      


contract HuskyCoin is ERC20, Stakeable {

    address owner;
    uint maxSupply;

    constructor() ERC20("HuskyCoin", "HUSKY") {
        owner = msg.sender;
        maxSupply = 6969696969e18;
        mint(msg.sender, 69420e18);
    }

    // This mint function is only in place for testing and for ease of use between friends, this is a very centralized approach to tokenomics
    function mint(address recipient, uint amount) public {
        require(msg.sender == owner);
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

    // Stake functionality is an important concept to understand for crypto n00bs
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

    // In case some n00bs mistakenly send funds to this contract
    function reclaim() public {
        require(msg.sender == owner);
        uint256 _amt = address(this).balance;
        (bool sent, bytes memory data) = msg.sender.call{ value: _amt }("");
        require(sent, "Failed send");
    }

    // View function to display balances
    function getBalance() public view returns (uint256) {
        return balanceOf(msg.sender);
    }

    function getStakeholderIndex() public view returns (uint256) {
        uint256 index = stakes[msg.sender];
        return index -= 1;
    }

    // Empty payable fallback function allows users to make the mistake of sending funds to this contract
    // In this tutorial it seems better to let people make mistakes and learn from them than to flat out prevent them
    fallback() external payable {}
    receive() external payable {}
}
