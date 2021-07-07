/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import styles from "../NavBar/NavBar.module.scss";

interface Props {
  name: string;
}

const NavItem: React.FC<Props> = ({ name }) => (
  <li>
    <a className={styles.link} href="#">
      {name}
    </a>
  </li>
);

export default NavItem;
