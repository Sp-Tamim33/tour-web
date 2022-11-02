import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading'
import AllTour from './AllTour'

const AllTours = () => {
    const [allTours, setAllTours] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://free-tour-management-api.onrender.com/tours')
            .then(res => res.json())
            .then(data => {
                setAllTours(data.data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div className='mx-auto'><Loading /></div>
    }


    return (
        <div>
            <h1 className='text-center text-2xl py-4 font-semibold underline'>Let's Checkout All Tours</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-12'>
                {
                    allTours.map(tour => <AllTour key={tour._id} tour={tour}></AllTour>)
                }
            </div>
        </div>
    );
};

export default AllTours;