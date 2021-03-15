import React, { Component } from 'react';
import TripsContext from '../TripsContext';

class HomePage extends Component {
    static contextType = TripsContext;

    render() {
        return (
            <div className="wrapper">
                <section className="box">
                    <h3>
                        Welcome to Your Next Adventure
                    </h3>
                    <br />
                    <p>
                        Tired of the same old Saturday plans? Looking for a fun destination to spice up your weekend? Recently moved to a new city and ready to explore?
                    </p>

                </section>
                <section className="box">
                    <p>
                        <b>Day Tripper is here to help!</b>
                    </p>
                    <br />
                    <p>
                        This app lets you search nearby attractions and points of interest to plan out your next getaway. All trips will be within a day's driving distance, so no need to book a hotel. Day Tripper also allows you to save your favorite trips to access anytime!
                    </p>
                    <br />
                    <p>
                        <i>What are you waiting for?</i>
                    </p>
                </section>
                <button
                    className="go-button"
                    onClick={() => this.props.history.push('/tripsearch')}>
                    Let's Go!
                </button><br /><br />
                <div>
                    <img src="https://media.giphy.com/media/Hzw4f1gSqF97i/giphy.gif" alt="Rotating jeep GIF" />
                </div>
            </div>
        )
    }
}

export default HomePage;