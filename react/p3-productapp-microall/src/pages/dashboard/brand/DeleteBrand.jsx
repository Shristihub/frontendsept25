import React, { useState } from "react";
import { deleteByCategoryId } from "../../../service/CategoryService";
import { useNavigate } from "react-router-dom";

const DeleteBrand = () => {
  const navigate = useNavigate();
  const [brandId, setBrandId] = useState(0);
  const handleDeleteBrand = (e) => {
    e.preventDefault();
    deleteByBrandId(brandId).then((res) => console.log(res.status));
  };
  return (
    <>
      <div>
        <form onSubmit={handleDeleteBrand}>
          <input
            type="text"
            name="brandId"
            id="brandId"
            value={brandId}
            onChange={(e) => setBrandId(e.target.value)}
          />
          <input type="submit" value="Delete Brand" />
        </form>
        <button onClick={() => navigate("/dashboard")}>Back</button>
      </div>
    </>
  );
};

export default DeleteBrand;
