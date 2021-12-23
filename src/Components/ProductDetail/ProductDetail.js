import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Product from "./../Product/Product";
import loadingGif from "../../images/loadingGig.gif";

const ProductDetail = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { productKey } = useParams();

  useEffect(() => {
    fetch("https://secure-garden-38117.herokuapp.com/product/" + productKey)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data[0]);
        setLoading(false);

      });
  }, [productKey]);
  // <img src={loadingGif} className="loadingGif" alt="" />
  // const product = fakeData.find(
  //   (pd) => pd.key === productKey);

  return (
    <div>
      <h1>Product details</h1>
      {loading ? (
        <img className="loadingGif" src={loadingGif} alt="" />
      ) : (
        <Product showAddToCart={false} product={product}></Product>
      )}
    </div>
  );
};

export default ProductDetail;
