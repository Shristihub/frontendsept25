import React, { useState } from "react";
import ProductList from "./components/ProductList";
import { products } from "./data/products.json";
import ProductDetails from "./components/ProductDetails";
import "./App.css";
const App = () => {
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  let handleSelected = (product) => {
    console.log("Selected Product in App");
    setSelectedProduct(product);
  };
  return (
    <>
      <div className="container">
        <div className="leftpanel">
          <ProductList
            products={products}
            onSelectProduct={handleSelected}
          ></ProductList>
        </div>
        <div className="rightpanel">
        <ProductDetails product={selectedProduct}></ProductDetails>
      </div>
      </div>
    </>
  );
};

export default App;
