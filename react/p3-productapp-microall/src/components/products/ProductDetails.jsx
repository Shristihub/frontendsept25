import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./ProductDetails.css";
import { getProductById } from "../../service/CatalogService";
import { addToCart } from "../../service/CartService";
const ProductDetails = () => {
  // Returns a function that lets you navigate programmatically in the browser
  //  in response to user interactions or effects.
  const navigate = useNavigate();

  // Returns an object of key/value-pairs of the dynamic params
  // from the current URL that were matched by the routes
  //any varaibale name can be used here instead of params
  // similar to pathvariable
  const params = useParams();
  const pid = params.id;
  //directly retrieve using destructuring
  // this is a string we need number
  const { id } = useParams();
  const prodId = parseInt(id);
  const [product,setProduct] = useState(null);
  const [quantity,setQuantity] = useState(0);

  //call catalog service to get one product by id
  useEffect(()=>{
    // returns a promise
    // getProductById(prodId).then(res=>{
    //   // console.log(res.data);  setProduct(res.data);
    // })
    const fetchById = async (productId) => {
      const res = await getProductById(productId);
      setProduct(res.data)
    }
    fetchById(prodId); // called when the page gets loaded everytime

  },[prodId]);

  if(!product)
    return <h2>Product not available</h2>

  const handleAddToCart = async ()=>{
    const cartItem = {
      productId: product.productId,
      userId:1, quantity
    }
   //call CartService
    const res = await addToCart(cartItem);
    // console.log(res.data);
    navigate("/products")

  }
  
  return (
    <div className="product-details">
      <h1>Product Details</h1>
      <h3>ProductName: {product.productName}</h3>
      <p>Price: {product.price}</p>
      <p>Description: {product.features.description}</p>
      <p>Color: {product.features.color}</p>
      <p>Ratings: {product.ratings}</p>
      {/* <p>OffersList: {product.offersList}</p>
      <p>Category: {product.categories}</p> */}
      <p>Brand: {product.brand.brandName}</p>
      <div>
        <button type="button"onClick={()=>setQuantity((q)=>q+1)}>+</button>
        <span>{quantity}</span>
        <button type="button"onClick={()=>setQuantity(q=>Math.max(1,q-1))}>-</button>
      </div>


      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate("/")}>Home</button>
      <Link onClick = {()=>handleAddToCart()}>
        <button>Add to Cart</button>
      </Link>
    </div>
  )

};

export default ProductDetails;
