import React, { useState } from 'react'
import ProductCard from './ProductCard'
 

const ProductList = ({products,onSelectProduct}) => {
   
    let handleSelectedProduct= (product)=>{
        console.log("Selected Product",product);
        //call the function passed from App and pass the selected product
        onSelectProduct(product);
    }
  return (
    <div>
      {products.map(product=>
        <ProductCard product={product}
                key={product.productId}
                onViewDetails={()=>handleSelectedProduct(product)}
                ></ProductCard>

      )}
   
    </div>
  )
}

export default ProductList
