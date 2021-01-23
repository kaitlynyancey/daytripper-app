import React, { Component } from 'react';
import Rating from '../rating/Rating';

class SavedTrips extends Component {
    render() {
        return (
            <div className='saved-trips'>
                <h3>Your Trip Diary</h3>
                <section>
                    <ul>
                        <li>
                            <h3>Trip #1</h3>
                            <p>Location: City, State</p>
                            <p>Notes: This was a great trip! Next time leave a little earlier to beat the rush. Would highly recommend.</p>
                            <p>Rating:<Rating value='4' />
                            </p>
                            <button>Delete</button>
                        </li>
                        <li>
                            <h3>Trip #2</h3>
                            <p>Location: City, State</p>
                            <p>Notes: Amazing place! Already planning a trip to go again next month!</p>
                            <p>Rating:<Rating value='5' />
                            </p>
                            <button>Delete</button>
                        </li>
                        <li>
                            <h3>Trip #3</h3>
                            <p>Location: City, State</p>
                            <p>Notes: A unique trip. Drive was a little long. Probably will not go again.</p>
                            <p>Rating:<Rating value='3' />
                            </p>
                            <button>Delete</button>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default SavedTrips;