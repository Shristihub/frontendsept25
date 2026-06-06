import React from 'react'
import { Outlet } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <>
    <div>
      <h3>{product.productName}</h3>
      <p>{product.price}</p>
      <button>View Details</button>
    </div>
    <Outlet /> {/* This will render the nested routes (if any) */}
    </>
  )
}

export default ProductCard
