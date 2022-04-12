import { Component } from 'react';
import './Filter.css';
// import CardCollection from './CardCollection';

class Filter extends Component {
  render() {

    console.log(alliances.name);

    return (
      <div>
        <h3 className='Filter-title'>Filter by Alliances</h3>
        <div className="Filter-options">

          <div className='Filter-oneworld'>
            <input type="checkbox" id="oneworld"/>
            <label for="oneworld" className="Filter-box">{alliances[0]}</label>
          </div>


          <div className='Filter-skyteam'>
            <input type="checkbox" id="skyteam"/>
            <label for="skyteam" className="Filter-box">{alliances[1]}</label>
          </div>

          <div className='Filter-staralliance'>
            <input type="checkbox" id="staralliance"/>
            <label for="staralliance" className="Filter-box">{alliances[2]}</label>
          </div>

        </div>
      </div>
    )
  }
}

const alliances = ["Oneworld", "Star Alliance", "Sky Team"];

export default Filter;

// <div className='Filter-staralliance'>
// <label for="staralliance" className="Filter-box">
//   <input type="checkbox"/>
//   Star Alliance
// </label>
// </div>

  // constructor(props) {
  //   super(props);
  //   this.state = {checked: false}
  //   }

  // flipChecked() { this.setState({checked: !this.state.checked }); }
