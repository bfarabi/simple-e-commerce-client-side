import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Rating from "react-rating";


const Product = (props) => {
  const { name, img, seller, stock, price, key, star } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h5 className="product-name">
          <Link to={"/product/" + key}>{name}</Link>{" "}
        </h5>
        <small> by: {seller}</small>
        <br />
        <p> ${price}</p> <br />
        <p>
          <small>only {stock} left in stock- Order soon</small>
        </p>
        {/* <Rating
          initialRating={star}
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color"
          readonly
        ></Rating>
        <br /> */}
        {props.showAddToCart && (
          <button
            className="main-button"
            onClick={() => props.handleAddProduct(props.product)}
          >
            {" "}
            <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
