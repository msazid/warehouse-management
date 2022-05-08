import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="d-flex">
            <div className='container'>
               <h1 className='not-found-text-1'>Oops !</h1>
                <h1 className='not-found-text-2'>404 - PAGE NOT FOUND</h1>
                <p className='not-found-text-3'>This page your looking for its not available</p>
                <Link className='not-found-home-link' to='/'>Go To Homepage</Link>
            </div>
        </div>
    );
};

export default NotFound;