import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './homepage/HomePage';
import Nav from './nav/Nav';
import TripSearch from './tripsearch/TripSearch';
import TripsContext from './TripsContext';
import SavedTrips from './SavedTrips/SavedTrips';
import SaveForm from './saveform/SaveForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      results: [],
      error: null,
    }
  }

  //function to update trip results when search form is submitted
  updateResults = results => {
    this.setState({
      results: results
    })
  }

  //function to update the trips database when a new trip is saved by user
  addTrip = newTrip => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/trips`, {
      method: 'POST',
      body: JSON.stringify(newTrip),
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error
          })
        }
        return res.json()
      })
      .then(response => {
        this.state.trips.push(response)
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  //function to delete a trip from the trips database
  deleteTrip = tripId => {
    const newTrips = this.state.trips.filter(trip =>
      trip.id !== tripId)
    this.setState({
      trips: newTrips
    })
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/trips`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error
          })
        }
        return res.json()
      })
      .then(response => {
        this.setState({
          trips: response
        })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  render() {
    //update trip context
    const contextValue = {
      trips: this.state.trips,
      results: this.state.results,
      updateResults: this.updateResults,
      addTrip: this.addTrip,
      deleteTrip: this.deleteTrip,
    }
    return (
      <BrowserRouter>
        <TripsContext.Provider value={contextValue}>
          <div className='App' >
            <header>
              <Nav />
            </header>
            <main>
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
                path='/save/:tripId'
                component={SaveForm}
              />

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
        </TripsContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;