import React from "react";
import { useForm } from "react-hook-form";
import "./Shipment.css";
import { useContext } from "react";
import { userContext } from "./../../App";
import { getDatabaseCart, processOrder } from "../../utilities/databaseManager";

const Shipment = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const savedCart = getDatabaseCart();
   const orderDetails = {...loggedInUser, products: savedCart, shipment: data, orderTime: new Date() }
   
   fetch('https://secure-garden-38117.herokuapp.com/addOrder',{
    method:'POST',
    headers:{'Content-Type' : 'application/json'},
    body: JSON.stringify(orderDetails)
})
.then(res => res.json())
.then(data => {
  console.log(data);
  if(data == data){
    processOrder();
    alert('orderer placed successfully')
  }
})

  };

  return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Your Name"
        defaultValue={loggedInUser.name}
        {...register("name")}
      />
      <br />
      <input
        placeholder="Your Email"
        defaultValue={loggedInUser.email}
        {...register("email", { required: true })}
      />
      {errors.email && <span className="error">This field is required</span>}
      <br />
      <input
        placeholder="Your Address"
        {...register("address", { required: true })}
      />
      {errors.address && <span className="error">This field is required</span>}
      <br />
      <input
        placeholder="Your Phone Number"
        {...register("phone", { required: true })}
      />
      {errors.phone && <span className="error">This field is required</span>}
      <br />
      <input type="submit" />
    </form>
  );
};

export default Shipment;
