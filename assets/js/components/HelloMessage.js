import React from 'react';

class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleHi() {
    let name = this.refs.name.getDOMNode().value
    this.state.name = name;
    this.setState({ name: name });
  }

  render() {
    return (
      <div>
        <input type="text" ref="name" />
        <button type="button" onClick={this.handleHi.bind(this)}>Hi!</button>
        <br />
        <a>Hello {this.state.name}!</a>
      </div>
    )
  }
}

export default HelloMessage;
