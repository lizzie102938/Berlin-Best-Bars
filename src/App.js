import './App.css';
import React, {Component} from 'react';
// import AirlineCard from './AirlineCard';
import CardCollection from './components/CardCollection';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import {data} from './Data';


function App() {

  const generateAlliancesForFilter = () => {
    return [...new Set(data.map((airline) => airline.alliance))]
  }

  return (
    <div className="App">
      <Navbar />
      <div className="App-container">
        <h1 className="App-title">Airlines</h1>
        <Filter alliances={generateAlliancesForFilter()}/>
        <CardCollection />
        </div>
    </div>
  );
}


export default App;
