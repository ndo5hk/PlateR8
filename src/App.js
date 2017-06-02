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
import * as firebase from "firebase";

// var config = {
//   apiKey: "AIzaSyAQkS6_tXFP_mVySsyFHRs_qZVidks5RMc",
//   authDomain: "plater8-a97d6.firebaseapp.com",
//   databaseURL: "https://plater8-a97d6.firebaseio.com",
//   projectId: "plater8-a97d6",
//   storageBucket: "plater8-a97d6.appspot.com",
//   messagingSenderId: "205104310044"
// };

// firebase.initializeApp(config);

// var database = firebase.database();
// const firebaseRunk = firebaseDiningHalls.child("runk").push().key;

//var firebaseDiningHalls = database.ref("Dining Halls");

//const firebaseRunk = firebaseDiningHalls.child("runk").push().key;

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
