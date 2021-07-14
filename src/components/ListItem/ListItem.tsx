import React from "react";

import styles from "../List/List.module.scss";

interface Props {
  name: string;
  color?: string;
}

const ListItem: React.FC<Props> = ({ name, color }) => (
  <li className={styles.link} style={color === "red" ? { color: "#f80040" } : {}}>
    {name}
  </li>
);

export default ListItem;
