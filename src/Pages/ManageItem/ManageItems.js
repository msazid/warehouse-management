import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';
import './style.css'
import deleteLogo from '../../Assets/Logo/delete.png'

const ManageItems = () => {
    const [allData,setAllData] = useData()
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete ?')
        if(proceed){
            const url = (`http://localhost:5000/item/${id}`)
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = allData.filter(data => data._id !== id);
                setAllData(remaining)
            })
        }
    }
    return (
        <div className='container'>
            <h2 className='my-3'>Manage The Items list</h2>
            <h5>Want to add new items <Link to='/additem'>Click Here</Link></h5>      
        <table className='table border'>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Company</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
            {
                allData.map(data =>
                    <tr className='border'>
                        <td className='table-text w-25 border'>{data.name}</td>
                        <td className='table-text border'>{data.company}</td>
                        <td className='table-text'>{data.quantity}</td>
                        <td>
                            <img className='deleteBtn img-fluid' width={20} onClick={()=>handleDelete(data._id)} src={deleteLogo}alt="" />
                        </td>
                    </tr>
                )
            }
            </tbody>
        </table>
        </div>
    );
};

export default ManageItems;