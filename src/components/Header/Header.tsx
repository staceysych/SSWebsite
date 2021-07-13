import React from "react";

import NavBar from "../NavBar";
import NavItem from "../NavItem";

const Header: React.FC = () => (
  <NavBar>
    <NavItem name="about" path="about" />
    <NavItem name="works" path="works" />
    <NavItem name="feedbacks" path="feedbacks" />
    <NavItem name="contacts" path="contacts" />
  </NavBar>
);

export default Header;
