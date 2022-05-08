import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import useData from '../../../Hooks/useData';

const MyItems = () => {

    const [allData, setAllData] = useData()

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete ?')
        if (proceed) {
            const url = (`https://afternoon-harbor-83297.herokuapp.com/item/${id}`)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = allData.filter(data => data._id !== id);
                    setAllData(remaining)
                })
        }
    }

    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const handleItems = async () => {
            const email = user?.email;
            const url = `https://afternoon-harbor-83297.herokuapp.com/additem?email=${email}`
            const { data } = await axios.get(url)
            setItems(data);
        }
        handleItems();
    }, [user?.email, allData]);

    const navigate = useNavigate()
    const navigateToPage = (id) => {
        navigate(`/managemyitem/${id}`)
    }

    return (
        <div className='container my-5'>
            <h5 className='py-5'>This All items are added by this id : <span className='text-primary'>{user?.email}</span></h5>
            <table className=' table border'>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Company</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Update Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(data =>
                            <tr className='border'>
                                <td className='table-text w-25 border'>{data.name}</td>
                                <td className='table-text border'>{data.company}</td>
                                <td className='table-text'>{data.quantity}</td>
                                <td>
                                    <button onClick={() => handleDelete(data._id)}>Delete</button>
                                </td>
                                <td>
                                    <button onClick={() => { navigateToPage(data._id) }}>Update Stock</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>

    );
};

export default MyItems;