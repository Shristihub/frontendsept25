import { Route, Routes } from "react-router-dom";
import "./App.css";
import Aboutus from "./components/Aboutus";
// import CartDetails from "./components/CartDetails";
import Contactus from "./components/Contactus";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { PageNotFound } from "./components/PageNotFound";
import ProductDetails from "./components/products/ProductDetails";
import ProductList from "./components/products/ProductList";
import Products from "./components/products/Products";
const App = () => {
  return (
    <div>
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
       
        {/* <Route path="/cart" element={<CartDetails/>}></Route> */}
        <Route path="/contact" element={<Contactus />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
