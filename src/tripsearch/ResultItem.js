import React, { Component } from 'react';

class ResultItem extends Component {
    render() {
        return (
            <li key={this.props.key}>
                <h3>{this.props.name}</h3>
                <p>Location: {this.props.location}</p>
                <button> Save Trip </button>
            </li>

        )
    }
}

export default ResultItem;