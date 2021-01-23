import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <ul>
                <Link to='/'>
                    About
                </Link>
                <Link to='tripsearch'>
                    Explore
                </Link>
                <Link to='savedtrips'>
                    Saved Trips
                </Link>
            </ul>
        </nav>
    )
} 