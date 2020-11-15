import React, {useEffect, useState } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';
export default props => {
    const [product, setProduct] = useState({});
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/'+props.id)
            .then(res => setProduct(res.data))
    },[])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                navigate('/product')
            })
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <small>Description: {product.desc}</small>
            <br />
            <Link to={'/product/' + product._id + '/edit'}>
                Edit
            </Link>
            <br />
            <button onClick={(e)=>{deleteProduct(product._id)}}>
                Delete
            </button>
        </div>
    )
}