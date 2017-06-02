import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import Rating from "react-rating";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

class DiningHall extends React.Component {
  render() {
    const name = this.props.name;
    const ratings = this.props.ratings;
    return (
      <div>
        <MuiThemeProvider>

          <h3> {this.props.name} </h3>
          <table>
            {this.props.map(ratings => <tr key={ratings.itemMealName} />)}
          </table>

          <TextField
            hintText="Item Name"
            onChange={e => this.props.handleNameChange(e)}
          />
          <Rating onChange={rate => this.props.handleRateChange(rate)} />

          <FloatingActionButton onTouchTap={this.props.addEntry(name, ratings)}>
            <ContentAdd />
          </FloatingActionButton>

        </MuiThemeProvider>
      </div>
    );
  }
}

export default DiningHall;
