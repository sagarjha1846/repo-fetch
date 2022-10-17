import React from 'react';

function TodaysDate() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Today\'s date is ' + Date()
    )
  );
}

export default TodaysDate;