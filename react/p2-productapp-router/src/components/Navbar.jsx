import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const navStyle=(isActive)=>{
    return {
      color:isActive?'blue':'white',
      backgroundColor:isActive?'yellow':'transparent',
      // textTransform:isActive?'uppercase':'lowercase',
      // fontWeight:isActive?'bold':'normal'
    }
  }

  return (
    <>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about" 
          style={
            ({isActive})=>
              // int k=x>10?100:50;
              ({color:isActive?'red':'white',
                backgroundColor:isActive?'#febd69':'transparent',
                letterSpacing:isActive?'5px':'normal',
                fontWeight:isActive?'bold':'normal'
              })
          }
      >AboutUs</NavLink>
      <NavLink to="/products" style={()=>navStyle()} > Products</NavLink>
      <NavLink to="/books" >Books</NavLink>
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
  )
}

export default Navbar
