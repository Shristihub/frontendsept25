import React from 'react'

const ProductDetails = ({product}) => {
  return (
    product==null?
      <h2>Please select a product to view details</h2>
      :
    <div>
      <h2>{product.productName}</h2>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price: ${product.price.toFixed(2)}</strong></p>
      <p><strong>Category: {product.category}</strong></p>
      <p><strong>Brand: {product.brand}</strong></p>
      <p><strong>{product.stock>50?"Available":"Out Of Stock"}</strong></p>
    </div>
    
  )
}

export default ProductDetails
