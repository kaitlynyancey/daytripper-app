import React, { Component } from 'react';
import ResultItem from './ResultItem';
import TripsContext from '../TripsContext';
import config from '../config';

class TripSearch extends Component {
    static contextType = TripsContext;

    state = {
        results: [],
        error: null,
    };

    componentDidMount() {
        this.setState({
            results: this.context.results
        })
    }
    handleSave = tripId => {
        this.props.history.push(`/save/${tripId}`)
    }

    handleSubmit = e => {
        e.preventDefault()
        const location = e.target.location.value
        const category = e.target.category.value
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDuMDBiIOYB65fuCyPStR1vL6HHvlTd06Y&address=${location}`)
            .then(res => {
                if (!res.ok) {
                    // get the error message from the response,
                    return res.json().then(error => {
                        // then throw it
                        throw error
                    })
                }
                return res.json()
            })
            .then(data => {
                const lat = data.results[0].geometry.location.lat;
                const lng = data.results[0].geometry.location.lng;
                this.handleSearch(lat, lng, category)
            })
            .catch(error => {
                this.setState({ error })
            })
    }

    handleSearch(lat, lng, category) {
        const proxy = `https://cors-anywhere.herokuapp.com/`
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBW4Nxxm_Zxvgyspb4DXQN5Z2mKJ7YdD54&location=${lat},${lng}&radius=50000&type=${category}`
        fetch(proxy + url)
            .then(res => {
                if (!res.ok) {
                    // get the error message from the response,
                    return res.json().then(error => {
                        // then throw it
                        throw error
                    })
                }
                return res.json()
            })
            .then(data => {
                this.setState({
                    results: data.results
                })
                this.context.updateResults(data.results)
            })
            .catch(error => {
                this.setState({ error })
            })
    }


    render() {
        return (
            <div className='trip-search'>
                <h3>
                    Where should we go today?
                </h3>
                <form
                    className='trip-search-form'
                    onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="location">Location:</label><br />
                        <input type="text" id="location" name="location" required /><br />
                    </div>
                    <div>
                        <p> Category (optional):</p>
                        <input type="radio" id="museum" name="category" value="museum" />
                        <label htmlFor="museum"> Museum </label><br />
                        <input type="radio" id="park" name="category" value="park" />
                        <label htmlFor="park"> Park </label><br />
                        <input type="radio" id="tourist_attraction" name="category" value="tourist_attraction" />
                        <label htmlFor="tourist_attraction"> Tourist Attraction </label><br />
                        <input type="radio" id="zoo" name="category" value="zoo" />
                        <label htmlFor="zoo"> Zoo </label><br />
                        <input type="radio" id="shopping_mall" name="category" value="shopping_mall" />
                        <label htmlFor="shopping_mall"> Shopping Mall </label><br />
                        <input type="radio" id="movie_theater" name="category" value="movie_theater" />
                        <label htmlFor="movie_theater"> Movie Theater </label><br />
                        <input type="radio" id="amusement_park" name="category" value="amusement_park" />
                        <label htmlFor="amusement_park"> Amusement Park </label><br />
                        <input type="radio" id="spa" name="category" value="spa" />
                        <label htmlFor="spa"> Spa </label><br />
                    </div>
                    <div>
                        <button type="submit"
                            className="search-button"
                        >Let's Go!</button>
                    </div>
                </form>
                <div className='results'>
                    <h3>Here are your results:</h3>
                    <ul className='results-list'>
                        {this.state.results.map(result =>
                            <ResultItem
                                id={result.place_id}
                                name={result.name}
                                location={result.vicinity}
                                onSave={this.handleSave}
                            />)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TripSearch;