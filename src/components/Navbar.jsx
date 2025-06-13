import React, { Component } from 'react';
import '../Styles/Navbar.scss';
import logo from '../Images/BBBlogo.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <img className="navbar-logo" src={logo} alt="BBB-logo" />
        <button className="recommendation-button">Our recommendations</button>
      </nav>
    );
  }
}

export default Navbar;
