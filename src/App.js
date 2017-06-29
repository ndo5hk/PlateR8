import { BrowserRouter as Router, Route } from "react-router-dom";
import ClickMePage from "./ClickMePage";
import HomePage from "./HomePage";
import Header from "./Header";
import React, { Component } from "react";
import "./App.css";
import DiningHall from "./DiningHall.js";

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
            <Route
              exact
              path="/HomePageRunk"
              component={() => <DiningHall diningHallName="Runk" />}
            />
            <Route exact path="/HomePageOhill" component={HomePage} />
            <Route
              exact
              path="/HomePageOhill"
              component={() => <DiningHall diningHallName="OHill" />}
            />
            <Route exact path="/HomePageNewcomb" component={HomePage} />
            <Route
              exact
              path="/HomePageNewcomb"
              component={() => <DiningHall diningHallName="Newcomb" />}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
