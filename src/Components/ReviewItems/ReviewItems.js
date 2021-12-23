import React from "react";

const ReviewItems = (props) => {
  const { name, quantity, key, price, img } = props.product;
  
  return (
    <div  className="product">
    <div>
        <img src={img} alt="" />
      </div>
      <div>
      <h4 className="product-name">{name}</h4>
      <p>Quantity: {quantity}</p>
      <p>
        <small>$ {price}</small>
      </p>
      <br />
      <button onClick={() => props.removeProduct(key)} className="main-button">
        Remove Item
      </button>
      </div>
    </div>
  );
};

export default ReviewItems;
