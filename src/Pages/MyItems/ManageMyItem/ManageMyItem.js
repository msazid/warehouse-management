import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ManageMyItem = () => {
    const [detail, setDetail] = useState([]);
    const { id } = useParams();
    const url = (`http://localhost:5000/item/${id}`);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDetail(data)
            })
    }, [url]);
    const handleDeliver = () => {
        let deliver = 1;
        let quantityNumber = parseInt(detail.quantity)
        let quantity = quantityNumber - deliver;

        let newQuantity = {
            _id: detail._id,
            name: detail.name,
            quantity: quantity,
            company: detail.company,
            picture: detail.picture,
            description: detail.description
        }
        const url = `http://localhost:5000/item/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(newQuantity)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setDetail(newQuantity)
                    console.log('data success', data);
                }
            })
    };
    const newStock = e => {
        e.preventDefault();
        let quantityPrevious = detail.quantity;
        let quantityPreviousNum = parseInt(quantityPrevious);
        let taken = parseInt(e.target.number.value);
        let quantity = quantityPreviousNum + taken;

        let newQuantity = {
            _id: detail._id,
            name: detail.name,
            quantity: quantity,
            company: detail.company,
            picture: detail.picture,
            price: detail.price,
            description: detail.description
        }
        const url = `http://localhost:5000/item/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(newQuantity)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setDetail(newQuantity)
                    console.log('data success', data);
                    e.target.reset();
                }
            })
    }

    return (
        <div>
            <div className="container my-5 card border h-100">
                <div className='row p-3 d-flex'>
                    <div className="col-12 col-md-6">
                        <img src={detail.picture} className='img-fluid' alt="itemPicture" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h1 className="card-title">{detail.name}</h1>
                        <p className='card-text'>{detail.description}</p>
                        <p><strong>Brand/Supplier :</strong> <span className="card-text">{detail.company}</span></p>
                        <p><strong>Price:</strong> <span className="card-text">{detail.price}</span></p>
                        <p><strong>Quantity:</strong> <span className="card-text">{detail.quantity}</span></p>
                        <div className='d-flex justify-content-center'>
                        <div className="d-flex">
                            <button className='deliver-btn me-1' onClick={() => handleDeliver()}>Deliver</button>
                            <form onSubmit={newStock}>
                                <span className='d-flex'>
                                    <input type="number" name='number' required /> <br />
                                    <input className='btn ms-1' type="submit" value="Restock" /></span>
                            </form>
                        </div>
                        </div>
                        <Link className='myitems-link d-block py-1 mt-2 w-100' to='/manageitems'>Manage Items</Link>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ManageMyItem;