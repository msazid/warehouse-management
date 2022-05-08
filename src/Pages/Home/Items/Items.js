import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../../Hooks/useData';
import Loading from '../../Shared/Loading/Loading';
import Item from '../Item/Item';
import './Items.css'
const Items = () => {
    const[items] = useData()
    return (
        <div className='row row-cols-1 row-cols-md-3 row-col-lg-3 g-4 container mx-auto'>
                {
                    items.length===0?(<Loading></Loading>):('')
                }
                {
                    items.slice(0,6).map(item => <Item key={item._id} item={item}></Item>)
                }
                <Link className='py-2 my-3 mx-auto myitems-link' to='/allitemsshow'>All Items List</Link>
        </div>
    );
};

export default Items;