import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div>
            <h1>All Products:</h1>
            {props.product.map((item, idx)=> {
                return <p key={idx}>
                            <Link to={"/product/" + item._id}>
                                {item.title}
                            </Link>
                            <button onClick={(e)=>{deleteProduct(item._id)}}>
                                Delete
                            </button>
                        </p>
            })}
        </div>
    )
}