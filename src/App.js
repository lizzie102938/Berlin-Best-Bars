import './Styles/App.scss';
import React, { Component } from 'react';
// import CardCollection from './Components/CardCollection';
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
        {/* <CardCollection /> */}
        <TravelCards />
      </div>
    </div>
  );
  }
}

export default App;

// import './Styles/App.css';
// import React, { Component } from 'react';
// import CardCollection from './Components/CardCollection';
// import Navbar from './Components/Navbar';
// import Filter from './Components/Filter';
// // import { data } from './Data';

// class App extends Component {
//   render() {
//     // const generateAlliancesForFilter = () => {
//     //   return [...new Set(data.map((airline) => airline.alliance))]
//     // }
//     return (
//       <div className="App">
//         <Navbar />
//         <div className="App-container">
//           <h1 className="App-title">Airlines</h1>
//           <Filter />
//           {/* <CardCollection /> */}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
