import React, { useState } from 'react';
import axios from 'axios';
export default () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');

    const onSubmitHander = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            desc
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>Product Manager</h1>
                <form onSubmit={ onSubmitHander }>
                    <p>
                        <label>Title:</label><br/>
                        <input type='text' onChange = {(e)=>setTitle(e.target.value)}/>
                    </p>
                    <p>
                        <label>Price:</label><br/>
                        <input type='text' onChange = {(e)=>setPrice(e.target.value)}/>
                    </p>
                    <p>
                        <label>Description:</label><br/>
                        <input type='text' onChange = {(e)=>setDesc(e.target.value)}/>
                    </p>
                    <input type='submit'/>
                </form>
        </div>
    )
}