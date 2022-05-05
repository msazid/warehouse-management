import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{ 
        console.log(data)
        const url = 'http://localhost:5000/item'
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        }) 
    };

    return (
        <div className='w-50 mx-auto'>
        <h1>Add New Item</h1>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input required placeholder='item name' {...register("name")} />
            <input className='my-2' required placeholder='picture url' {...register("picture")} />
            <textarea rows="2" cols="23" placeholder='description' {...register("description")} />
            <input className='my-2' required type="number" {...register("quantity")} />
            <input  className='my-2' type="submit" />
        </form>
        </div>
    );
};

export default AddItem;