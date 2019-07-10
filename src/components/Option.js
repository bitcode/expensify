import React from "react";
import ReactDOM from "react-dom";

// ******************************************************************
// **                                                              **
// *****      Receives Options Class options
// **                                                              **
// ******************************************************************

const Option = props => {
  return (
    <div>
      Option: {props.optionText}
      <button
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Option;
