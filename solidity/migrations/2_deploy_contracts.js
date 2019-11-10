const LootBoxToken = artifacts.require("LootBox");

module.exports = function(deployer) {
  deployer.deploy(LootBoxToken, 10);
};
