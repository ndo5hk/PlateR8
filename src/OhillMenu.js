import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import Rating from "react-rating";
import "./App.css";

class OhillMenu extends Component {
  handleRate = rate => {
    console.log(rate);
  };
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <List className="menuItems">
            <ListItem primaryText="Breakfast" leftIcon={<ContentInbox />} />
            <Rating onClick={rate => this.handleRate(rate)} />

            <ListItem primaryText="Lunch" leftIcon={<ContentInbox />} />
            <Rating onClick={rate => this.handleRate(rate)} />

            <ListItem primaryText="Dinner" rightIcon={<ContentInbox />} />
            <Rating onClick={rate => this.handleRate(rate)} />

          </List>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default OhillMenu;
