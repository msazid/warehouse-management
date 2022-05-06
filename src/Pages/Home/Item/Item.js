import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const navigate = useNavigate()
    const navigateToPage = (id) => {
        navigate(`/manageitem/${id}`)
    }
    return (
        <div className="col">
            <div className="card h-100 p-2">
                <img src={item.picture} className="card-img-top w-50 h-50 mx-auto img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className='card-title'>{item.name}</h5>
                    <p className="card-text">
                        <span>Brand: {item.company}</span> <br />
                        <span>Quantity: {item.quantity}</span>
                    </p>
                    <button className='btn' onClick={() => navigateToPage(item._id)}>Stock Update</button>
                </div>
            </div>
        </div>
    );
};

export default Item;