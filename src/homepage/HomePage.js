import React, { Component } from 'react';
import TripsContext from '../TripsContext';

class HomePage extends Component {
    static contextType = TripsContext;

    render() {
        return (
            <div className="wrapper">
                <h3>
                    Welcome to Your Next Adventure
            </h3>
                <p>
                    Tired of the same old Saturday plans? Looking for a fun destination to spice up your weekend? Recently moved to a new city and ready to explore?
            </p>
                <p>
                    <b>Day Tripper is here to help!</b>
                </p>
                <p>
                    This app lets you search nearby attractions and points of interest to plan out your next getaway. All trips will be within a day's driving distance, so no need to book a hotel. Day Tripper also allows you to save your favorite trips to your account when you sign up!
            </p>
                <p>
                    <i>What are you waiting for?</i>
                </p>
                <button
                    className="go-button"
                    onClick={() => this.props.history.push('/tripsearch')}>
                    Let's Go!
            </button>
            </div>
        )
    }
} 

export default HomePage;