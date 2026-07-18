import { useEffect, useState } from "react";
import { getProducts } from "../../service/CatalogService";
import "./ProductList.css";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { getByCategoryName } from "../../service/CategoryService";

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
    fetchProducts();
    fetchByCategory();
  }, [categoryName]); // whenever categoryName changes, this effect will run
  if (loading) return <h2>Loading...</h2>;

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
