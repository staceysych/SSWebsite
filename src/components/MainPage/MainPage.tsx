import React from "react";

import redCircle from "images/redCircle.png";
import darkCircle from "images/darkCircle.png";

import CrossIcon from "../CrossIcon";
import Logo from "../Logo";

import styles from "./MainPage.module.scss";

import Header from "../Header";

const MainPage: React.FC = () => (
  <div>
    <h1 className={styles.header}>Stacey Sych</h1>
    <CrossIcon style={{ top: "100px", right: "450px" }} />
    <CrossIcon style={{ top: "80px", right: "500px" }} />
    <CrossIcon style={{ top: "320px", left: "100px" }} />
    <div className={styles.redCircle}>
      <img src={redCircle} alt="red circle" />
    </div>
    <div className={styles.darkCircle}>
      <img src={darkCircle} alt="dark circle" />
    </div>
    <Header />
    <div className={styles.dottedLine} />
    <Logo />
    <h2 className={styles.subheader}>Full stack developer</h2>
  </div>
);

export default MainPage;
