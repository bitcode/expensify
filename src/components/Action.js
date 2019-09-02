import React from "react";
import ReactDOM from "react-dom";

// ******************************************************************
// **                                                              **
// *****      Picks the action                                   ****
// **                                                              **
// ******************************************************************

const Action = props => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      What should I do?
    </button>
  </div>
);

export default Action;
