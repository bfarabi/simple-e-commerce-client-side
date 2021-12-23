import React from "react";

const Cart = (props) => {
  const cart = props.cart;

  // const total = cart.reduce((total, prd) => total+prd.price, 0);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price * product.quantity || 1;
  }
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }
  const tax = total / 10;
  const grandTotal = total + shipping + tax;
  const formatNumber = (num) => {
    const twoDecimal = num.toFixed(2);
    return Number(twoDecimal);
  };
  return (
    <div>
      <h4>Order summary</h4>
      <p>Order items: {cart.length} </p>
      <p>Product price: $ {formatNumber(total)} </p>
      <p>
        <small> shipping cost : $ {shipping} </small>
      </p>
      <p>
        <small> Tax+VAT: $ {formatNumber(tax)} </small>
      </p>
      <p>Total price : $ {formatNumber(grandTotal)}</p>
      {props.children}
    </div>
  );
};

export default Cart;
