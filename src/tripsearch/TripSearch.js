import React, { Component } from 'react';

class TripSearch extends Component {
    render() {
        return (
            <div className='trip-search'>
                <h3>
                    Where should we go today?
                </h3>
                <form>
                    <div>
                        <label for="location">Location:</label><br />
                        <input type="text" id="location" name="location" /><br />
                    </div>
                    <div>
                        <p> Category (optional):</p>
                        <input type="checkbox" id="category1" name="category1" value="museum" />
                        <label for="category1"> Museum </label><br />
                        <input type="checkbox" id="category2" name="category2" value="park" />
                        <label for="category2"> Park </label><br />
                        <input type="checkbox" id="category3" name="category3" value="landmark" />
                        <label for="category3"> Landmark / Historical Site </label><br />
                        <input type="checkbox" id="category4" name="category4" value="zoo" />
                        <label for="category4"> Zoo / Aquarium </label><br />
                        <input type="checkbox" id="category5" name="category5" value="shopping" />
                        <label for="category5"> Shopping </label><br />
                        <input type="checkbox" id="category6" name="category6" value="outdoor" />
                        <label for="category6"> Outdoor Activities / Sports </label><br />
                        <input type="checkbox" id="category7" name="category7" value="games" />
                        <label for="category7"> Fun / Games</label><br />
                        <input type="checkbox" id="category8" name="category8" value="spa" />
                        <label for="category8"> Spas / Wellness</label><br />
                    </div>
                    <div>
                        <button type="submit">Let's Go!</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default TripSearch;