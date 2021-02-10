import React, { Component } from 'react';

class ResultItem extends Component {
    static defaultProps = {
        img: [{ photo_reference: "" }]
    }

    state = {
        img_url: 'https://img.icons8.com/clouds/100/000000/no-image.png',
    };

    componentDidMount() {
        if (this.props.img[0].photo_reference) {
            const img_ref = this.props.img[0].photo_reference;
            const img_url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${img_ref}&key=${process.env.REACT_APP_API_KEY}`;
            this.setState({
                img_url
            })
        }
    }

    render() {
        return (
            <li key={this.props.id}>
                <h3>{this.props.name}</h3>
                <p>Location: {this.props.location}</p>
                <button
                    onClick={() => this.props.onSave(this.props.id)}
                > Save Trip </button>
                <img src={this.state.img_url} alt={this.props.name} />
            </li>

        )
    }
}

export default ResultItem;