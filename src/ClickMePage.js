import React, { Component } from "react";
import "./ClickMePage.css";
import { Link } from "react-router-dom";
import icon from "./Images/Plate_logo_icon.png";

class ClickMePage extends Component {
  render() {
    return (
      <div className="ClickMePage">
        <div className="iconArea">
          <Link to="/HomePage">
            <img src={icon} className="ClickMePage-icon" alt="icon" />
          </Link>
        </div>
        <h1 className="ClickMeText">
          Click Icon To Enter
        </h1>

      </div>
    );
  }
}

export default ClickMePage;
