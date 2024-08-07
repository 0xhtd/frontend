import styles from "./Connect.module.scss";
import { EthereumProvider } from "@walletconnect/ethereum-provider";
const Connect = () => {
  const connect = () => {
    EthereumProvider.init({
      projectId: import.meta.env.VITE_APP_WALLETCONNECT_PROJECT_ID,
      showQrModal: true,
      qrModalOptions: {
        themeMode: "light",
        mobileWallets: [
          {
            id: "1",
            name: "WallyptoDev",
            links: {
              native: "wallypto://",
              universal: "https://link.wallypto.io/ios",
            },
          },
        ],
      },
      chains: [import.meta.env.VITE_APP_NETWORK_ID],
      rpcMap: {
        "295": "https://mainnet.hashio.io/api",
        "296": "https://testnet.hashio.io/api",
      },
      methods: ["personal_sign", "eth_sendTransaction", "eth_sign"],
      events: ["chainChanged", "accountsChanged"],
      metadata: {
        name: "My Dapp",
        description: "My Dapp description",
        url: "https://my-dapp.com",
        icons: ["https://my-dapp.com/logo.png"],
      },
    })
      .then((result) => {
        console.log(`init providerClient: end`);
        console.log(`onConnect: start`);
        result
          .connect()
          .then((a) => {
            console.log(`onConnect: success ${a}`);
          })
          .catch((err) => {
            console.log(`onConnect: failed: ${err}`);
          });
      })
      .catch((err) => {
        console.error(`init providerClient: error: ${err}`);
      });
  };
  return (
    <button className={styles.button} onClick={connect}>
      Connect Wallet
    </button>
  );
};

export default Connect;
