import LootBox from "./contracts/LootBox.json"
import Web3 from "web3"

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:9545"),
  },
  contracts: [LootBox],
  polls: {
    accounts: 1000,
  },
}

export default options
