import { BrowserRouter as Router, Route } from "react-router-dom";
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
            <Route exact path="/" component={HomePage} />
            <Route exact path="/HomePageRunk" component={HomePage} />
            <Route
              exact
              path="/HomePageRunk"
              component={() => <DiningHall name="Runk" />}
            />
            <Route exact path="/HomePageOHill" component={HomePage} />
            <Route
              exact
              path="/HomePageOHill"
              component={() => <DiningHall name="OHill" />}
            />
            <Route exact path="/HomePageNewcomb" component={HomePage} />
            <Route
              exact
              path="/HomePageNewcomb"
              component={() => <DiningHall name="Newcomb" />}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
