import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import { DrizzleContext } from "@drizzle/react-plugin";
import logo from "./logo.png";
import { utils } from 'web3'

const { AccountData, ContractData, ContractForm } = newContextComponents;

const myRender = data => (
  <>
    Value=<b>{data}</b>
  </>
);

        //{console.log(drizzle)}
export default () => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const { drizzle, drizzleState, initialized } = drizzleContext;
      if (!initialized) {
        return "Loading...";
      }

      const { accounts } = drizzleState;

      return (
        <div className="App">
          <div>
            <img src={logo} alt="drizzle-logo" />
            <h1>Lootbox UI</h1>
            <p>
              Get your limited lucky lootboxes today
            </p>
          </div>

          <div className="section">
            <h2>Active Account</h2>
            <AccountData
              drizzle={drizzle}
              drizzleState={drizzleState}
              accountIndex={0}
              units="ether"
              precision={3}
              render={({ address, balance, units }) => (
                <div>
                  <div>Your Address: <span style={{ color: "red" }}>{address}</span></div>
                  <div>Your Ether: <span style={{ color: "red" }}>{balance}</span> {units}</div>
                </div>
              )}
            />
          </div>

          <div className="section">
            <h2>LootBoxToken</h2>
            <p>
              Get your lootboxes today
            </p>
            <p>
              <strong>Total Minted: </strong>
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="LootBox"
                method="_numberOfTickets"
              />{" "}
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="LootBox"
                method="symbol"
                hideIndicator
              />
            </p>
            <p>
              <strong>Max Cap: </strong>
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="LootBox"
                method="_maxTickets"
              />{" "}
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="LootBox"
                method="symbol"
                hideIndicator
              />
            </p>
            <p>
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="LootBox"
                method="_price"
                render={(priceInWei) => (
                  <span>
                    <strong>Price per ticket: </strong> {utils.fromWei(priceInWei, 'ether')} ETH
                  </span>
                )}
              />
            </p>
            <h3>Mint Lootbox</h3>
            <ContractForm
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="LootBox"
              method="mint"
              sendArgs={
                {
                  value: drizzleState.contracts.LootBox._price['0x0'] ? 
                    drizzleState.contracts.LootBox._price['0x0'].value :
                    1e18,
                  gas: 2e6
                }
              }
            />
            <h3>Open Lootbox</h3>
            @ ENIGMA PEEPZ, INTERACT WITH ENIGMA HERE USING THE JS LIB
            <ContractForm
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="LootBox"
              method="openLootBox"
              labels={["LBX id"]}
            />
            <h3>Your First Box Id</h3>
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="LootBox"
              method="_idTracker"
              methodArgs={[accounts[0], 0]}
              render={displayData => (
                <span>{displayData ? displayData : 'None, buy one first!'}</span>
              )}
            />
            <h3>Total Boxes</h3>
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="LootBox"
              method="balanceOf"
              methodArgs={[accounts[0]]}
              render={displayData => (
                <span>{displayData ? displayData : 'None, buy one first!'}</span>
              )}
            />
          </div>
        </div>
      );
    }}
  </DrizzleContext.Consumer>
);
