import React from "react";
import ReactDOM from "react-dom";

// ******************************************************************
// **                                                              **
// *****  Form to imput the options and pass them to Option      ****
// **                                                              **
// ******************************************************************

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  // ******** before Babel plugin Transform-Class-Properties *********

  // constructor(props) {
  //   super(props);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.state = {
  //     error: undefined
  //   };
  // }

  // Transform-Class-Properties allow you to write methods inside of
  // a ES6 class using fat arrow notation. And since arrow functions
  // do not create their own this and use the value of the enclosing
  // context instead, you no longer have to bind the this context to
  // every method you define inside your component.

  // ****************************************************************

  handleAddOption = e => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="addOptionError">{this.state.error}</p>
        )}
        <form className="addOption" onSubmit={this.handleAddOption}>
          <input className="addOption__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
