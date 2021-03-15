import React, { Component } from 'react';
import Rating from '../rating/Rating';
import TripsContext from '../TripsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPencilAlt, faSmile } from '@fortawesome/free-solid-svg-icons';

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
        const pin = <FontAwesomeIcon icon={faMapMarkerAlt} />
        const pen = <FontAwesomeIcon icon={faPencilAlt} />
        const smile = <FontAwesomeIcon icon={faSmile} />

        const mapURL = `https://www.google.com/maps/search/?api=1&query=${this.props.location}`

        return (
            <TripsContext.Consumer>
                {(context) => (
                    <li key={this.props.id} className="box saved-item grow">
                        <h3>{this.props.name}</h3>
                        <br />
                        <p>{pin} Location: <a href={mapURL} target="_blank" rel="noreferrer">{this.props.location}</a></p>
                        <br />
                        <p>{pen} Notes: {this.props.notes}</p>
                        <br />
                        <div className="group-rating">
                            <p>{smile} Rating: </p>
                            <Rating value={this.props.rating} />
                        </div>
                        <div className="center">
                            <button
                                onClick={() => {
                                    handleClickDelete(
                                        this.props.id,
                                        context.deleteTrip,
                                    )
                                }}
                            >
                                Delete</button>
                        </div>
                    </li>
                )}
            </TripsContext.Consumer>


        )
    }
}

export default TripItem;