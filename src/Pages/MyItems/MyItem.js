import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
const MyItem = ({item}) => {
    return (
        <div>
             <div class="col">
            <div class="card h-100 p-2">
                <img src={item.picture} class="card-img-top w-50 h-50 mx-auto img-fluid" alt="..."/>
                    <div class="card-body">
                        <h5 className='card-title'>{item.name}</h5>
                        <p className="card-text">
                            <span>Brand: {item.company}</span> <br />
                            <span>Quantity: {item.quantity}</span>
                        </p>
                        <Link className='btn' to='/manageitem'>Stock Update</Link>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default MyItem;