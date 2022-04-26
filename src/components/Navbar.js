import React, { Component } from 'react';
import '../Styles/Navbar.scss';
import logo from '../Images/BBBlogo.png'

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
