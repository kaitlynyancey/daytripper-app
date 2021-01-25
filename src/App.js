import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './homepage/HomePage';
import Nav from './nav/Nav';
import TripSearch from './tripsearch/TripSearch';
import TripsContext from './TripsContext';
import SavedTrips from './SavedTrips/SavedTrips';
import ResultsPage from './resultspage/ResultsPage';
import SaveForm from './saveform/SaveForm';
import TRIPS from './trips';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      error: null,
    }
  }

  componentDidMount() {
    this.setState({
      trips: TRIPS
    })
  }

  render() {
    const contextValue = {
      trips: this.state.trips,
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
            <Route
              path='/saveform'
              component={SaveForm}
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