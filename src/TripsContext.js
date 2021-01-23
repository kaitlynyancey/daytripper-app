import React from 'react';

const TripsContext = React.createContext({
    trips: [],
    addTrip: () => {},
    deleteTrip: () => {},
})

export default TripsContext