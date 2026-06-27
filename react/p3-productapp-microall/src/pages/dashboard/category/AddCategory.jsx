import React, { useState,  } from "react";
import { addCategory } from "../../../service/CategoryService";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
   const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState("");
  const handleAddCategory = (e) => {
    e.preventDefault();
    let category = {
      categoryName: categoryName,
    }
    addCategory(category).then(
        
        res=>console.log(res.status),
        err=>console.log(err)
    );
  }
  return (
    <div>
      <form onSubmit={handleAddCategory}>
        <input
          type="text"
          name="categoryName"
          id="categoryName"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <input type="submit" value="Add Category" />
      </form>
        <button onClick={() => navigate("/dashboard")}>Back</button>
    </div>
  );
};

export default AddCategory;
