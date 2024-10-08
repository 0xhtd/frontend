import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.scss";
const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
