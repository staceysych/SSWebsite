import React from "react";

import redCircle from "images/redCircle.png";
import myPhoto from "images/myPhoto.png";
import vector from "images/vector.png";

import styles from "./AboutPage.module.scss";
import Logo from "../Logo";
import Header from "../Header";
import CrossIcon from "../CrossIcon";

const logoStyles = {
  top: "20px",
  bottom: "auto",
  right: "20px",
  left: "auto",
};

const headerStyles = {
  top: "10px",
  bottom: "auto",
  right: "120px",
  left: "auto",
};

const AboutPage: React.FC = () => (
  <div className={styles.AboutPage}>
    <Header style={headerStyles} />
    <div className={styles.redCircle}>
      <img src={redCircle} alt="red circle" />
    </div>
    <div className={styles.me}>
      <img src={myPhoto} alt="me" />
    </div>
    <div className={styles.vector}>
      <img src={vector} alt="vector" />
    </div>
    <Logo style={logoStyles} />
    <div className={styles.description}>
      <h1 className={styles.header}>Meet Stacey</h1>
      <span>
        Professional front-end developer with 2 years of experience. She is smart, easy-going, and friendly. She wants
        to develop applications and websites that can change the world.
      </span>
    </div>
    <CrossIcon style={{ top: "140px", right: "585px" }} />
    <CrossIcon style={{ top: "80px", right: "685px" }} />
  </div>
);

export default AboutPage;
