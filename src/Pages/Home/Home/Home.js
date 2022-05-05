import React from 'react';
import { Link } from 'react-router-dom';
import Items from '../Items/Items';
import './Home.css'

const Home = () => {

    return (
        <div>
            <div className='hero-section d-flex align-items-center justify-content-center'>
                <div className='container'>
                    <h1 className='banner-title text-center text-light'>Welcome to <span className="text-color">MS Grocery</span> Warehouse</h1>
                    <p className='banner-text text-light'>We'll never walk alone.You can easily update or mange the item list. <br /> Facing any problem feel free to give us any king of feedback.We'll  <br />always there for you and want to hare from you</p>
                    <span className='d-flex justify-content-center'>
                        <Link className='btn-banner me-2' to='/manageitems'>Manage Item</Link>
                        <Link className='btn-banner' to='/additems'>Add Item</Link>
                    </span>
                </div>
            </div>
            <div className="container my-3">
                <h1 className='text-center'>Product List </h1>
            </div>
            <Items></Items>
        </div>
    );
};

export default Home;