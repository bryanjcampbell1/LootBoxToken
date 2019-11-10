#![no_std]

extern crate eng_wasm;
extern crate eng_wasm_derive;
extern crate rustc_hex;

use eng_wasm::*;
use eng_wasm_derive::pub_interface;
use eng_wasm_derive::eth_contract;

#[eth_contract("ABI.json")]
struct EthContract;

#[pub_interface]
pub trait ContractInterface{

    fn burnToken(tokenID: U256,totalETH: U256, eth_user_addr: H160, eth_contact_addr: H160);
}

pub struct Contract;

//right now hard code 20 prizes
let prizes = vec![0.04, 0.06, 0.04, 0.06, 0.04,0.06, 0.04, 0.06, 0.03, 0.07,0.03, 0.07, 0.0, 0.1, 0.0, 0.1, 0.0, 0.0, 0.0, 0.0,0.2, 0.0, 0.0, 0.0, 0.2];

impl ContractInterface for Contract {

    //create a vector to hold ticket payouts 
    
    fn burnToken(tokenID: U256,totalETH: U256, eth_user_addr: H160, eth_contact_addr: H160) {

    	let c = EthContract::new(&eth_contact_addr.to_string());
    	

        let result: U256 = Rand::gen();
        let prize_index = result % prizes.len(); 

        let payout_amount: &i32 = &v[prize_index];

        //use assert_eq!();
        /*
        let token_owner = c.ownerOf(tokenID); //?

        if &token_owner.to_string() == &eth_user_addr.to_string() {
            c.openLootBox(tokenID, payout_amount);
        }
        */

        c.openLootBox(tokenID, payout_amount);



    }

}