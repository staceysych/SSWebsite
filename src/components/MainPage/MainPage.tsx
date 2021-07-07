import React from "react";

import redCircle from "images/redCircle.png";
import darkCircle from "images/darkCircle.png";

import CrossIcon from "../CrossIcon";
import NavBar from "../NavBar";
import NavItem from "../NavItem";
import Logo from "../Logo";
import Copyright from "../Copyright";

import styles from "./MainPage.module.scss";

const MainPage: React.FC = () => (
  <div className={styles.MainPage}>
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
    <NavBar>
      <NavItem name="about" />
      <NavItem name="works" />
      <NavItem name="feedbacks" />
      <NavItem name="contacts" />
    </NavBar>
    <div className={styles.dottedLine} />
    <Logo color="light" />
    <h2 className={styles.subheader}>Full stack developer</h2>
    <Copyright />
  </div>
);

export default MainPage;
