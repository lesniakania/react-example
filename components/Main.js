import React from 'react';

class Main extends React.Component {
  componentWillReceiveProps(newProps, oldProps) {
    console.log("componentWillReceiveProps");
    // this.setState(this.getInitialState(newProps));
  }

  // Called directly after component rendering, only on client
  componentDidMount() {
    console.log("componentDidMount");
  }

  // Render the component
  render() {
    return (
      <div className="hellp-app">
        Hello {this.props.name}!
      </div>
    )
  }
}

export default Main;
