pragma solidity ^0.5.0;
 
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Burnable.sol";

contract LootBox is ERC721Full, Ownable, ERC721Burnable{
  
  uint public numberOfTickets; 
  uint price = 1 ; //1 ETH? 
  address public enigmaAddress;

  //as part of the constructor? --> need to mint 108 tokens
  constructor(address _enigma) ERC721Full("LootBox", "LBX") public {
    enigmaAddress = _enigma;

  }

  function mint() public payable onlyOwner{
    require(msg.value == price); 

    //increment token id
    numberOfTickets = numberOfTickets + 1;

    //tokenId = ticket number
     _mint(msg.sender, numberOfTickets);
  }
    
    
  
  function openLootBox(uint256 tokenId, uint256 payoutAmount, address payable tokenOwner) public{

    //require only enigma
    require(msg.sender == enigmaAddress);

    burn(tokenId);

    tokenOwner.transfer(payoutAmount);

  }
    
//options to white list the secure smart contract's address: deploy egnima contract first, pass the egnima contract's address to ethereum contract    
}
