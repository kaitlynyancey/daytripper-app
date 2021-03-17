import React from 'react';
import ReactDOM from 'react-dom';
import SavedTrips from './SavedTrips';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SavedTrips />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});