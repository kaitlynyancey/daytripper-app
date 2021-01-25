import React, { Component } from 'react';
import ResultItem from './ResultItem';

class TripSearch extends Component {
    state = {
        results: [
            { name: '' },
        ],
        error: null,
    };

    handleSubmit = e => {
        e.preventDefault()
        const location = e.target.location.value
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
                this.handleSearch(lat, lng)
            })
            .catch(error => {
                this.setState({ error })
            })
    }

    handleSearch(lat, lng) {
        console.log(lat)
        console.log(lng)
        const proxy = `https://cors-anywhere.herokuapp.com/`
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBW4Nxxm_Zxvgyspb4DXQN5Z2mKJ7YdD54&location=${lat},${lng}&radius=50000&type=museum`
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
                console.log(data.results)
                this.setState({
                    results: data.results
                })

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
                        <input type="checkbox" id="category1" name="category1" value="museum" />
                        <label htmlFor="category1"> Museum </label><br />
                        <input type="checkbox" id="category2" name="category2" value="park" />
                        <label htmlFor="category2"> Park </label><br />
                        <input type="checkbox" id="category3" name="category3" value="landmark" />
                        <label htmlFor="category3"> Landmark / Historical Site </label><br />
                        <input type="checkbox" id="category4" name="category4" value="zoo" />
                        <label htmlFor="category4"> Zoo / Aquarium </label><br />
                        <input type="checkbox" id="category5" name="category5" value="shopping" />
                        <label htmlFor="category5"> Shopping </label><br />
                        <input type="checkbox" id="category6" name="category6" value="outdoor" />
                        <label htmlFor="category6"> Outdoor Activities / Sports </label><br />
                        <input type="checkbox" id="category7" name="category7" value="games" />
                        <label htmlFor="category7"> Fun / Games</label><br />
                        <input type="checkbox" id="category8" name="category8" value="spa" />
                        <label htmlFor="category8"> Spas / Wellness</label><br />
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
                                key={result.place_id}
                                name={result.name}
                                location={result.vicinity}
                            />)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TripSearch;