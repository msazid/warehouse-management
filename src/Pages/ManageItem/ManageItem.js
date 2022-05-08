import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.css'

const ManageItem = () => {
    const [detail, setDetail] = useState([]);
    const { id } = useParams();
    const url = (`https://afternoon-harbor-83297.herokuapp.com/item/${id}`);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
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
        const url = `https://afternoon-harbor-83297.herokuapp.com/item/${id}`
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
        const url = `https://afternoon-harbor-83297.herokuapp.com/item/${id}`
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
        <>
            <h1 className=' my-5 card-title'>Stock Update or Deliver here</h1>
            <div className='d-md-flex justify-content-md-center align-items-center'>
                <div className="card mb-3" style={{ maxWidth: '650px' }}>
                    <div className="row g-0">
                        <div className=" col-md-4  d-md-flex align-items-center">
                            <img src={detail.picture} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{detail.name}</h5>
                                <p className="card-text text-start">{detail.description}</p>
                                <p className="card-text text-start">
                                    <span className="card-text text-start"><strong>Brand:</strong> {detail.company}</span> <br />
                                    <strong>Quantity:</strong> {detail.quantity} <span className="text-muted">piece</span></p>

                                <div className='d-flex justify-content-center'>
                                    <div className='d-flex'>
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
            </div>
        </>
    );
};

export default ManageItem;