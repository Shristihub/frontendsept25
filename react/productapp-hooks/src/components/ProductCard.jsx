import React from "react";
import './ProductCard.css'

const ProductCard = ({ product, onViewDetails }) => {
  return (
    <>
       <div className="card"> 
        <div key={product.productId} className="card-body">
          <h2>{product.productName}</h2>
          <h3>{product.price}</h3>
          <button onMouseOver={() => onViewDetails(product)}>ViewDetails</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
