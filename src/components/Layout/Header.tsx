import Connect from "../Button/Connect";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <img className={styles.logo} src="../images/logo.png" />
        <Connect />
      </div>
    </header>
  );
};

export default Header;
