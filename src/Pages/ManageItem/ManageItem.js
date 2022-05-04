import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ManageItem = () => {
    const [detail, setDetail] = useState([]);
    const { id } = useParams();
    const url = (`http://localhost:5000/item/${id}`);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, []);
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
        <div className='d-flex justify-content-center align-items-center'>
            <div className="card mb-3" style={{maxWidth:'540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={detail.picture} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{detail.name}</h5>
                            <p className="card-text text-start">{detail.description}</p>
                            <p className="card-text">{detail.quantity}</p>
                            <button onClick={() => handleDeliver()}>Deliver</button>
                            <form onSubmit={newStock}>
                                <input type="number" name='number' required /> <br />
                                <input type="submit" value="Restock" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;