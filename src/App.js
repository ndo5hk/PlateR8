import { BrowserRouter as Router, Route } from "react-router-dom";
import ClickMePage from "./ClickMePage";
import HomePage from "./HomePage";
import Header from "./Header";
import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase";
import DiningHall from "./DiningHall.js";

 var config = {
    apiKey: "AIzaSyBGTV-3vEBfpQzbB01f3cICfn1N2JLRpn4",
    authDomain: "plater8-final.firebaseapp.com",
    databaseURL: "https://plater8-final.firebaseio.com",
    projectId: "plater8-final",
    storageBucket: "plater8-final.appspot.com",
    messagingSenderId: "916035618490"
  };
  firebase.initializeApp(config);

//var database = firebase.database();
var firebaseRunk = firebase.database().ref("Runk");
var firebaseOHill = firebase.database().ref("Ohill");
var firebaseNewcomb = firebase.database().ref("Newcomb");


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Runk: [],
      OHill: [],
      Newcomb: [],
      itemMealName: "",
      itemMealRating: 0
    };
  }

  //update state with entree name in real time
  handleNameChange = e => {
    this.setState({
      ...this.state,
      itemMealName: e.target.value
    });
  };

  //update state with entree rating in real time
  handleRateChange = rate => {
    this.setState({
      ...this.state,
      itemMealRating: rate
    });
  };

  //Adding an entee rating to the ratings list upon submit
  addEntry = (dining_hall, list) => {
    //creating a dummy entry
    var current_entry = {
      tempMealName: this.state.itemMealName,
      tempMealRating: this.state.itemMealRating
    };
    //creating a dummy list and appending the new entry
    var temporary_entries_list = list.concat(current_entry);
    //updating state
    this.setState({
      ...this.state,
      [dining_hall]: temporary_entries_list
    });
    //updating firebase
    firebase.database().ref(dining_hall).set(temporary_entries_list);
  }

  //Retrieves current ratings list from Firebase
  componentWillMount() {
    firebaseRunk.on("value", snapshot => {
      const val = snapshot.val();
      this.setState({
        ...this.state,
        Runk: val || []
      });
    });
    firebaseOHill.on("value", snapshot => {
      const val = snapshot.val();
      this.setState({
        ...this.state,
        OHill: val || []
      });
    });
    firebaseNewcomb.on("value", snapshot => {
      const val = snapshot.val();
      this.setState({
        ...this.state,
        Newcomb: val || []
      });
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="iconArea">
            <Route exact path="" component={Header} />
            <Route exact path="/" component={ClickMePage} />
            <Route exact path="/HomePage" component={HomePage} />
            <Route exact path="/HomePageRunk" component={HomePage} />
            <Route exact path="/HomePageRunk"
              component={() =>
                <DiningHall
                  name="Runk"
                  ratings={this.state.Runk}
                  addEntry={() =>this.addEntry}
                  handleRateChange={() =>this.handleRateChange}
                  handleNameChange={() =>this.handleNameChange}
                />
              }
            />
            <Route exact path="/HomePageOhill" component={HomePage} />
            <Route
              exact
              path="/HomePageOhill"
              component={() =>
                <DiningHall
                  name="OHill"
                  ratings={this.state.OHill}
                  addEntry={() =>this.addEntry}
                  handleRateChange={() =>this.handleRateChange}
                  handleNameChange={() =>this.handleNameChange}
                />
              }
            />
            <Route exact path="/HomePageNewcomb" component={HomePage} />
            <Route
              exact
              path="/HomePageNewcomb"
              component={ () =>
                <DiningHall
                  name="Newcomb"
                  ratings={this.state.Newcomb}
                  addEntry={() =>this.addEntry}
                  handleRateChange={() =>this.handleRateChange}
                  handleNameChange={() =>this.handleNameChange}
                />
              }
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
