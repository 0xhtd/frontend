import {
  DappMetadata,
  HashConnect,
  HashConnectConnectionState,
} from "hashconnect";
import styles from "./Button.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setConnect, setAccountId, setState } from "../../store/slices/wallet";
import { LedgerId } from "@hashgraph/sdk";

const Connect = () => {
  const hashconnect = useSelector((state: RootState) => state.wallet.connect);
  const state = useSelector((state: RootState) => state.wallet.state);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (hashconnect === undefined) {
      return;
    }
    if (state !== HashConnectConnectionState.Disconnected) {
      return;
    }
    hashconnect.pairingEvent.on((newPairing) => {
      const pairing = JSON.parse(JSON.stringify(newPairing));
      dispatch(setAccountId(pairing.accountIds[0]));
    });

    hashconnect.disconnectionEvent.on(() => {
      dispatch(setState(HashConnectConnectionState.Disconnected));
    });

    hashconnect.connectionStatusChangeEvent.on((connectionStatus) => {
      dispatch(setState(connectionStatus));
    });
    hashconnect
      .init()
      .then(() => {
        if (state === HashConnectConnectionState.Disconnected) {
          hashconnect
            .openPairingModal()
            .then(() => {
              dispatch(setState(HashConnectConnectionState.Connected));
            })
            .catch((reason) => {
              console.log(`open error: ${reason}`);
            });
        }
      })
      .catch((reason) => {
        console.log(`init error: ${reason}`);
      });
  }, [dispatch, hashconnect, state]);

  const connect = async () => {
    if (state == HashConnectConnectionState.Connected) {
      if (hashconnect !== undefined) {
        console.log("ASdasdasd");
      }
      await hashconnect?.disconnect();
      dispatch(setState(HashConnectConnectionState.Disconnected));
      return;
    }
    const appMetadata: DappMetadata = {
      name: import.meta.env.VITE_APP_NAME,
      description: "hedera toilet dapp",
      icons: [],
      url: "",
    };
    dispatch(
      setConnect(
        new HashConnect(
          LedgerId.TESTNET,
          import.meta.env.VITE_PROJECT_ID,
          appMetadata,
          true
        )
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
