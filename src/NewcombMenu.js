import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import Rating from "react-rating";

class NewcombMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakfastRating: 0,
      lunchRating: 0,
      dinnerRating: 0
    };
  }

  handleBreakfast = rate => {
    console.log(rate);
  };

  handleLunch = rate => {
    console.log(rate);
  };

  handleDinner = rate => {
    console.log(rate);
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <List>
            <ListItem primaryText="Breakfast" leftIcon={<ContentInbox />} />
            <Rating onChange={rate => this.handleBreakfast(rate)} />

            <ListItem primaryText="Lunch" leftIcon={<ContentInbox />} />
            <Rating onChange={rate => this.handleLunch(rate)} />

            <ListItem primaryText="Dinner" leftIcon={<ContentInbox />} />
            <Rating onChange={rate => this.handleDinner(rate)} />

          </List>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default NewcombMenu;
