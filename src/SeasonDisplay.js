import './SeasonDisplay.css';
import React from 'react';
import Clock from './Clock';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: 'sun',
  },
  winter: {
    text: 'Burr it is cold!',
    iconName: 'snowflake',
  },
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter';
  } else {
    return latitude > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>
        {text}
        <Clock />
      </h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
