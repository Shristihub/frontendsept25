import React from "react";
import { Link, Outlet } from "react-router-dom";

const Books = () => {
  return (
    <div>
      <h1>Books</h1>
      <Link to="buy">
        <button>Buy Books</button>
      </Link>
      <Link to="rent">
        <button>Rent Books</button>
      </Link>
      <Outlet /> {/* This will render the nested routes (BuyBooks or RentBooks) */}
    </div>
  );
};

export default Books;
