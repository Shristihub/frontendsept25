import React, { useState } from "react";
import { deleteByCategoryId } from "../../../service/CategoryService";
import { useNavigate } from "react-router-dom";

const DeleteCategory = () => {
   const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState(0);
  const handleDeleteCategory = (e) => {
    e.preventDefault();
    deleteByCategoryId(categoryId).then((res) => console.log(res.status));
  };
  return (
    <>
      <div>
        <form onSubmit={handleDeleteCategory}>
          <input
            type="text"
            name="categoryId"
            id="categoryId"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          />
          <input type="submit" value="Delete Category" />
        </form>
          <button onClick={() => navigate("/dashboard")}>Back</button>
      </div>
    </>
  );
};

export default DeleteCategory;
