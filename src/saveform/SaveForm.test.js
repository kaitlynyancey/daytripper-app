import React from 'react';
import ReactDOM from 'react-dom';
import SaveForm from './SaveForm';
import { BrowserRouter, Route } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <SaveForm />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});