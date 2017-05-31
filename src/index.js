import React from "react";
import ReactDOM from "react-dom";

import App from "./Components/App";
import Menu from "./Components/Menu";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(<Menu />, document.getElementById("root"));
registerServiceWorker();
