import { useEffect, useState } from "react";
import { getProducts } from "../../service/CatalogService";
import "./ProductList.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading,setLoading] = useState(true);
  // call service method to get the promise
  useEffect(() => {
    //call getProducts that returns a promise
    getProducts().then(
      (res) => {
        // console.log(res.data);
        setProducts(res.data);
        setLoading(false);
      },
      (error) => console.log(error),
    );
  }, []);
  if(loading)
    return (
    <h2>Loading...</h2>
    )

  return (
    <>
      <h2>ProductList</h2>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card">
            <ProductCard
              key={product.productId}
              product={product}
            ></ProductCard>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
