import React, { Component } from 'react';
import logo from './Images/Logo_grey_border.png';
import './App.css';
import RaisedButton from 'material-ui/'
import fb from 'react-icons/lib/md/golf-course'
import twitter from 'react-icons/lib/fa/twitter';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import icon from './Images/Plate_logo_icon.png';


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