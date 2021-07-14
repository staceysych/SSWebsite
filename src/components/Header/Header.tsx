import React from "react";

import NavBar from "../NavBar";
import NavItem from "../NavItem";

interface Props {
  style?: object;
}

const Header: React.FC<Props> = ({ style }) => (
  <NavBar style={style}>
    <NavItem name="about" path="about" />
    <NavItem name="works" path="works" />
    <NavItem name="feedbacks" path="feedbacks" />
    <NavItem name="contacts" path="contacts" />
  </NavBar>
);

export default Header;
