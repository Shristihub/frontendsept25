import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export const PageNotFound = () => {
  const location= useLocation();
  
  return (
    <div>
        <p>The page you are looking {location.pathname} for does not exist.</p>
        {/* <Navigate to="/products">Home</Navigate> */}
    </div>
  )
}
