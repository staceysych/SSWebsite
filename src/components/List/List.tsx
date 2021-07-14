import React from "react";

import styles from "./List.module.scss";

interface Props {
  children: React.ReactNode;
  style?: object;
}

const List: React.FC<Props> = ({ children, style }) => (
  <ul className={styles.List} style={style}>
    {children}
  </ul>
);

export default List;
