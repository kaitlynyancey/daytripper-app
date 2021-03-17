import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faCar, faMapSigns } from '@fortawesome/free-solid-svg-icons';



export default function Nav() {
    //get font awesome icons
    const search = <FontAwesomeIcon icon={faMapSigns} />
    const map = <FontAwesomeIcon icon={faMapMarkedAlt} />
    const car = <FontAwesomeIcon icon={faCar} />

    return (
            <div className="group-header">
                <h1>Day Tripper</h1>
                <nav className="group-nav">
                    <div>
                        <span>
                            {car}
                        </span>
                        <Link to='/'>
                            About
                    </Link>
                    </div>
                    <div>
                        <span>
                            {search}
                        </span>
                        <Link to='tripsearch'>
                            Explore
                    </Link>
                    </div>
                    <div>
                        <span>
                            {map}
                        </span>
                        <Link to='/savedtrips'>
                            Saved Trips
                    </Link>
                    </div>
                </nav>
            </div>
    )
} 