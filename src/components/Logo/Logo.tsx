import React from "react";

import logoLight from "images/logoLight.svg";
import logoDark from "images/logoDark.svg";
import styles from "./Logo.module.scss";

interface Props {
  color: string;
}

const Logo: React.FC<Props> = ({ color }) => (
  <div className={styles.Logo}>
    <a href="/">
      <img src={color === "light" ? logoLight : logoDark} alt="logo" />
    </a>
  </div>
);

export default Logo;
