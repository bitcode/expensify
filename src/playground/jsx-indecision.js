console.log("App is running");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a cpu",
  options: []
};

// onSubmit form function
// e for event
const onFormSubmit = e => {
  e.preventDefault();
  // option will hold the value
  // e.target is going to point to the element that the event started on
  // elements contains all of the elements and they are index by name
  // in this case is option, from the input tag name='option'
  // value holds...the value -_-
  const option = e.target.elements.option.value;
  // form validation to prevent submiting when empty
  // option references the text on the input field
  if (option) {
    //options is the array we are going to push the value to
    app.options.push(option);
    e.target.elements.option.value = "";
    // after changes have been made will call render func to show data to screen
    render();
  }
};

var appRoot = document.getElementById("app");

const numbers = [55, 101, 1000];

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const render = () => {
  var template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options && app.options.length > 0
          ? `Here are the options:  ${app.options.length}`
          : `No options available`}
      </p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I Do
      </button>
      <button onClick={onRemoveAll}>Remove All</button>

      {numbers.map(number => {
        return <p key={number}>Number: {number}</p>;
      })}
      {app.options.map(option => {
        return <ol key={option}>Item: {option}</ol>;
      })}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
