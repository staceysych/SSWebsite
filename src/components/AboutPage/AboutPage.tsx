import React from "react";

import redCircle from "images/redCircle.png";
import me from "images/me.jpeg";

import styles from "./AboutPage.module.scss";

const AboutPage: React.FC = () => (
  <div className={styles.AboutPage}>
    <div className={styles.redCircle}>
      <img src={redCircle} alt="red circle" />
    </div>
    <div className={styles.me}>
      <img src={me} alt="me" />
    </div>
    About
  </div>
);

export default AboutPage;
