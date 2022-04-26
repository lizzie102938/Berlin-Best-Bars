import './Styles/App.scss';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import RecCards from './Components/RecCards';

class App extends Component {
  render() {

  return (
    <div className="App">
      <Navbar />
      <div className="App-container">
        <h1 className="App-title">Bars</h1>
        <Filter />
        <RecCards />
      </div>
    </div>
  );
  }
}

export default App;
