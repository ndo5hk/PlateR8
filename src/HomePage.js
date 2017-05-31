import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ClickMePage from './ClickMePage';
import icon from './Images/Plate_logo_icon.png';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

var testFunction = () => {

};

const MyAwesomeReactComponent = () => (
<div>
  <Card>
    <CardMedia />
    <CardTitle
      title="Dining Halls"
      subtitle="Pick a Dining Hall to View its menu for today"
    />

   <CardActions>
     <Link to="./HomePageRunk">
      <FlatButton  label="Runk" />
      </Link>
      <FlatButton label="O'Hill" />
      <FlatButton label="Newcomb Hall" />
    </CardActions>
  </Card>
  </div>
);

const Homepage = React.createClass({
  propTypes: {
    isClicked: true,
    numClicks: 0
  },
  getDefaultProps() {
    return {
      isClicked: false,
      numClicks: 0
    };
  },
  render() {
    return (
      <MuiThemeProvider>
        <MyAwesomeReactComponent />
      </MuiThemeProvider>
    );
  }
});

export default Homepage;