import React, { Component } from 'react';
import Rating from '../rating/Rating';

class TripItem extends Component {
    render() {
        return (
            <li key={this.props.key}>
                <h3>{this.props.name}</h3>
                <p>Location: {this.props.location}</p>
                <p>Notes: {this.props.notes}</p>
                <p>Rating:</p>
                <Rating value={this.props.rating} />
                <button>Delete</button>
            </li>

        )
    }
}

export default TripItem;