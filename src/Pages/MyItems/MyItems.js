import React from 'react';
import useData from '../../Hooks/useData';
import MyItem from './MyItem';

const MyItems = () => {
    const [items] = useData()
    return (
        <div>
            <div className='row row-cols-1 row-cols-md-3 g-4 container mx-auto'>
                {
                    items.map(item => <MyItem key={item._id} item={item}></MyItem>)
                }
        </div>
        </div>
    );
};

export default MyItems;