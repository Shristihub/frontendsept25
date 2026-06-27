import React, { useEffect, useState } from "react";
import { viewAllCategories } from "../../../service/CategoryService";
import { useNavigate } from "react-router-dom";

const ViewCategory = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    viewAllCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);
  return (
    <>
      <h2>View Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.categoryId}>{category.categoryName}</li>
        ))}
      </ul>
      <button onClick={() => navigate("/dashboard")}>Back</button>
    </>
  );
};

export default ViewCategory;
