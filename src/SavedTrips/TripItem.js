import React, { Component } from 'react';
import Rating from '../rating/Rating';
import TripsContext from '../TripsContext';

class TripItem extends Component {
    static contextType = TripsContext
    
    handleClickDelete = e => {
        e.preventDefault()
        const tripId = this.props.id
        this.context.deleteTrip(tripId)
    }

    render() {
        return (
            <li key={this.props.id}>
                <h3>{this.props.name}</h3>
                <p>Location: {this.props.location}</p>
                <p>Notes: {this.props.notes}</p>
                <p>Rating:</p>
                <Rating value={this.props.rating} />
                <button
                    onClick={this.handleClickDelete}
                >
                    Delete</button>
            </li>

        )
    }
}

export default TripItem;