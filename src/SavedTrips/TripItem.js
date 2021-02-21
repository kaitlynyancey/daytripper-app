import React, { Component } from 'react';
import Rating from '../rating/Rating';
import TripsContext from '../TripsContext';

function handleClickDelete(tripId, callback) {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/trips/${tripId}`, {
        method: 'DELETE',
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
        })
        .then(response => {
            callback(tripId)
        })
        .catch(error => {
            console.error(error)
        })
}

class TripItem extends Component {
    static contextType = TripsContext

    render() {
        return (
            <TripsContext.Consumer>
                {(context) => (
                    <li key={this.props.id}>
                        <h3>{this.props.name}</h3>
                        <p>Location: {this.props.location}</p>
                        <p>Notes: {this.props.notes}</p>
                        <p>Rating:</p>
                        <Rating value={this.props.rating} />
                        <button
                            onClick={() => {
                                handleClickDelete(
                                    this.props.id,
                                    context.deleteTrip,
                                )
                            }}
                        >
                            Delete</button>
                    </li>
                )}
            </TripsContext.Consumer>


        )
    }
}

export default TripItem;