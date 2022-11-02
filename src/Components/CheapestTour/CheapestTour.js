import React, { useEffect, useState } from 'react';
import AllTour from '../AllTour/AllTour';
import Loading from '../Loading/Loading';

const CheapestTour = () => {
    const [cheapestTour, setCheapestTour] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://free-tour-management-api.onrender.com/tour/cheapest')
            .then(res => res.json())
            .then(data => {
                setCheapestTour(data.data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div className='mx-auto'><Loading /></div>
    }


    return (
        <div>
            <h1 className='text-center text-2xl py-4 font-semibold underline'>Let's Checkout Cheapest Tours</h1>
            <div className='grid grid-cols-3 mx-12'>
                {
                    cheapestTour.map(tour => <AllTour key={tour._id} tour={tour}></AllTour>)
                }
            </div>
        </div>
    );
};

export default CheapestTour;