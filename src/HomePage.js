import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Link } from "react-router-dom";
import { Card, CardActions, CardMedia, CardTitle } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

class Homepage extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Card>
            <CardMedia />
            <CardTitle
              title="Dining Halls"
              subtitle="Select a ding hall to see what's being served!"
            />

            <CardActions>
              <Link to="/HomePageRunk">
                <FlatButton label="Runk" />
              </Link>

              <Link to="/HomePageOhill">
                <FlatButton label="OHill" />
              </Link>

              <Link to="/HomePageNewcomb">
                <FlatButton label="Newcomb Hall" />
              </Link>
            </CardActions>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Homepage;
