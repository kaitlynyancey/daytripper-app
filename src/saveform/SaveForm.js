import React, { Component } from 'react';

class SaveForm extends Component {
    render() {
        return (
            <div className='save-form'>
                <h3>Save this Trip?</h3>
                <form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" defaultValue="Option #1" /><br />
                    </div>
                    <div>
                        <label htmlFor="location">Location:</label>
                        <input type="text" name="location" id="location" defaultValue="City, State" /><br />
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
                    onClick={() => this.props.history.goBack()}
                    >Submit / Save</button>
                    <button
                    className="back-button"
                    onClick={() => this.props.history.goBack()}
                    > Go Back</button>
                </form>
            </div>
        )
    }
}

export default SaveForm;