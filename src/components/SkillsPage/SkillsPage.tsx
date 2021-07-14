import React from "react";

import darkCircle from "images/darkCircle.png";

import Header from "../Header";
import Logo from "../Logo";
import List from "../List";
import ListItem from "../ListItem";

import styles from "./SkillsPage.module.scss";
import CrossIcon from "../CrossIcon";

const logoStyles = {
  top: "20px",
  bottom: "auto",
  left: "20px",
};

const headerStyles = {
  top: "10px",
  bottom: "auto",
  left: "150px",
};

const SkillsPage: React.FC = () => (
  <div className={styles.SkillsPage}>
    <Header style={headerStyles} />
    <Logo style={logoStyles} />
    <div className={styles.darkCircle}>
      <img src={darkCircle} alt="dark circle" />
      <h1 className={styles.header}>Skills</h1>
    </div>
    <div
      className={styles.circle}
      style={{ top: "95px", left: "30px", zIndex: 9, boxShadow: "4px 4px 8px 0 rgba(34, 60, 80, 0.2)" }}
    >
      <h3 className={styles.subheader}>Languages:</h3>
      <List>
        <ListItem name="JavaScript (ES6)" />
        <ListItem name="TypeScript" />
      </List>
    </div>
    <div className={styles.circle} style={{ top: "165px", left: "235px" }}>
      <h3 className={styles.subheader} style={{ width: "200px", textAlign: "center" }}>
        Technologies:
      </h3>
      <List style={{ top: "55%", left: "55%" }}>
        <ListItem name="React" />
        <ListItem name="HTML" />
        <ListItem name="CSS/SCSS" />
        <ListItem name="NodeJS" />
      </List>
    </div>
    <div
      className={styles.circle}
      style={{
        top: "295px",
        left: "55px",
        zIndex: 10,
        background: "#ffff",
        boxShadow: "4px -3px 8px 0 rgba(34, 60, 80, 0.2)",
      }}
    >
      <h3 className={styles.subheader} style={{ color: "#f80040" }}>
        Libraries:
      </h3>
      <List style={{ top: "55%", left: "55%" }}>
        <ListItem name="Redux" color="red" />
        <ListItem name="Jest" color="red" />
        <ListItem name="Bootstrap" color="red" />
        <ListItem name="Ant Design" color="red" />
      </List>
    </div>
    <div className={styles.skillsSet}>
      <div className={styles.skill}>
        <h3>Tools:</h3>
        <ul>
          <ListItem name="Git" />
          <ListItem name="Webpack" />
          <ListItem name="Eslint" />
          <ListItem name="Swagger" />
        </ul>
      </div>

      <div className={styles.skill}>
        <h3>Databases:</h3>
        <ul>
          <ListItem name="MondoDb" />
          <ListItem name="PostgreSQL" />
        </ul>
      </div>

      <div className={styles.skill}>
        <h3>Workflows:</h3>
        <ul>
          <ListItem name="VS Code" />
          <ListItem name="GitHub" />
          <ListItem name="Trello" />
        </ul>
      </div>
    </div>
    <CrossIcon style={{ top: "140px", right: "685px" }} />
    <CrossIcon style={{ top: "80px", right: "585px" }} />
  </div>
);

export default SkillsPage;
