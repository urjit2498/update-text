import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "Initial Data..." };
    this.updateValue = this.updateValue.bind(this);
  }
  updateValue(e) {
    this.setState({ data: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.data}
          onChange={this.updateValue}
        />
        <h4>{this.state.data}</h4>
      </div>
    );
  }
}

export default App;
