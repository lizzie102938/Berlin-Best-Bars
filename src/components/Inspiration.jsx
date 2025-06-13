import { Component } from 'react';
import '../Styles/Inspiration.scss';
import RandomSelect from './RandomSelect';

class Inspiration extends Component {
  render() {
    return (
      <div className="random-select-flex">
        <div>
          <h3>
            Can't decide where to go? Let our random generator decide for you!
          </h3>
          <RandomSelect />
        </div>
      </div>
    );
  }
}

export default Inspiration;
