import { useState } from 'react';
import CardCollection from './CardCollection';
import '../Styles/Filter.scss';

export default function Filter() {
  const [firstIsChecked, setFirstIsChecked] = useState(false);
  const [secondIsChecked, setSecondIsChecked] = useState(false);
  const [thirdIsChecked, setThirdIsChecked] = useState(false);

  const handleOnFirstChange = () => {
    setFirstIsChecked(!firstIsChecked);
  };

  const handleOnSecondChange = () => {
    setSecondIsChecked(!secondIsChecked);
  };

  const handleOnThirdChange = () => {
    setThirdIsChecked(!thirdIsChecked);
  };

  let condition = { first: firstIsChecked, second: secondIsChecked, third: thirdIsChecked };

  return (
    <div>
      <h3 className="Filter-title">Filter by Alliances</h3>
      <div className="Filter-options">
        <div className="Filter-oneworld">
          <input
            type="checkbox"
            id=""
            value="first"
            checked={firstIsChecked}
            onChange={handleOnFirstChange}
          />
          <label>Oneworld</label>
        </div>
        <div className="Filter-skyteam">
          <input
            type="checkbox"
            id=""
            value="second"
            checked={secondIsChecked}
            onChange={handleOnSecondChange}
          />
          <label>Sky Team</label>
        </div>
        <div className="Filter-staralliance">
          <input
            type="checkbox"
            id=""
            value="third"
            checked={thirdIsChecked}
            onChange={handleOnThirdChange}
          />
          <label>Star Alliance</label>
        </div>
      </div>
      <div>
        <CardCollection conditionProps={condition} />
      </div>
    </div>
  );
}
