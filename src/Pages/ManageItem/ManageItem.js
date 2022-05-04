import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ManageItem = () => {
    const [detail, setDetail] = useState([]);
    const {id} = useParams();
    const url = (`http://localhost:5000/item/${id}`);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data => setDetail(data))
    },[]);
    const handleDeliver = () => {
            let deliver = 1;
            let quantityNumber = parseInt(detail.quantity)
            let quantity = quantityNumber -deliver;

            let newQuantity = {
                _id : detail._id,
                name: detail.name,
                quantity: quantity,
            }
            const url = `http://localhost:5000/item/${id}`
            fetch(url,{
                method:'PUT',
                headers:{
                    "content-type":'application/json'
                },
                body:JSON.stringify(newQuantity)
            }).then(res => res.json())
              .then(data => {
                  if(data.modifiedCount > 0){
                      setDetail(newQuantity)
                      console.log('data success',data);
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
            _id : detail._id,
            name: detail.name,
            quantity: quantity,
        }
        const url = `http://localhost:5000/item/${id}`
        fetch(url,{
            method:'PUT',
            headers:{
                "content-type":'application/json'
            },
            body:JSON.stringify(newQuantity)
        }).then(res => res.json())
          .then(data => {
              if(data.modifiedCount > 0){
                  setDetail(newQuantity)
                  console.log('data success',data);
                  e.target.reset();
              }
            })
    }
    return (
        <div>
            <h1>{detail.name}</h1>
            <p>{detail.quantity}</p>
            <button onClick={()=> handleDeliver()}>Deliver</button>
            <form action="" onSubmit={newStock}>
                <input type="number" name='number' required/> <br />
                <input type="submit" value="Restock"/>
            </form>
        </div>
    );
};

export default ManageItem;