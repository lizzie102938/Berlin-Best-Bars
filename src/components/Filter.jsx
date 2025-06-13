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
      <div className="blurb-container">
        <p className="site-blurb">
          Berlin is a place full of exciting venues to eat and drink. If you're
          passionate about finding new spots in town to meet friends or relax
          after a long week, then you've come to the right place! Hover over the
          cards to see more information about our favourite venues.
        </p>
      </div>
      <h3 className="filter-title">Filter by price</h3>
      <div className="filter-options">
        <div className="filter-one">
          {/* changed checkbox color etc */}
          <input
            type="checkbox"
            value="one-check"
            id="€"
            checked={oneIsChecked}
            onChange={handleOnFirstChange}
          />
          <label htmlFor="€">€</label>
        </div>
        <div data-testid="two-ID" className="filter-two">
          <input
            type="checkbox"
            value="two-check"
            id="€€"
            checked={twoIsChecked}
            onChange={handleOnSecondChange}
          />
          <label htmlFor="€€">€€</label>
        </div>
        <div className="filter-three">
          <input
            type="checkbox"
            value="three-check"
            id="€€€"
            checked={threeIsChecked}
            onChange={handleOnThirdChange}
          />
          <label htmlFor="€€€">€€€</label>
        </div>
      </div>
      <div>
        <CardCollection conditionProps={condition} />
      </div>
    </div>
  );
}
