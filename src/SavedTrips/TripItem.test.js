import React from 'react';
import ReactDOM from 'react-dom';
import TripItem from './TripItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <TripItem />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});