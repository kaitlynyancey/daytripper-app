import React from 'react';

const TripsContext = React.createContext({
    trips: [],
    results: [],
    updateResults: () => {},
    addTrip: () => {},
    deleteTrip: () => {},
})

export default TripsContext