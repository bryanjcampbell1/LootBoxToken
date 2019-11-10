import LootBox from "./contracts/LootBox.json";

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
  contracts: [LootBox],
  events: {
    LootBox: ["Transfer"],
  },
  polls: {
    accounts: 3000,
  },
};

export default options;
