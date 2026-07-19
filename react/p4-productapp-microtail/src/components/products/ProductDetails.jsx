import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

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
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);

  //call catalog service to get one product by id
  useEffect(() => {
    // returns a promise
    // getProductById(prodId).then(res=>{
    //   // console.log(res.data);  setProduct(res.data);
    // })
    const fetchById = async (productId) => {
      const res = await getProductById(productId);
      setProduct(res.data);
    };
    fetchById(prodId); // called when the page gets loaded everytime
  }, [prodId]);

  if (!product) return <h2>Product not available</h2>;

  const handleAddToCart = async () => {
    const cartItem = {
      productId: product.productId,
      quantity,
    };
    //call CartService
    const res = await addToCart(cartItem);
    // console.log(res.data);
    navigate("/products");
  };

  return (
   <div className="max-w-xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm p-6 my-8">
  <h1 className="text-xl font-semibold text-gray-800 mb-4">Product Details</h1>

  <h3 className="text-lg font-medium text-gray-900">{product.productName}</h3>

  <div className="mt-3 space-y-1.5 text-sm text-gray-600">
    <p>
      <span className="font-medium text-gray-800">Price:</span> ₹{product.price}
    </p>
    <p>
      <span className="font-medium text-gray-800">Description:</span>{" "}
      {product.features.description}
    </p>
    <p>
      <span className="font-medium text-gray-800">Color:</span> {product.features.color}
    </p>
    <p className="flex items-center gap-1">
      <span className="font-medium text-gray-800">Ratings:</span>
      <span className="text-amber-500">⭐</span>
      <span>{product.ratings}</span>
    </p>
    <p>
      <span className="font-medium text-gray-800">Brand:</span> {product.brand.brandName}
    </p>
  </div>

  <div className="mt-5 flex items-center gap-3">
    <span className="text-sm font-medium text-gray-700">Quantity:</span>
    <button
      type="button"
      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
      className="w-8 h-8 rounded-md bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 transition"
    >
      −
    </button>
    <span className="w-6 text-center text-sm font-medium">{quantity}</span>
    <button
      type="button"
      onClick={() => setQuantity((q) => q + 1)}
      className="w-8 h-8 rounded-md bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 transition"
    >
      +
    </button>
  </div>

  <div className="mt-6 flex flex-wrap gap-3">
    <button
      onClick={handleAddToCart}
      className="flex-1 rounded-md bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition"
    >
      Add to Cart
    </button>
    <button
      onClick={() => navigate(-1)}
      className="rounded-md bg-gray-100 border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 transition"
    >
      Back
    </button>
    <button
      onClick={() => navigate("/")}
      className="rounded-md bg-gray-100 border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 transition"
    >
      Home
    </button>
  </div>
</div>
  );
};

export default ProductDetails;
