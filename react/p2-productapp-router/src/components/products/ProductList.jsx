import React from "react";
import { products } from "../../data/products.json";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div>
      <h1>Product List</h1>
    
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.productId}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
