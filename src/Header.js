import React, { Component } from "react";
import logo from "./Images/Logo_grey_border.png";
import "./App.css";

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default Header;
