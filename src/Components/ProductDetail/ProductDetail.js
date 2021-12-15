import React,{useState} from "react";
import { useParams } from "react-router";
import fakeData from "./../../fakeData/index";
import Product from "./../Product/Product";

const ProductDetail = () => {
  const [loading, setLoading] = useState(true);
  const { productKey } = useParams();
  const product = fakeData.find(
    (pd) => pd.key === productKey);

  return (
    <div>
      <h1>Product details</h1>
      {
        loading? <p>Loading...</p>:
        <Product showAddToCart={false} product={product}></Product>
      }
      
    </div>
  );
};

export default ProductDetail;
