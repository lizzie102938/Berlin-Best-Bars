import './App.css';
import React, { Component } from 'react';
import CardCollection from './components/CardCollection';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import TravelCards from './components/TravelCards'
// import { data } from './Data';

class App extends Component {
  render() {
  // const generateAlliancesForFilter = () => {
  //   return [...new Set(data.map((airline) => airline.alliance))]
  // }
  return (
    <div className="App">
      <Navbar />
      <div className="App-container">
        <h1 className="App-title">Airlines</h1>
        <Filter />
        <CardCollection />
        <TravelCards />
      </div>
    </div>
  );
  }
}

export default App;

/* <Filter alliances={generateAlliancesForFilter()}/> */
