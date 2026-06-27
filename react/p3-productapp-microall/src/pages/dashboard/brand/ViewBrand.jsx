import React, { useEffect, useState } from "react";
import { viewAllBrands } from "../../../service/BrandService";
import { useNavigate } from "react-router-dom";

const ViewBrand = () => {
  const navigate = useNavigate();
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    viewAllBrands().then(
      (res) => setBrands(res.data),
      (error) => console.log(error),
    );
  }, []);
  return (
    <>
      <ul>
        {brands.map((brand) => (
          <li key={brand.brandId}>{brand.brandName}</li>
        ))}
      </ul>
      <button onClick={() => navigate("/dashboard")}>Back</button>
    </>
  );
};

export default ViewBrand;
