import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {

    const [user] = useAuthState(auth);
    const [items,setItems]=useState([]);
    
    useEffect(()=>{
        const handleItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/additem?email=${email}`
            const {data} = await axios.get(url)
            setItems(data);
        }
        handleItems();
    },[user?.email]);


    return (
        <div className=''>
        <h5 className='py-5'>This All items are added by this id : <span className='text-primary'>{user?.email}</span></h5>
            <div className='row row-cols-1 row-cols-md-3 g-4 container mx-auto'>
                    {
                       items.map(item=><MyItem key={item._id} item={item}></MyItem>)
                    }
            </div>
        </div>
    );
};

export default MyItems;