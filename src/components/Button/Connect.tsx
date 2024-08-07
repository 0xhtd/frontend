import { DappMetadata, HashConnect } from "hashconnect";
import { LedgerId } from "@hashgraph/sdk";
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
  useEffect(() => {
    if (hashconnect == undefined) {
      return;
    }
    if (!connected) {
      hashconnect.pairingEvent.on((newPairing) => {
        const pairing = JSON.parse(JSON.stringify(newPairing));
        console.log(pairing.accountIds);
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
        console.log(hashconnect.connectedAccountIds);
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
  return (
    <button className={styles.button} onClick={connect}>
      Connect Wallet
    </button>
  );
};

export default Connect;
