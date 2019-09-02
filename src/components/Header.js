import React from "react";
import ReactDOM from "react-dom";

// ******************************************************************
// **                                                              **
// *****     Renders Title and Subtitle                          ****
// **                                                              **
// ******************************************************************

const Header = props => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
    </div>
  </div>
);

// *********** Header Default Props *********************************

Header.defaultProps = {
  title: "Indecision"
};

export default Header;
