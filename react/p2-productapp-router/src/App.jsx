import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Navbar from "./components/Navbar";
import ProductList from "./components/products/ProductList";
import { PageNotFound } from "./components/PageNotFound";
import Books from "./components/books/Books";
import BuyBooks from "./components/books/BuyBooks";
import RentBooks from "./components/books/RentBooks";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<Aboutus />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        {/* nested routes for books */}
        <Route path="/books" element={<Books />}>
          <Route path="/books/buy" element={<BuyBooks />}></Route>
          <Route path="/books/rent" element={<RentBooks />}></Route>
        </Route>

        <Route path="/contact" element={<Contactus />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
