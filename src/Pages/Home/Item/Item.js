import React from 'react';
import {useNavigate } from 'react-router-dom';
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
                        <span>Supplier: {item.company}</span> <br />
                        <span>Quantity: {item.quantity} <span className='text-muted'>pis</span></span>
                    </p>
                    <button className='btn' onClick={() => navigateToPage(item._id)}>Stock Update</button>
                </div>
            </div>
        </div>
    );
};

export default Item;