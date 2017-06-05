import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
//import ContentInbox from "material-ui/svg-icons/content/inbox";
import Rating from "react-rating";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

class DiningHall extends Component {

  render() {
    const name = this.props.name;
    const ratings = this.props.ratings;
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
            {ratings.map(rating => <tr><td>{rating.tempMealName}</td><td>{rating.tempMealRating}</td></tr>)}
          </tbody>
        </table>
        </div>
        <MuiThemeProvider>
          <div>
          <div>
            <TextField
            hintText="Item Name"
            onChange={e => this.props.handleNameChange(e)}
          />
          <Rating onChange={rate => this.props.handleRateChange(rate)} />
          </div>
        <div>
          <FloatingActionButton onTouchTap={this.props.addEntry(this.props.name, this.props.ratings)}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default DiningHall;
/*
 <table>
            {ratings.map(rating => <tr key={rating.tempMealName} />)}
          </table>

          <TextField
            hintText="Item Name"
            onChange={e => this.props.handleNameChange(e)}
          />
          <Rating onChange={rate => this.props.handleRateChange(rate)} />

          <FloatingActionButton onTouchTap={this.props.addEntry(name, ratings)}>
            <ContentAdd />
          </FloatingActionButton>




             {this.props.entree_list.map(entree => <tr><td>{entree}</td></tr>)}
          */