import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [items,setItems]=useState([])
    useEffect(()=>{
        const handleItems = async () => {
            const email = user.email;
            const url =  `http://localhost:5000/additem?email=${email}`
            const {data} = await axios.get(url)
            setItems(data);
        }
        handleItems();
    },[user.email])

    let deleteItem = id => {
        let remain = items.filter(item=>item._id !==id);
        setItems(remain)
    }
    return (
        <div>
            <div className='row row-cols-1 row-cols-md-3 g-4 container mx-auto'>
                    <h1>{user.email}</h1>
                    {
                       items.map(item=><MyItem key={item._id} item={item} deleteItem={deleteItem}></MyItem>) 
                    }
            </div>
        </div>
    );
};

export default MyItems;