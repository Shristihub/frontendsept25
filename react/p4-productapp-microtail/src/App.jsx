import { Route, Routes } from "react-router-dom";
import "./App.css";
import Aboutus from "./pages/Aboutus";
// import CartDetails from "./components/CartDetails";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/products/ProductDetails";
import ProductList from "./components/products/ProductList";
import Contactus from "./pages/Contactus";
import AddBrand from "./pages/dashboard/brand/AddBrand";
import DeleteBrand from "./pages/dashboard/brand/DeleteBrand";
import ViewBrand from "./pages/dashboard/brand/ViewBrand";
import AddCategory from "./pages/dashboard/category/AddCategory";
import DeleteCategory from "./pages/dashboard/category/DeleteCategory";
import ViewCategory from "./pages/dashboard/category/ViewCategory";
import Dashboard from "./pages/dashboard/Dashboard";
import AddProduct from "./pages/dashboard/product/AddProduct";
import DeleteProduct from "./pages/dashboard/product/DeleteProduct";
import UpdateProduct from "./pages/dashboard/product/UpdateProduct";
import Home from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";
import Products from "./pages/products/Products";
import CartDetails from "./components/products/CartDetails";
import Header from "./components/Header";
const App = () => {
  return (
    <div>
      <Header/>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<Aboutus />}></Route>
        {/* nested route */}
        <Route path="/products" element={<Products />}>
          <Route index element={<ProductList />} />
          {/* passing data in url using path variable */}
          <Route path=":id" element={<ProductDetails />}></Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
          {/* brand */}
          <Route path="/dashboard/brands/add" element={<AddBrand />} />
          <Route path="/dashboard/brands" element={<ViewBrand />} />
          <Route path="/dashboard/brands/delete" element={<DeleteBrand />} />

          {/* category */}
          <Route path="/dashboard/categories/add" element={<AddCategory />} />
          <Route path="/dashboard/categories" element={<ViewCategory />} />
          <Route path="/dashboard/categories/delete" element={<DeleteCategory />} />

          {/* product */}
          <Route path="/dashboard/products/add" element={<AddProduct />} />
          <Route path="/dashboard/products/update" element={<UpdateProduct />} />
          <Route path="/dashboard/products/delete" element={<DeleteProduct />} />
        {/* <Route path="/cart" element={<CartDetails/>}></Route> */}
        <Route path="/contact" element={<Contactus />}></Route>
        <Route path="/cart" element={<CartDetails />}></Route>
        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
