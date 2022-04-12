import { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  render() {
    return (
      <div>
        <h3 className='Filter-title'>Filter by Alliances</h3>
        <div className="Filter-options">

          <div className='Filter-oneworld'>
            <input type="checkbox" id="oneworld"/>
            <label for="oneworld" className="Filter-box">Oneworld</label>
          </div>


          <div className='Filter-skyteam'>
            <input type="checkbox" id="skyteam"/>
            <label for="skyteam" className="Filter-box">Skyteam</label>
          </div>

          <div className='Filter-staralliance'>
            <input type="checkbox" id="staralliance"/>
            <label for="staralliance" className="Filter-box">Star Alliance</label>
          </div>

        </div>
      </div>
    )
  }
}

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
