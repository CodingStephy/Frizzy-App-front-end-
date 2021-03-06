import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span>You are good to go!</span>;

ReactDOM.render(
  (
    <Countdown date={Date.now() + 1000000000}>
      <Completionist />
    </Countdown>
  ),
  document.getElementById('root')
);

export default Completionist