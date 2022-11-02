import React from 'react';

const AllTour = ({ tour }) => {
    const { name, image, price, viewCount } = tour;
    return (
        <div className="card card-compact bg-base-100 shadow-xl m-12">
            <figure><img src={image} alt={`${name}-pic`} /></figure>
            <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p><span className='text-xl font-semibold'>Visitor</span> : <span className='text-xl font-bold'>{viewCount}</span></p>
                <p><span className='text-xl font-semibold'>Price</span> : <span className='text-xl font-bold'>{price}</span></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default AllTour;