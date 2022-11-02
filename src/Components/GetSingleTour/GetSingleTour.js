import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const GetSingleTour = () => {
    const { id } = useParams();
    const [singleTour, setSingleTour] = useState([]);
    const [loading, setLoading] = useState(true);

    // for redirect
    const location = useLocation()
    const cut = location.pathname.split('/');
    console.log(cut[1]);

    useEffect(() => {
        fetch(`https://free-tour-management-api.onrender.com/tours/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleTour(data.data)
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return <div className='mx-auto'><Loading /></div>
    }
    const { name, image, price, viewCount } = singleTour;


    return (
        <div className='w-full mx-auto'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl md:m-12 my-10">
                <figure><img src={image} alt={`${name}-pic`} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name : {name}</h2>
                    <p><span className='text-xl font-semibold'>Visitor</span> : <span className='text-xl font-bold'>{viewCount}</span></p>
                    <p><span className='text-xl font-semibold'>Price</span> : <span className='text-xl font-bold'>${price}</span></p>
                    <div className="card-actions justify-end">
                        <Link to={`/${cut[1]}`} className="btn btn-primary">Go Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetSingleTour;