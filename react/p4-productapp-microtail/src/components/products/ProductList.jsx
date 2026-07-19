import { useEffect, useState } from "react";
import { getProducts } from "../../service/CatalogService";
import "./ProductList.css";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { getByCategoryName } from "../../service/CatalogService";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams(); // get the categoryName from the url

  // call service method to get the promise
  useEffect(() => {
    //call getProducts that returns a promise
    const fetchProducts = async () => {
      const res = await getProducts();
      setProducts(res.data);
      setLoading(false);
    };

    const fetchByCategory = async () => {
      let res = await getByCategoryName(categoryName);
      setProducts(res.data);
      setLoading(false);
    };
   if (categoryName) {
      fetchByCategory();
    } else {
      fetchProducts();
    }
  }, [categoryName]); // whenever categoryName changes, this effect will run
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-gray-500 text-sm">Loading...</p>
      </div>
    );
  }
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
