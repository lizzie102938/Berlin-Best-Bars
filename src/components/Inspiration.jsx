import { Component } from 'react';
import '../Styles/Inspiration.scss';
import RandomSelect from './RandomSelect';

class Inspiration extends Component {
  render() {
    return (
      <div className="Inspiration">
        {/* <div className="RecCards-text">
          <h4>Top picks this week...</h4>
        </div> */}
        {/* <div className="RecCards-photocards">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dashotel.radio/"
          >
            <h2 className="RecCards-1 RecCards-name">
              <span>Das Hotel</span>
            </h2>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://klunkerkranich.org/"
          >
            <h2 className="RecCards-2 RecCards-name">
              <span>Klunkerkranich</span>
            </h2>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ora.berlin/"
          >
            <h2 className="RecCards-3 RecCards-name">
              <span>ORA</span>
            </h2>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/KantineamBerghain"
          >
            <h2 className="RecCards-4 RecCards-name">
              <span>Kantine am Berghain</span>
            </h2>
          </a>
        </div> */}
        <div className="Inspiration-text">
          <h3>
            Need some inspiration? Push the buttons below for a randomized
            suggestion
          </h3>
        </div>
        <div className="Random-select-flex">
          <div>
            <h4>Cocktail of the week</h4>
            <RandomSelect />
          </div>
          <div>
            <h4>Bar of the week</h4>
            <RandomSelect />
          </div>
        </div>
      </div>
    );
  }
}

export default Inspiration;
