import Connect from "../Button/Connect";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <img className={styles.logo} src="../public/logo.png"/>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>menu2</li>
          </ul>
        </nav>
        <Connect />
      </div>
    </header>
  );
};

export default Header;
