import React, { Component } from 'react';

class ResultsPage extends Component {
    render() {
        return (
            <div className='results-page'>
                <h3>
                    Results
      </h3>
                <section>
                    <ul class="group">
                        <li>
                            <h3>Option #1</h3>
                            <p>Location: city, state</p>
                            <p>Driving Time: 30 mins</p>
                            <p>Description: A fun place!</p>
                            <button> Save Trip </button>
                        </li>
                        <li>
                            <h3>Option #2</h3>
                            <p>Location: city, state</p>
                            <p>Driving Time: 20 mins</p>
                            <p>Description: Another fun place!</p>
                            <button> Save Trip </button>
                        </li>
                        <li>
                            <h3>Option #3</h3>
                            <p>Location: city, state</p>
                            <p>Driving Time: 90 mins</p>
                            <p>Description: A cool place!</p>
                            <button> Save Trip </button>
                        </li>
                        <li>
                            <h3>Option #4</h3>
                            <p>Location: city, state</p>
                            <p>Driving Time: 60 mins</p>
                            <p>Description: Another cool place!</p>
                            <button> Save Trip </button>
                        </li>
                        <li>
                            <h3>Option #5</h3>
                            <p>Location: city, state</p>
                            <p>Driving Time: 15 mins</p>
                            <p>Description: The best place!</p>
                            <button> Save Trip </button>
                        </li>
                    </ul>
                </section>
                <button>Go Back</button>
            </div>
        )
    }
}

export default ResultsPage;