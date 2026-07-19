import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition flex flex-col">
      <h3 className="text-sm font-semibold text-gray-800 truncate">
        {product.productName}
      </h3>

      <p className="mt-1 text-base font-medium text-gray-900">
        ₹{product.price}
      </p>

      <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
        <span className="text-amber-500">⭐</span>
        <span>{product.ratings}</span>
      </div>

      <p className="mt-1 text-xs text-gray-500">
        Color: {product.features.color}
      </p>

      <Link to={`/products/${product.productId}`} className="mt-3">
        <button className="w-full rounded-md bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700 transition">
          View Details
        </button>
      </Link>
    </div>
  )
}

export default ProductCard
