import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';
import './style.css'

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
        <>  
        <h3>Want to add new items ? <Link to='/additem'>Add Item</Link></h3>      
        <table className='table container border'>
            <thead>
                <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Company</th>
                    <th scope="col">Quantiy</th>
                    <th scope="col">Delete Product</th>
                </tr>
            </thead>
            <tbody>
            {
                allData.map(data =>
                    <tr className='border'>
                        <th scope="row">{data.name}</th>
                        <td>{data.company}</td>
                        <td>{data.quantity}</td>
                        <td><button onClick={()=>handleDelete(data._id)}>Delete</button></td>
                    </tr>
                )
            }
            </tbody>
        </table>
        </>
    );
};

export default ManageItems;