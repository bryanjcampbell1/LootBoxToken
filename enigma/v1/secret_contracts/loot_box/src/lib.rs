#![no_std]

extern crate eng_wasm;
extern crate eng_wasm_derive;
extern crate rustc_hex;

use eng_wasm::*;
use eng_wasm_derive::pub_interface;
use eng_wasm_derive::eth_contract;

use eng_wasm::String;
use rustc_hex::ToHex;


#[eth_contract("ABI.json")]
struct EthContract;

#[pub_interface]
pub trait ContractInterface{

    fn burnToken(tokenID: U256,totalETH: U256, eth_user_addr: H160, eth_contact_addr: H160);
}

pub struct Contract;

impl ContractInterface for Contract {

    
    fn burnToken(tokenID: U256,totalETH: U256, eth_user_addr: H160, eth_contact_addr: H160) {


    	//require( msg.sender == owner of token we are burning)

    	//need to call contract to learn the following
    	//i) what is the contract balance
    	//ii) who owns the token


        let payoutAmount: u256 = Rand::gen(); //need to generate a Random decimal not u8

        let c = EthContract::new(eth_contact_addr);

        //solidity 
        //openLootBox(uint256 tokenId, uint256 payoutAmount, address payable tokenOwner)

        c.openLootBox(tokenId, payoutAmount);

    }

}