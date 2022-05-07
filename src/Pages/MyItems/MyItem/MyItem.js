import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyItem = ({item}) => {

    const navigate = useNavigate()
    const navigateToPage = (id) => {
        navigate(`/managemyitem/${id}`)
    }

    return (
        <div>
                <div className="col">
                <div className="card h-100 p-2">
                    <img src={item.picture} className="card-img-top w-50 h-50 mx-auto" alt="..." />
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
        </div>
    );
};

export default MyItem;