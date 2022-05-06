import React from 'react';
import useData from '../../Hooks/useData';
import AllItemShow from './AllItemShow';

const AllItemsShow = () => {
    const[items] = useData()
    return (
        <div>
            <div className='row row-cols-1 row-cols-md-2 row-col-lg-3 g-4 container mx-auto'>
                {
                    items.map(item=><AllItemShow key={item._id} item={item}></AllItemShow>)
                }
            </div>
        </div>
    );
};

export default AllItemsShow;