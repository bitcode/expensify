import React from "react";
import ReactDOM from "react-dom";

// ******************************************************************
// **                                                              **
// *****     Renders Title and Subtitle                          ****
// **                                                              **
// ******************************************************************

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subTitle}</h2>}
    </div>
  );
};

// *********** Header Default Props *********************************

Header.defaultProps = {
  title: "Indecision"
};

export default Header;
