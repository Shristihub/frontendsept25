import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">AboutUs</Link>
      <Link to="/products">Products</Link>
      <Link to="/books">Books</Link>
      <Link to="/contact">ContactUs</Link>
    </nav>
    </>
  )
}

export default Navbar
