import { useState } from 'react';
import CardCollection from './CardCollection';
import '../Styles/Filter.scss';

export default function Filter() {
  const [oneIsChecked, setOneIsChecked] = useState(true);
  const [twoIsChecked, setTwoIsChecked] = useState(true);
  const [threeIsChecked, setThreeIsChecked] = useState(true);

  const handleOnFirstChange = () => {
    setOneIsChecked(!oneIsChecked);
  };

  const handleOnSecondChange = () => {
    setTwoIsChecked(!twoIsChecked);
  };

  const handleOnThirdChange = () => {
    setThreeIsChecked(!threeIsChecked);
  };

  let condition = {
    one: oneIsChecked,
    two: twoIsChecked,
    three: threeIsChecked,
  };

  return (
    <div>
      <div className="Blurb-container">
        <h1 className="App-title">Bars</h1>
        <p class="Site-blurb">
          Berlin is a place full of exciting venues to eat and drink. If you're
          passionate about finding new spots in town to meet friends or relax
          after a long week, then you've come to the right place! Hover over the
          cards to see more information about our favourite venues.
        </p>
      </div>
      <h3 className="Filter-title">Filter by price</h3>
      <div className="Filter-options">
        <div className="Filter-one">
          {/* changed checkbox color etc */}
          <input
            type="checkbox"
            value="one-check"
            for="€"
            checked={oneIsChecked}
            onChange={handleOnFirstChange}
          />
          <label>€</label>
        </div>
        <div data-testid="two-ID" className="Filter-two">
          <input
            type="checkbox"
            value="two-check"
            for="€€"
            checked={twoIsChecked}
            onChange={handleOnSecondChange}
          />
          <label>€€</label>
        </div>
        <div className="Filter-three">
          <input
            type="checkbox"
            value="three-check"
            for="€€€"
            checked={threeIsChecked}
            onChange={handleOnThirdChange}
          />
          <label>€€€</label>
        </div>
      </div>
      <div>
        <CardCollection conditionProps={condition} />
      </div>
    </div>
  );
}
