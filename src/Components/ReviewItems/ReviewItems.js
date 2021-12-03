import React from 'react';

const ReviewItems = (props) => {
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle ={
        borderBottom: "1px solid lightgrey",
        marginBottom: "5px",
        marginLeft: "200px",
        paddingBottom: "5px"
    } 
    return (
        <div style={reviewItemStyle} className="review-item" >
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <br />
            <button
            onClick={()=> props.removeProduct(key)}
             className="main-button">Remove Item</button>
        </div>
    );
};

export default ReviewItems;