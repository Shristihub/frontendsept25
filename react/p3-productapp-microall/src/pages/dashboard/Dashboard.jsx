import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <h1 style={{textAlign:'center'}}> Admin Dashboard</h1>
      <div className="dashboard-container">
        <div className="dash-card">
          <h3> Product Dashboard</h3>
          <p>Add, Edit, Delete Products</p>
          <hr />
          <div className="cardlink">
            <div className="addlink">
              <Link to="products/add">Add Product</Link>
            </div>
            <div className="updatelink">
              <Link to="products/update">Update</Link>
              <Link to="products/delete">Delete</Link>
            </div>
          </div>
        </div>
        <div className="dash-card">
          <h3> Brand Dashboard</h3>
          <p>Add, Edit, Delete Brands</p>
          <hr />
          <div className="cardlink">
            <div className="addlink">
              <Link to="brands/add">Add Brand</Link>
            </div>
            <div className="updatelink">
              <Link to="brands">View</Link>
              <Link to="brands/delete">Delete</Link>
            </div>
          </div>
        </div>
        <div className="dash-card">
          <h3> Category Dashboard</h3>
          <p>Add, Edit, Delete Category</p>
          <hr />
          <div className="cardlink">
            <div className="addlink">
              <Link to="categories/add">Add Category</Link>
            </div>
            <div className="updatelink">
              <Link to="categories">View</Link>
              <Link to="categories/delete">Delete</Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
