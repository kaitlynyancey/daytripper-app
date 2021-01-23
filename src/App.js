import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './homepage/HomePage';
import Nav from './nav/Nav';
import TripSearch from './tripsearch/TripSearch';
import TripsContext from './TripsContext';
import SavedTrips from './SavedTrips/SavedTrips';
import ResultsPage from './resultspage/ResultsPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      error: null,
    }
  }
  render() {
    const contextValue = {
      trips: this.state.notes,
    }
    return (
      <div className='App'>
        <header className="group">
          <section>
            <h1>Day Tripper</h1>
          </section>
          <Nav />
        </header>
        <main>
          <TripsContext.Provider value={contextValue}>
            <Route
              exact path='/'
              component={HomePage}
            />
            <Route
              path='/tripsearch'
              component={TripSearch}
            />
            <Route
              path='/savedtrips'
              component={SavedTrips}
            />
            <Route
              path='/resultspage'
              component={ResultsPage}
            />
          </TripsContext.Provider>
        </main>
        <footer>
          <p>
            Created by Kaitlyn Yancey
          </p>
          <p>
            <small>&copy; Copyright 2021. All Rights Reserved</small>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;