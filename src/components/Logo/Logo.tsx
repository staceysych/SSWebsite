import React from "react";

import logoLight from "images/logoLight.svg";
import styles from "./Logo.module.scss";

interface Props {
  style?: object;
}

const Logo: React.FC<Props> = ({ style }) => (
  <div className={styles.Logo} style={style}>
    <a href="/">
      <img src={logoLight} alt="logo" />
    </a>
  </div>
);

export default Logo;
