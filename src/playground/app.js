// TODO
// 1. be able to log out options array inside of handleRemoveAll

// const obj = {
//   name: "Vikram",
//   getname() {
//     return this.name;
//   }
// };

// const getName = obj.getName.bind({ name: "Andrew" });

// console.log(getName());

// ******************************************************************
// **                                                              **
// *****    Set Title SubTitle & Options Array                  *****
// **                                                              **
// ******************************************************************

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter Valid Value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exist";
    }

    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  }

  render() {
    const title = "Indecision";
    const subTitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header subtitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

// ********** Indecision Default Props ******************************

// IndecisionApp.defaultProps = {
//   options: []
// };

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

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subTitle}</h2>
//       </div>
//     );
//   }
// }

// ******************************************************************
// **                                                              **
// *****      Picks the action                                   ****
// **                                                              **
// ******************************************************************

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

// ******************************************************************
// **                                                              **
// *****     Shows options with botton to erease                 ****
// **                                                              **
// ******************************************************************

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && (
        <p>Please add an option to get started!</p>
      )}
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {this.props.options.map(option => (
//           <Option key={option} optionText={option} />
//         ))}
//       </div>
//     );
//   }
// }

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

// class Option extends React.Component {
//   render() {
//     return <div>Option: {this.props.optionText}</div>;
//   }
// }

// ******************************************************************
// **                                                              **
// *****  Form to imput the options and pass them to Option      ****
// **                                                              **
// ******************************************************************

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// ******************************************************************
// **                                                              **
// *****    converting function classes without state to        *****
// *****               stateless components                     *****
// **                                                              **
// ******************************************************************

// const User = props => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

// ******************************************************************
// **                                                              **
// *****           Renders to Index, What?, Where?              *****
// *****               IndecisionApp Class                      *****
// **                                                              **
// ******************************************************************

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// ******************************************************************
// **                                                              **
// *****                 END OF FILE                            *****
// **                                                              **
// ******************************************************************
