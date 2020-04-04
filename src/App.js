import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.textInput1 = React.createRef();
    this.textInput2 = React.createRef();

    this.state = { value: "" };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ value: this.textInput1.current.value });
    console.log(this.textInput2.current.value);
  };

  render() {
    return (
      <div>
        <h2>React Ref - createRef</h2>
        <h3>Value: {this.state.value}</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.textInput1} />
          <input type="text" ref={this.textInput2} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
