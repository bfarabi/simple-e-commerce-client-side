import React from 'react';
import { useForm } from "react-hook-form";
import './Shipment.css';
import { useContext} from "react";
import { userContext } from './../../App';


const Shipment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example"));
  
    return (
      <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Your Name' defaultValue={loggedInUser.name} {...register("name")} />
        <br/>
        <input placeholder='Your Email' defaultValue={loggedInUser.email} {...register("email", { required: true })} />
        {errors.email && <span className='error'>This field is required</span>}
        <br/>
        <input placeholder='Your Address' {...register("address", { required: true })} />
        {errors.address && <span className='error'>This field is required</span>}
        <br/>
        <input placeholder='Your Phone Number' {...register("phone", { required: true })} />
        {errors.phone && <span className='error'>This field is required</span>}
        <br/>
        <input type="submit" />
      </form>
    );
  };

export default Shipment;