import React, { Component } from 'react';
import TripsContext from '../TripsContext';
import TripItem from './TripItem';

class SavedTrips extends Component {
    static contextType = TripsContext;

    render() {
        const { trips } = this.context
        console.log(this.context.trips)
        return (
            <div className='saved-trips'>
                <h3>Your Trip Diary</h3>
                <section>
                    <ul className='trip-list'>
                        {trips.map(trip => 
                            <TripItem 
                                id={trip.id}
                                {...trip}
                            />)}
                    </ul>
                </section>
            </div>
        )
    }
}

export default SavedTrips;