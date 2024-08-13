import { DappMetadata, HashConnect } from "hashconnect";
import {
  LedgerId,
  AccountId,
  ContractId,
  ContractExecuteTransaction,
  ContractFunctionParameters,
  Hbar,
} from "@hashgraph/sdk";
import styles from "./Connect.module.scss";
import { useEffect, useState } from "react";
const Connect = () => {
  const appMetadata: DappMetadata = {
    name: import.meta.env.VITE_APP_NAME,
    description: "hedera toilet dapp",
    icons: [],
    url: "",
  };
  const [hashconnect, setHashconnect] = useState<HashConnect>();
  const [connected, setConnected] = useState<boolean>(false);
  const [openedPairingModal, setOpenedPairingModal] = useState<boolean>(false);
  const [accountId, setAccountId] = useState<AccountId>();
  useEffect(() => {
    if (hashconnect == undefined) {
      return;
    }
    if (!connected) {
      hashconnect.pairingEvent.on((newPairing) => {
        const pairing = JSON.parse(JSON.stringify(newPairing));
        setAccountId(pairing.accountIds[0]);
        //   pairingData = newPairing;
      });

      hashconnect.disconnectionEvent.on(() => {
        setConnected(false);
        setOpenedPairingModal(false);
      });

      hashconnect.connectionStatusChangeEvent.on((connectionStatus) => {
        console.log(`connectionStatus ${connectionStatus}`);
        //   state = connectionStatus;
      });

      hashconnect
        .init()
        .then(() => {
          setConnected(true);
        })
        .catch((reason) => {
          setConnected(false);
          console.log(`init error: ${reason}`);
        });
      return;
    }
    if (openedPairingModal) {
      return;
    }
    hashconnect
      .openPairingModal()
      .then(() => {
        setOpenedPairingModal(true);
      })
      .catch((reason) => {
        setOpenedPairingModal(false);
        console.log(`open error: ${reason}`);
      });
  }, [hashconnect, connected, openedPairingModal]);

  //   let state: HashConnectConnectionState =
  //     HashConnectConnectionState.Disconnected;
  //   let pairingData: SessionData;
  const connect = async () => {
    if (hashconnect != undefined) {
      hashconnect.disconnect();
    }
    setHashconnect(
      new HashConnect(
        LedgerId.TESTNET,
        import.meta.env.VITE_PROJECT_ID,
        appMetadata,
        true
      )
    );
  };
  const sendTransaction = async () => {
    if (hashconnect == undefined || accountId == undefined) {
      console.log(hashconnect);
      console.log(accountId);
      return;
    }
    const metadata =
      "ipfs://bafyreie3ichmqul4xa7e6xcy34tylbuq2vf3gnjf7c55trg3b6xyjr4bku/metadata.json";

    const contractId: ContractId = ContractId.fromString("0.0.4673808");

    // Mint NFT
    const mintToken = new ContractExecuteTransaction()
      .setContractId(contractId)
      .setGas(4000000)
      .setPayableAmount(new Hbar(50))
      // .setMaxTransactionFee(new Hbar(20)) //Use when HBAR is under 10 cents
      .setFunction(
        "registerToilet",
        new ContractFunctionParameters()
          .addString("test") // Token address
          .addString("test")
          .addString("memo")
          .addInt64(2)
          .addString(metadata)
      );
    const mintTokenTxawait = await hashconnect.sendTransaction(
      accountId,
      mintToken
    );
    console.log(mintTokenTxawait);
  };

  return (
    <>
      <button className={styles.button} onClick={connect}>
        Connect Wallet
      </button>
      <button className={styles.button} onClick={sendTransaction}>
        Send Transaction
      </button>
    </>
  );
};

export default Connect;
