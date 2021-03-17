import React from 'react';
import ReactDOM from 'react-dom';
import TripSearch from './TripSearch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <TripSearch />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});