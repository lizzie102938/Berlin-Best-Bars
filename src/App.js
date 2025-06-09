import './Styles/App.scss';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Inspiration from './components/Inspiration';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-container">
          <Filter />
          <Inspiration />
        </div>
      </div>
    );
  }
}

export default App;
