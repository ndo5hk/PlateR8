import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import Rating from "react-rating";

class RunkMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakfastRating: 0,
      lunchRating: 0,
      dinnerRating: 0
    };
  }

  handleBreakfast = rate => {
    this.setState({
      breakfastRating: rate,
      lunchRating: this.lunchRating,
      dinnerRating: this.dinnerRating
    });

    console.log(rate);
  };

  handleLunch = rate => {
    //Database storage here?
    this.setState({
      breakfastRating: this.breakfastRating,
      lunchRating: rate,
      dinnerRating: this.dinnerRating
    });
    console.log(rate);
  };

  handleDinner = rate => {
    //Dinner database storage
    this.setState({
      breakfastRating: this.breakfastRating,
      lunchRating: this.lunchRating,
      dinnerRating: rate
    });
    console.log(rate);
  };

  render() {
    console.log(this.state);

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

export default RunkMenu;
