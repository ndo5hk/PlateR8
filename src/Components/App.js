import React, { Component } from "react";
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  browserHistory
} from "react-router";
import logo from "./Images/Logo_grey_border.png";
import "./App.css";
import icon from "./Images/Plate_logo_icon.png";

import Language from "react-icons/lib/md/language";
import Star from "react-icons/lib/md/star";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="SocialMedia">
          <Language /><t /><Star />

        </div>

        <div className="iconArea">
          <icon />
        </div>

      </div>
    );
  }
}

export default App;
