import React from "react";

import redCircle from "images/redCircle.png";
import darkCircle from "images/darkCircle.png";

import CrossIcon from "../CrossIcon";

import styles from "./MainPage.module.scss";

const MainPage: React.FC = () => (
  <div className={styles.MainPage}>
    <h1 className={styles.header}>Stacey Sych</h1>
    <CrossIcon style={{ top: "100px", right: "450px" }} />
    <CrossIcon style={{ top: "80px", right: "500px" }} />
    <CrossIcon style={{ top: "320px", left: "120px" }} />
    <div className={styles.redCircle}>
      <img src={redCircle} alt="red circle" />
    </div>
    <div className={styles.darkCircle}>
      <img src={darkCircle} alt="dark circle" />
    </div>
  </div>
);

export default MainPage;
