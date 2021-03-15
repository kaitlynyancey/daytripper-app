import React, { Component } from 'react';
import TripsContext from '../TripsContext';
import TripItem from './TripItem';

class SavedTrips extends Component {
    static contextType = TripsContext;

    render() {
        const { trips } = this.context
        return (
            <div className='saved-trips'>
                <div className='center'>
                    <h2>Your Trip Diary</h2>
                </div>
                <br />
                <section>
                    <ul className='trip-list group-results'>
                        {trips.map(trip =>
                            <TripItem
                                id={trip.id}
                                {...trip}
                            />)}
                    </ul>
                </section>
                <div className="center">
                    <img src="https://media.giphy.com/media/ZdsGIDYgc2eJAXNukB/giphy.gif" alt="Van driving GIF" />
                </div>
            </div>
        )
    }
}

export default SavedTrips;