import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

injectTapEventPlugin();

var testFunction = () => {
  console.log("ran");
  return <p>Hi</p>;
};

const MyAwesomeReactComponent = () => (
  <Card>
    <CardMedia />
    <CardTitle
      title="Dining Halls"
      subtitle="Pick a Dining Hall to View its menu for today"
    />

    <CardActions>
      <FlatButton label="Runk" />
      <FlatButton label="O'Hill" />
      <FlatButton label="Newcomb Hall" />
    </CardActions>
  </Card>
);

const Menu = React.createClass({
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

export default Menu;
