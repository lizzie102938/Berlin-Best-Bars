import React, { Component } from 'react';
import '../Styles/Navbar.scss';
import logo from '../Images/Kayak-logo.svg'

class Navbar extends Component {
  render() {
    return(
      <nav className="Navbar">
        <img className="Navbar-logo" src={logo} alt="Kayak-logo"/>
      </nav>
    )
  }
}


export default Navbar;
