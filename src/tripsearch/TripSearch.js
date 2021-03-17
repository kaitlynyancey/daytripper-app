import React, { Component } from 'react';
import ResultItem from './ResultItem';
import TripsContext from '../TripsContext';

class TripSearch extends Component {
    static contextType = TripsContext;

    state = {
        results: [],
        error: null,
        searchMessage: null,
    };

    componentDidMount() {
        this.setState({
            results: this.context.results
        })
    }

    //route to the save page when the trip button is clicked
    handleSave = tripId => {
        this.props.history.push(`/save/${tripId}`)
    }

    //refresh the results and search parameters
    handleReset() {
        this.setState({
            results: [],
        })
    }

    //when the search form is submitted, fetch location's lat and long coordinates from google maps API
    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            results: [],
            searchMessage: <div className="wrapper"><h2>Searching, please wait...</h2></div>,
        })
        const location = e.target.location.value
        const category = e.target.category.value
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_PLACES_KEY}&address=${location}`)
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
                //call the handleSearch function to use the coordinates provided to perform places search
                this.handleSearch(lat, lng, category)
            })
            .catch(error => {
                this.setState({ error })
            })
    }

    //use the google maps places API endpoint to fetch locations based on lat and long coordinates of the inputted destination
    handleSearch(lat, lng, category) {
        const proxy = ` https://murmuring-scrubland-19112.herokuapp.com/`
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.REACT_APP_PLACES_KEY}&location=${lat},${lng}&radius=50000&type=${category}`
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
                    results: data.results,
                    searchMessage: null,
                })
                this.context.updateResults(data.results)
            })
            .catch(error => {
                this.setState({ error })
            })
    }


    render() {
        return (
            <div className="trip-search">
                <section className="wrapper box" >
                    <h3>
                        Where should we go today?
                    </h3>
                    <p>
                        Please enter in your location and choose one category from the drop down list. Then hit the "Let's Go!" button to complete your search. You can click the "more details" button on any of the results for more information.
                    </p>
                    <br />
                    <form
                        className="trip-search-form"
                        onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="location">My Location:   </label>
                            <input type="text" id="location" name="location" required /><br />
                        </div>
                        <div>
                            <label htmlFor="category">Category:    </label>
                            <select name="category" id="category" required>
                                <option value="tourist_attraction" default>Tourist Attraction</option>
                                <option value="museum" default>Museum</option>
                                <option value="park" default>Park</option>
                                <option value="zoo" default>Zoo</option>
                                <option value="stadium" default>Stadium/Sports Arena</option>
                                <option value="shopping_mall" default>Shopping Mall</option>
                                <option value="restaurant" default>Restaurant</option>
                            </select>
                        </div>
                        <br />
                        <div>
                            <button type="submit"
                                className="search-button"
                            >Let's Go!</button>
                            <button type="reset"
                                onClick={() => this.handleReset()}>
                                Reset
                                </button>
                        </div>
                    </form>
                </section>

                <div className="results">
                    {this.state.searchMessage}
                    {this.state.results.length > 0 &&
                        <>
                            <br />
                            <div className="wrapper">
                                <h2>Here are your results:</h2>
                            </div>
                            <br />
                            <div className="results-wrapper">
                                <ul className="results-list group-results">
                                    {this.state.results.map(result =>
                                        <ResultItem
                                            id={result.place_id}
                                            name={result.name}
                                            location={result.vicinity}
                                            onSave={this.handleSave}
                                            img={result.photos}
                                        />)}
                                </ul>
                            </div>
                        </>}
                    <div className="center">
                        <img src="https://media.giphy.com/media/35RaQ1bNf70zzLoTCM/giphy.gif" alt="Spinning car GIF" />
                    </div>
                </div>
            </div>
        );
    }
}

export default TripSearch;