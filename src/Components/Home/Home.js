import React from 'react';
import { Link } from 'react-router-dom';
import HomePic from '../../assets/homePic.jpg'

const Home = () => {
    return (
        <div className="hero min-h-[80vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={HomePic} className="max-w-sm rounded-lg shadow-2xl" alt='TravelPhoto' />
                <div>
                    <h1 className="text-3xl font-bold">Welcome To Tour Website</h1>
                    <p className="py-6 text-xl">This is a website for finding best tour places in the World. Use header menu for tour places</p>
                    <Link to="all-tours" className='btn bg-cyan-400 text-lg border-2'>See All Tours</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;