import './App.css';
import React, {Component} from 'react';
// import AirlineCard from './AirlineCard';
import CardCollection from './components/CardCollection';
import Navbar from './components/Navbar';
import Filter from './components/Filter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-container">
          <h1 className="App-title">Airlines</h1>
          <Filter />
          <CardCollection />
          </div>
      </div>
    );
  }
}

export default App;
