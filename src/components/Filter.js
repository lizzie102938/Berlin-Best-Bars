import { useState } from 'react';
import CardCollection from './CardCollection';
import '../Styles/Filter.scss';

export default function Filter() {
  const [oneworldIsChecked, setOneworldIsChecked] = useState(false);
  const [skyteamIsChecked, setSkyteamIsChecked] = useState(false);
  const [starallianceIsChecked, setStarallianceIsChecked] = useState(false);

  const handleOnFirstChange = () => {
    setOneworldIsChecked(!oneworldIsChecked);
  };

  const handleOnSecondChange = () => {
    setSkyteamIsChecked(!skyteamIsChecked);
  };

  const handleOnThirdChange = () => {
    setStarallianceIsChecked(!starallianceIsChecked);
  };

  let condition = { oneworld: oneworldIsChecked, skyteam: skyteamIsChecked, staralliance: starallianceIsChecked };

  return (
    <div>
      <h3 className="Filter-title">Filter by Alliances</h3>
      <div className="Filter-options">
        <div className="Filter-oneworld">
          <input
            type="checkbox"
            value="oneworldcheck"
            for="oneworldselect"
            checked={oneworldIsChecked}
            onChange={handleOnFirstChange}
          />
          <label>Oneworld</label>
        </div>
        <div data-testid="Skyteam-ID" className="Filter-skyteam">
          <input
            type="checkbox"
            value="skyteamcheck"
            for="skyteamselect"
            checked={skyteamIsChecked}
            onChange={handleOnSecondChange}
          />
          <label>Sky Team</label>
        </div>
        <div className="Filter-staralliance">
          <input
            type="checkbox"
            value="staralliancecheck"
            for="starallianceselect"
            checked={starallianceIsChecked}
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
