import React, { Component } from 'react';
import logo from './Images/Logo_grey_border.png';
import './App.css';
import icon from './Images/Plate_logo_icon.png';
import fb from 'react-icons/lib/md/golf-course'
import twitter from 'react-icons/lib/fa/twitter';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        


        <p className="SocialMedia">
            Hello World<fb />
        </p>

        <div className="iconArea">
          <img src={icon} className="App-icon" alt="icon"/>
        </div>

      </div>
    );
  }
}

export default App;
