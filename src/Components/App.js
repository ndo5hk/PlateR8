import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ClickMePage from "./clickMe";
import HomePage from "./home";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="routing-container">
          <ul>
            <li><Link to="/clickMe">Click Me</Link></li>
          </ul>
          <Route exact path="/clickMe" component={ClickMePage} />
        </div>
      </Router>
    );
  }
}
export default App;
