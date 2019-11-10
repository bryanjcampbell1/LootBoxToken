import SimpleStorage from "./contracts/SimpleStorage.json";
import ComplexStorage from "./contracts/ComplexStorage.json";
import TutorialToken from "./contracts/TutorialToken.json";
import LootBox from "./contracts_/LootBox.json";

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
  contracts: [SimpleStorage, ComplexStorage, TutorialToken, LootBox],
  events: {
    SimpleStorage: ["StorageSet"],
    LootBox: ["Transfer"],
  },
  polls: {
    accounts: 10000,
  },
};

export default options;
