import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import icon from "./Images/Plate_logo_icon.png";

class ClickMePage extends Component {
  render() {
    return (
      <div className="App">
        <div className="iconArea">
          <Link to="/HomePage">
            <img src={icon} className="App-icon" alt="icon" />
          </Link>
        </div>

      </div>
    );
  }
}

export default ClickMePage;
