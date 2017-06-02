import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import Rating from "react-rating";
import firebase from "firebase";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import mainApp from "./App.js";
import "./App.css";

var config = {
  apiKey: "AIzaSyAQkS6_tXFP_mVySsyFHRs_qZVidks5RMc",
  authDomain: "plater8-a97d6.firebaseapp.com",
  databaseURL: "https://plater8-a97d6.firebaseio.com",
  projectId: "plater8-a97d6",
  storageBucket: "plater8-a97d6.appspot.com",
  messagingSenderId: "205104310044"
};

firebase.initializeApp(config);

var database = firebase.database();
var firebaseRunk = database.ref("Runk");

class RunkMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemMealName: "",
      itemMealRating: 0,
      entries: []
    };
  }

  handleFieldChange = (field, e) => {
    this.setState({
      ...this.state,
      [field]: e.target.value
    });
  };

  handleRateChange = rate => {
    this.setState({
      ...this.state,
      itemMealRating: rate
    });
  };

  handleSubmit = submit => {
    var current_entry = {
      mealName: this.state.itemMealName,
      mealRating: this.state.itemMealRating
    };
    var temporary_entries_list = this.state.entries;
    temporary_entries_list.push(current_entry);
    this.setState({
      ...this.state,
      entries: temporary_entries_list
    });
    //update firebase for new info
    console.log(this.state.entries);
    //debugger;
    database.ref("Runk").set(this.state.entries);
  };

  //Retrieves current rating info from Firebase
  componentWillMount() {
    firebaseRunk.on("value", snapshot => {
      const val = snapshot.val();
      this.setState({
        ...this.state,
        entries: val || []
      });
    });
  }

  render() {
    let entry_cells = this.state.entries.map(x => (
      <tbody>
        <tr>
          <td>{x.itemMealName}</td>
          <td>{x.itemMealRating}</td>
        </tr>
      </tbody>
    ));
    return (
      <MuiThemeProvider>
        <div>

          <div>
            <TextField
              className="ItemText"
              hintText="Item Name"
              onChange={e => this.handleFieldChange("itemMealName", e)}
            />
            <Rating onChange={rate => this.handleRateChange(rate)} />
          </div>

          <FloatingActionButton onTouchTap={e => this.handleSubmit(e)}>
            <ContentAdd />
          </FloatingActionButton>
          <div>
            <table>
              <tbody>
                <tr>
                  <th> Entrees </th>
                  <th> Rating </th>
                  {entry_cells}
                </tr>
              </tbody>

            </table>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default RunkMenu;
