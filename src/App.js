//import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ClickMePage from "./ClickMePage";
import HomePage from "./HomePage";
import RunkMenu from "./RunkMenu";
import OhillMenu from "./OhillMenu";
import NewcombMenu from "./NewcombMenu";

import Header from "./Header";

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="iconArea">
            <Route exact path="" component={Header} />
            <Route exact path="/" component={ClickMePage} />
            <Route exact path="/HomePage" component={HomePage} />
            <Route exact path="/HomePageRunk" component={HomePage} />
            <Route exact path="/HomePageRunk" component={RunkMenu} />
            <Route exact path="/HomePageOhill" component={HomePage} />
            <Route exact path="/HomePageOhill" component={OhillMenu} />
            <Route exact path="/HomePageNewcomb" component={HomePage} />
            <Route exact path="/HomePageNewcomb" component={NewcombMenu} />

          </div>

        </div>
      </Router>
    );
  }
}

export default App;
