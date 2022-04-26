import './Styles/App.scss';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import Filter from './components/Filter';
import RecCards from './components/RecCards';

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
