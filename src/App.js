//import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ClickMePage from './ClickMePage';
import HomePage from './HomePage';
import RunkMenu from './RunkMenu';
import Header from './Header';

import React, { Component } from 'react';
import logo from './Images/Logo_grey_border.png';
import './App.css';
import RaisedButton from 'material-ui/'
import icon from './Images/Plate_logo_icon.png';
import fb from 'react-icons/lib/md/golf-course'
import twitter from 'react-icons/lib/fa/twitter';



class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="iconArea">
            <Route exact path="" component={Header}/>
            <Route exact path="/" component={ClickMePage}/>
            <Route exact path="/HomePage" component={HomePage} />
            <Route exact path="/HomePageRunk" component={HomePage}/>
            <Route exact path="/HomePageRunk" component={RunkMenu} />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;