import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import { viewAllCategories } from "../service/CategoryService";

const Navbar = () => {
  const [categories,setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      let res = await viewAllCategories();
      setCategories(res.data);
    }
    fetchCategories();
  }, []);



  const navStyle = ({ isActive }) =>
    `px-3 py-2 text-md font-medium transition ${
      isActive ? "text-yellow-500 uppercase" : "text-white hover:text-black-300"
    }`;

  return (
    <nav className="flex items-center gap-2 bg-blue-950 px-6 py-2">
      <NavLink to="/" className={navStyle}>
        Home
      </NavLink>
      <NavLink to="/about" className={navStyle}>
        AboutUs
      </NavLink>
      <NavLink to="/products" className={navStyle}>
        ALL
      </NavLink>
      {categories.map((category) => (
        <NavLink  key={category.categoryId} 
                 className={navStyle}
                  to={`/products/category/${category.categoryId}`} >
          {category.categoryName}
        </NavLink>  
      ))}
      <NavLink to="/contact" className={navStyle}>
        ContactUs
      </NavLink>
    </nav>
  );
};

export default Navbar;