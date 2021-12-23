import React from "react";
import { useState, useEffect } from "react";
import {
  removeFromDatabaseCart,
  getDatabaseCart,
  processOrder,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItems from "../ReviewItems/ReviewItems";
import happyImage from "../../images/giphy.gif";
import { useNavigate } from "react-router";
import loadingGif from "../../images/loadingGig.gif";
import "./Review.css";

const Review = () => {
  let navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleProceedCheckout = () => {
    navigate("/shipment");
  };
  const removeProduct = (productKeys) => {
    const newCart = cart.filter((pd) => pd.key !== productKeys);
    setCart(newCart);
    removeFromDatabaseCart(productKeys);
  };

  useEffect(() => {
    //cart
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    fetch("https://secure-garden-38117.herokuapp.com/productsByKeys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productKeys),
    })
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        setLoading(false);
      });

    // const cartProduct = productKeys.map((key) => {
    //   const product = fakeData.find((pd) => pd.key === key);
    //   product.quantity = savedCart[key];
    //   return product;
    // });
    // setCart(cartProduct);
    // console.log(savedCart[key]);
  }, []);
  let thankYou;
  if (orderPlaced) {
    thankYou = <img src={happyImage} alt="" />;
  }
  return (
    <div className="twin-container">
      <div className="product-container">
      {loading? <img className='loadingGif' src={loadingGif} alt="" />:
        cart.map((pd) => (
          <ReviewItems removeProduct={removeProduct} product={pd}></ReviewItems>
        ))}
        {thankYou}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handleProceedCheckout} className="main-button">
            Proceed checkout{" "}
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
