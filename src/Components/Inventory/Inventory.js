import React from 'react';
import fakeData from './../../fakeData/index';

const Inventory = () => {
    const handleProduct = () => {
        const product = {};
    fetch('https://secure-garden-38117.herokuapp.com/addProduct',{
        method:'POST',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify(product)
    })
    }
    return (
        <div>
        <form action="">
        <p><span>Name: </span><input type="text" /></p>
        <p><span>Price: </span><input type="text" /></p>
        <p><span>quantity: </span><input type="text" /></p>
        <p><span>Product image </span><input type="file" /></p>

        <button onClick={handleProduct}>Add product</button></form>
        </div>
    );
};

export default Inventory;