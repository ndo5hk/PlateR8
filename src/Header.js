import React, { Component } from 'react';
import logo from './Images/Logo_grey_border.png';
import './App.css';
import RaisedButton from 'material-ui/'
import fb from 'react-icons/lib/md/golf-course'
import twitter from 'react-icons/lib/fa/twitter';
import icon from './Images/Plate_logo_icon.png';


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