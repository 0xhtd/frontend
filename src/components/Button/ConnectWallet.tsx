import styles from "./Connect.module.scss";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let window: any;
const ConnectWallet = () => {
  const connect = () => {
    if (window.ethereum) {
      console.log(window.ethereum);
    }
  };
  return (
    <button className={styles.button} onClick={connect}>
      Connects
    </button>
  );
};

export default ConnectWallet;
