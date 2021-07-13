import React, { Component } from "react";
import ReactDom from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { IAppState } from "./utils/interfaces";

import MainPage from "./components/MainPage";
import AboutPage from "./components/AboutPage/AboutPage";

import "./styles/main.scss";

class AppContainer extends Component<{}, IAppState> {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route component={MainPage} path="/" exact />
            <Route component={AboutPage} path="/about" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<AppContainer />, document.getElementById("app"));
