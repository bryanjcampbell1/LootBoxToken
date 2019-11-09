pragma solidity ^0.5.0;
 
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Burnable.sol";

contract LootBox is ERC721Full, Ownable, ERC721Burnable{
  
  uint public numberOfTickets; 
  uint price = 1 ; //1 ETH? 

  //as part of the constructor? --> need to mint 108 tokens
  constructor() ERC721Full("LootBox", "LBX") public {




  }

  function mint(address to, uint256 tokenId) public payable {
    require(msg.value == price); 

    //increment token id
    numberOfTickets = numberOfTickets + 1;

    //tokenId = ticket number
     _mint(to, numberOfTickets);
  }
    
    
  
  // This function gets called from enigma
  // Problem: the burn() function requires _isApprovedOrOwner(_msgSender(), tokenId) but enigma is caling the function 

  //1) Have the front end trigger Eth and enigma contract calls
  function openLootBox(uint256 tokenId) public{
     burn(tokenId);

  }
    
// options to white list the secure smart contract's address: deploy egnima contract first, pass the egnima contract's address to ethereum contract    
}
