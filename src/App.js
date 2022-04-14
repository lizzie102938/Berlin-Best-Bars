import './Styles/App.scss';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import TravelCards from './Components/TravelCards'

class App extends Component {
  render() {

  return (
    <div className="App">
      <Navbar />
      <div className="App-container">
        <h1 className="App-title">Airlines</h1>
        <Filter />
        <TravelCards />
      </div>
    </div>
  );
  }
}

export default App;
