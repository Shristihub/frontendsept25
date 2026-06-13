import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
 // destructure the props and pass the property directly
   const navStyle = ({isActive})=>{
    //returns an object to the style
     return ({
    color:isActive?'red':"white",
    textTransform:isActive?'Uppercase':'none'
   })
   }

 return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink
          to="/about">
          AboutUs
        </NavLink>
        <NavLink to="/products" style={navStyle}>
          Products
        </NavLink>
       <NavLink to="/contact">ContactUs</NavLink>
      </nav>

      {/* <nav>
      <Link to="/">Home</Link>
      <Link to="/about">AboutUs</Link>
      <Link to="/products">Products</Link>
      <Link to="/books">Books</Link>
      <Link to="/contact">ContactUs</Link>
    </nav> */}
    </>
  );
};

export default Navbar;
