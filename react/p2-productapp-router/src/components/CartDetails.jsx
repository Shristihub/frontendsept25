import React from 'react'
import { useLocation } from 'react-router-dom';

const CartDetails = () => {
    const location = useLocation();
    // console.log(location); 
    //detsructure the product object from location.state, 
    // with a fallback to an empty object if state is undefined
    let {product} = location.state || {}; 
    console.log(product);
  return (
    <div>
      <h2>Cart Details</h2>
    </div>
  )
}

export default CartDetails