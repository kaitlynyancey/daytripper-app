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
      results: [],
      error: null,
    }
  }

  updateResults = results => {
    this.setState({
      results: results
    })
  }

  addTrip = newTrip => {
    this.state.trips.push(newTrip)
  }

  deleteTrip = tripId => {
    const newTrips = this.state.trips.filter(trip => 
      trip.id !== tripId)
      this.setState({
        trips: newTrips
      })
  }

  componentDidMount() {
    this.setState({
      trips: TRIPS
    })
  }

  render() {
    const contextValue = {
      trips: this.state.trips,
      results: this.state.results,
      updateResults: this.updateResults,
      addTrip: this.addTrip,
      deleteTrip: this.deleteTrip,
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
              path='/save/:tripId'
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