import { useState } from 'react';
import CardCollection from './CardCollection';
import '../Styles/Filter.scss';

export default function Filter() {
  const [cheapIsChecked, setCheapIsChecked] = useState(false);
  const [mediumIsChecked, setMediumIsChecked] = useState(false);
  const [expIsChecked, setExpIsChecked] = useState(false);

  const handleOnFirstChange = () => {
    setCheapIsChecked(!cheapIsChecked);
  };

  const handleOnSecondChange = () => {
    setMediumIsChecked(!mediumIsChecked);
  };

  const handleOnThirdChange = () => {
    setExpIsChecked(!expIsChecked);
  };

  let condition = {
    cheap: cheapIsChecked,
    medium: mediumIsChecked,
    exp: expIsChecked,
  };

  return (
    <div>
      <p class="Site-blurb">
        Berlin is a place full of exciting venues to eat and drink. If you're
        passionate about finding new spots in town to meet friends or relax
        after a long week, then you've come to the right place! Hover over the
        cards to see more information about our favourite venues.
      </p>
      <h3 className="Filter-title">Filter by Price</h3>
      <div className="Filter-options">
        <div className="Filter-cheap">
          <input
            type="checkbox"
            value="cheapcheck"
            for="cheapselect"
            checked={cheapIsChecked}
            onChange={handleOnFirstChange}
          />
          <label>€</label>
        </div>
        <div data-testid="Medium-ID" className="Filter-medium">
          <input
            type="checkbox"
            value="mediumcheck"
            for="mediumselect"
            checked={mediumIsChecked}
            onChange={handleOnSecondChange}
          />
          <label>€€</label>
        </div>
        <div className="Filter-exp">
          <input
            type="checkbox"
            value="expcheck"
            for="expselect"
            checked={expIsChecked}
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
