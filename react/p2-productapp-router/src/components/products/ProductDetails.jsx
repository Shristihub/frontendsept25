import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { products } from "../../data/products.json";
import "./ProductDetails.css";
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

  // get the prouct By Id from json data
  const product = products.find((p) => p.productId === prodId);
  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="product-details">
      <h1>Product Details</h1>
      <h3>ProductName: {product.productName}</h3>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate("/")}>Home</button>
      <Link to="/cart" state={{ product }}>
        <button>Add to Cart</button>
      </Link>
    </div>
  );
};

export default ProductDetails;
