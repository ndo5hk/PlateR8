import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Link } from "react-router-dom";
import { Card, CardActions, CardMedia, CardTitle } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

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
          <FlatButton label="Runk" />
        </Link>

        <Link to="./HomePageOhill">
          <FlatButton label="O'Hill" />
        </Link>

        <Link to="./HomePageNewcomb">
          <FlatButton label="Newcomb Hall" />
        </Link>

      </CardActions>
    </Card>
  </div>
);

class Homepage extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <MyAwesomeReactComponent />
      </MuiThemeProvider>
    );
  }
}

export default Homepage;
