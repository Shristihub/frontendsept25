import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <>
    <div>
      <h3>{product.productName}</h3>
      <p>{product.price}</p>
      <Link to={`${product.productId}`}>
      <button>View Details</button>
      </Link>
    </div>
   
    </>
  )
}

export default ProductCard
