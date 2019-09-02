import React from "react";
import ReactDOM from "react-dom";

import Option from "./Option";

// ******************************************************************
// **                                                              **
// *****     Shows options with botton to erease                 ****
// **                                                              **
// ******************************************************************

const Options = props => (
  <div>
    <button className="button button--link" onClick={props.handleDeleteOptions}>
      Remove All
    </button>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    {props.options.map(option => (
      <Option
        key={option}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
