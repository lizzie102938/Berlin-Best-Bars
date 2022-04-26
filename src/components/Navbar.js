import React, { Component } from 'react';
import '../styles/Navbar.scss';
import logo from '../images/BBBlogo.png'

class Navbar extends Component {
  render() {
    return(
      <nav className='Navbar'>
        <img className='Navbar-logo' src={logo} alt='BBB-logo'/>
      </nav>
    )
  }
}

export default Navbar;
