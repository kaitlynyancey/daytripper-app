import React, { Component } from 'react';

class ResultItem extends Component {
    static defaultProps = {
        img: [{ photo_reference: "" }]
    }

    //default image for location if none exists in google maps database
    state = {
        img_url: "https://img.icons8.com/clouds/100/000000/no-image.png",
    };

    componentDidMount() {
        if (this.props.img[0].photo_reference) {
            const img_ref = this.props.img[0].photo_reference;
            const img_url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${img_ref}&key=${process.env.REACT_APP_PLACES_KEY}`;
            this.setState({
                img_url
            })
        }
    }

    render() {
        return (
            <li key={this.props.id} className="box result-item grow">
                <h3>{this.props.name}</h3>
                <p>Location: {this.props.location}</p>
                
                <br />
                <img src={this.state.img_url} alt={this.props.name} />
                <button
                    onClick={() => this.props.onSave(this.props.id)}
                > More Details</button>
            </li>

        )
    }
}

export default ResultItem;