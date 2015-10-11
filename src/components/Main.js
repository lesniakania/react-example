import React from 'react';
import { Link } from 'react-router'

class Main extends React.Component {
  render() {
    return (
      <ul id="tabs-headers">
        <li><Link to={'/notes'}>Notes</Link></li>
        <li><Link to={'/settings'}>Settings</Link></li>

        {this.props.children}
      </ul>
    )
  }
};

export default Main;
