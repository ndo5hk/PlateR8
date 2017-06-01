import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import Rating from "react-rating";
import "./App.css";

class OhillMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakfastRating: 0,
      lunchRating: 0,
      dinnerRating: 0
    };
  }

  handleBreakfast = rate => {
    console.log({ rate });
  };

  handleLunch = rate => {
    console.log({ rate });
  };

  handleDinner = rate => {
    console.log({ rate });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <List className="menuItems">
            <ListItem primaryText="Breakfast" leftIcon={<ContentInbox />} />
            <Rating onClick={rate => this.handleBreakfast(rate)} />

            <ListItem primaryText="Lunch" leftIcon={<ContentInbox />} />
            <Rating onClick={rate => this.handleLunch(rate)} />

            <ListItem primaryText="Dinner" rightIcon={<ContentInbox />} />
            <Rating onClick={rate => this.handleDinner(rate)} />

          </List>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default OhillMenu;
