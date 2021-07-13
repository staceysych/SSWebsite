/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { NavLink } from "react-router-dom";

import styles from "../NavBar/NavBar.module.scss";

interface Props {
  name: string;
  path?: string;
}

const NavItem: React.FC<Props> = ({ name, path }) => (
  <NavLink className={styles.link} to={path} exact>
    {name}
  </NavLink>
);

export default NavItem;
