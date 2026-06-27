import React from 'react'
import { Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <hr />
      <Outlet /> {/* This will render the nested routes (if any) */}
    </div>
  )
}

export default Products
