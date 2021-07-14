import React from "react";

import styles from "./NavBar.module.scss";

interface Props {
  children: React.ReactNode;
  style?: object;
}

const NavBar: React.FC<Props> = ({ children, style }) => (
  <nav className={styles.wrapper} style={style}>
    <ul className={styles.nav}>{children}</ul>
  </nav>
);

export default NavBar;
