import React from "react";
import ReactDOM from "react-dom";

// ******************************************************************
// **                                                              **
// *****      Receives Options Class options
// **                                                              **
// ******************************************************************

const Option = props => (
  <div>
    Option: {props.optionText}
    <button
      className="button button--link"
      onClick={e => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);

export default Option;
