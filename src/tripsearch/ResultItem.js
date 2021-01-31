import React, { Component } from 'react';

class ResultItem extends Component {

    render() {
        return (
            <li key={this.props.id}>
                <h3>{this.props.name}</h3>
                <p>Location: {this.props.location}</p>
                <button
                onClick={() => this.props.onSave(this.props.id)}
                > Save Trip </button>
            </li>

        )
    }
}

export default ResultItem;