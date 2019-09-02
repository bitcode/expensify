import React from "react";
import ReactDOM from "react-dom";

import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

// ******************************************************************
// **                                                              **
// *****           Renders to Index, What?, Where?              *****
// *****               IndecisionApp Class                      *****
// **                                                              **
// ******************************************************************

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
