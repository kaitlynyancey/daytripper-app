import React, { Component } from 'react';
import TripsContext from '../TripsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

class SaveForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            location: "",
            mapUrl: "",
        }
    }

    static contextType = TripsContext;

    componentDidMount() {
        if (this.props.match) {
            const tripId = this.props.match.params.tripId
            const trip = this.context.results.find(itm => itm.place_id === tripId)

            this.setState({
                id: tripId,
                name: trip.name,
                location: trip.vicinity,
                mapUrl: `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS_KEY}
                &q=place_id:${tripId}`
            })
        }
    }

    //when form is submitted, update the newTrip object with the inputted values, then pass the newTrip object to the addTrip function to save the trip
    handleSubmit = e => {
        e.preventDefault()
        const newTrip = {
            id: this.state.id,
            name: e.target.name.value,
            location: e.target.location.value,
            notes: e.target.notes.value,
            rating: e.target.rating.value,
        }
        this.context.addTrip(newTrip)
        //return to the search results page after form is submitted
        this.props.history.push('/tripsearch')
    }

    render() {
        const pin = <FontAwesomeIcon icon={faMapMarkerAlt} />

        return (
            <div className="save-page">
                <div className="center">
                    <h2>{pin} {this.state.name}</h2>
                </div>
                <br />
                <div className="wrapper box">
                    <form
                        className="save-form"
                        onSubmit={this.handleSubmit}>
                        <h3>Save this Trip?</h3>
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input type="text" name="name" id="name" defaultValue={this.state.name} /><br />
                        </div>
                        <div>
                            <label htmlFor="location">Location: </label>
                            <input type="text" name="location" id="location" defaultValue={this.state.location} /><br />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="notes">Trip Notes (optional):</label><br />
                            <textarea name="notes" id="notes" rows="4"></textarea><br />
                        </div>
                        <div>
                            <label htmlFor="rating">Rating (between 1 to 5 stars): </label>
                            <select
                                name="rating"
                                id="rating"
                                required
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        <button type="submit"
                            className="submit-button"
                        >Submit / Save</button>
                    </form>
                    <button
                            className="back-button"
                            onClick={() => this.props.history.goBack()}
                        > Cancel</button>
                </div>
                <br />
                <div className="center">
                    <iframe
                        title="map"
                        width="100%"
                        height="400px"
                        frameBorder="0" style={{ border: 0 }}
                        src={this.state.mapUrl} allowFullScreen>
                    </iframe>
                </div>

            </div>
        )
    }
}

export default SaveForm;