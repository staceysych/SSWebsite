import React, { Component } from "react";
import ReactDom from "react-dom";

import { IAppState } from "./utils/interfaces";

import MainPage from "./components/MainPage";

import "./styles/main.scss";

class AppContainer extends Component<{}, IAppState> {
  render() {
    return (
      <>
        <MainPage />
      </>
    );
  }
}

ReactDom.render(<AppContainer />, document.getElementById("app"));
