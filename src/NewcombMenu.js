import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import Rating from "react-rating";
import firebase from "firebase";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import database from "./App.js";
import firebaseNewcombRef from "./App.js";

class NewcombMenu extends Component {
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
    firebase.database.ref("Newcomb").set(this.state.entries);
  };

  //Retrieves current rating info from Firebase
  componentWillMount() {
    firebaseNewcombRef.on("value", snapshot => {
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
          <div>
            <TextField
              hintText="Item Name"
              onChange={e => this.handleFieldChange("itemMealName", e)}
            />
            <Rating onChange={rate => this.handleRateChange(rate)} />
          </div>

          <FloatingActionButton onTouchTap={e => this.handleSubmit(e)}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default NewcombMenu;
