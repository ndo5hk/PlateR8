import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Card, CardActions, CardMedia, CardTitle } from "material-ui/Card";
import TextField from "material-ui/TextField";
import { Input, Button } from "antd";
import { firebaseRunk, firebaseOHill, firebaseNewcomb } from "./firebase";
import * as firebase from "firebase";
import Rating from "react-rating";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

class DiningHall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Runk: [],
      OHill: [],
      Newcomb: [],
      itemMealName: "",
      itemMealRating: 0,
      sortedInfo: null
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
  handleRateChange = e => {
    this.setState({
      ...this.state,
      itemMealRating: e.target.value
    });
  };

  pullDiningHallData = e => {
    var tempRunkInfo = [];
    var tempOHillInfo = [];
    var tempNewcombInfo = [];

    firebaseRunk
      .once("value", snapshot => {
        tempRunkInfo = snapshot.val();
      })
      .then(() => {
        this.setState({
          ...this.state,
          Runk: tempRunkInfo
        });
      });
    firebaseOHill
      .once("value", snapshot => {
        tempOHillInfo = snapshot.val();
      })
      .then(() => {
        this.setState({
          ...this.state,
          OHill: tempOHillInfo
        });
      });
    firebaseNewcomb
      .once("value", snapshot => {
        tempNewcombInfo = snapshot.val();
      })
      .then(() => {
        this.setState({
          ...this.state,
          Newcomb: tempNewcombInfo
        });
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
    firebase
      .database()
      .ref(dining_hall)
      .set(temporary_entries_list);
    this.pullDiningHallData();
  };

  //Retrieves current ratings list from Firebase
  componentWillMount() {
    // this.setState({
    //   ...this.state,
    //   Runk: RunkInfo,
    //   OHill: OHillInfo,
    //   Newcomb: NewcombInfo
    // });
    this.pullDiningHallData();
    //console.log(this.state.Runk);
  }

  render() {
    var name = this.props.name;
    var ratings = this.state[name];

    return (
      <div>
        <h3> {name} </h3>
        <div>
          <table>
            <tbody>
              <tr>
                <th>Entree</th>
                <th>Rating</th>
              </tr>
              {ratings.map(rating => (
                <tr>
                  <td>{rating.tempMealName}</td>
                  <td>{rating.tempMealRating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <MuiThemeProvider>
          <div className="DiningHallMeal">
            <Card bordered={true} style={{ width: 400 }}>
              <div>
                <Input
                  placeholder="Entree Name"
                  onChange={e => this.handleNameChange(e)}
                />
                <Input
                  placeholder="Enter a rating from 1-5"
                  onChange={e => this.handleRateChange(e)}
                />
              </div>
              <div>
                <div style={{ margin: "24px 0" }} />
                <Button
                  type="primary"
                  onClick={() => this.addEntry(name, ratings)}
                  disabled={
                    this.state.itemMealName == "" ||
                    this.state.itemMealRating == ""
                  }
                >
                  {" "}
                  Submit{" "}
                </Button>
              </div>
            </Card>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default DiningHall;
