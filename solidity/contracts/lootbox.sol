pragma solidity ^0.5.0;
 
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Burnable.sol";

contract LootBox is ERC721Full, Ownable, ERC721Burnable{
  
  uint public _numberOfTickets;
  uint public _maxTickets; 
  uint public _price = 1 ether; //1 ETH? 
  address public _enigmaAddress;

  //as part of the constructor? --> need to mint 108 tokens
  constructor(uint maxTickets) ERC721Full("LootBox", "LBX") public {
    _maxTickets = maxTickets;
  }

  function connectEnigma(address enigma) public onlyOwner {
    _enigmaAddress = enigma;
  }

  function mint() public payable {
    require(msg.value == _price); 
    require(_numberOfTickets < _maxTickets);

    //increment token id
    _numberOfTickets = _numberOfTickets + 1;

    //tokenId = ticket number
     _safeMint(msg.sender, _numberOfTickets);
  }
  
  function openLootBox(uint256 tokenId, uint256 payoutAmount) public {

    //require only enigma
    require(msg.sender == _enigmaAddress);

    // ugly necessary payable cast... sigh
    address payable currentOwner = address(uint160(ownerOf(tokenId)));

    // owner is reset to burn address after burn
    _burn(tokenId);

    currentOwner.transfer(payoutAmount);
  }
    
}
