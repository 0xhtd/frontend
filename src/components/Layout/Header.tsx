import Connect from "../Button/Connect";
import ConnectWallet from "../Button/ConnectWallet";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>Logo</div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>menu2</li>
          </ul>
        </nav>
        <Connect />
        <ConnectWallet />
      </div>
    </header>
  );
};

export default Header;
