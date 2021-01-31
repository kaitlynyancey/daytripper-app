import React, { Component } from 'react';
import TripsContext from '../TripsContext';

class SaveForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: "",
            location: "",

        }
    }
    static contextType = TripsContext;

    componentDidMount() {
        const tripId = this.props.match.params.tripId
        const trip = this.context.results.find(itm => itm.place_id === tripId)
        this.setState({
            id: tripId,
            name: trip.name,
            location: trip.vicinity
        })
    }

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
        this.props.history.push('/savedtrips')
    }

    render() {
        return (
            <div className='save-form'>
                <h3>Save this Trip?</h3>
                <form
                    className='save-form'
                    onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" defaultValue={this.state.name} /><br />
                    </div>
                    <div>
                        <label htmlFor="location">Location:</label>
                        <input type="text" name="location" id="location" defaultValue={this.state.location} /><br />
                    </div>
                    <div>
                        <label htmlFor="notes">Trip Notes:</label>
                        <textarea name="notes" id="notes" rows="4"></textarea><br />
                    </div>
                    <div>
                        <label htmlFor="rating">Rating:</label>
                        <input
                            type='number'
                            name='rating'
                            id='rating'
                            min='1'
                            max='5'
                            required
                        />
                    </div>
                    <br />
                    <button type="submit"
                        className="submit-button"
                    >Submit / Save</button>
                    <button
                        className="back-button"
                        onClick={() => this.props.history.goBack()}
                    > Cancel</button>
                </form>
            </div>
        )
    }
}

export default SaveForm;